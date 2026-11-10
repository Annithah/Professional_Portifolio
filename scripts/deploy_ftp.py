"""Deploy dist/ to cPanel over FTP (FTPS/TLS by default).

Credentials come from environment variables or a local .env file (git-ignored) — never commit them:
    FTP_HOST=ftp.enoveta.com
    FTP_USER=your-ftp-user
    FTP_PASS=your-ftp-password
    FTP_REMOTE_DIR=/            # document root of uwihirwe.enoveta.com, as seen by this FTP account
    FTP_PORT=21                 # optional
    FTP_ALLOW_PLAIN=0           # optional: 1 = allow unencrypted FTP if the server has no TLS

Usage:
    python scripts/deploy_ftp.py list              # show what is in FTP_REMOTE_DIR (check it's the right folder)
    python scripts/deploy_ftp.py backup            # download the live site to backups/backup-YYYY-MM-DD/
    python scripts/deploy_ftp.py deploy --yes      # backup, then upload dist/ (never deletes remote files)
"""
import datetime as dt
import ftplib
import os
import posixpath
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DIST = ROOT / "dist"
SKIP = {".git", "node_modules", ".env"}


def load_env():
    env_file = ROOT / ".env"
    if env_file.exists():
        for line in env_file.read_text(encoding="utf-8").splitlines():
            line = line.strip()
            if line and not line.startswith("#") and "=" in line:
                k, v = line.split("=", 1)
                os.environ.setdefault(k.strip(), v.strip().strip('"').strip("'"))
    missing = [k for k in ("FTP_HOST", "FTP_USER", "FTP_PASS", "FTP_REMOTE_DIR") if not os.environ.get(k)]
    if missing:
        sys.exit(f"Missing settings: {', '.join(missing)} (set them in .env or the environment)")


def connect():
    host, port = os.environ["FTP_HOST"], int(os.environ.get("FTP_PORT", "21"))
    user, pw = os.environ["FTP_USER"], os.environ["FTP_PASS"]
    try:
        ftp = ftplib.FTP_TLS(timeout=60)
        ftp.connect(host, port)
        ftp.login(user, pw)
        ftp.prot_p()
        print(f"Connected to {host} with TLS")
    except ftplib.error_perm as e:
        sys.exit(f"Login failed: {e}")
    except Exception as e:  # server without TLS
        if os.environ.get("FTP_ALLOW_PLAIN") != "1":
            sys.exit(f"TLS connection failed ({e}). Set FTP_ALLOW_PLAIN=1 to allow unencrypted FTP.")
        ftp = ftplib.FTP(timeout=60)
        ftp.connect(host, port)
        ftp.login(user, pw)
        print(f"Connected to {host} WITHOUT encryption")
    ftp.cwd(os.environ["FTP_REMOTE_DIR"])
    print("Remote dir:", ftp.pwd())
    return ftp


def entries(ftp, path):
    """Yield (name, is_dir) for a remote directory."""
    try:
        for name, facts in ftp.mlsd(path):
            if name in (".", ".."):
                continue
            yield name, facts.get("type") == "dir"
    except ftplib.error_perm:  # server without MLSD
        for full in ftp.nlst(path):
            name = posixpath.basename(full)
            if name in (".", ".."):
                continue
            try:
                ftp.cwd(posixpath.join(path, name))
                ftp.cwd(os.environ["FTP_REMOTE_DIR"])
                yield name, True
            except ftplib.error_perm:
                yield name, False


def cmd_list(ftp):
    for name, is_dir in sorted(entries(ftp, "."), key=lambda x: (not x[1], x[0])):
        print(("[dir]  " if is_dir else "       ") + name)


def download_tree(ftp, remote, local):
    local.mkdir(parents=True, exist_ok=True)
    count = 0
    for name, is_dir in entries(ftp, remote):
        r = posixpath.join(remote, name)
        if is_dir:
            count += download_tree(ftp, r, local / name)
        else:
            with open(local / name, "wb") as fh:
                ftp.retrbinary(f"RETR {r}", fh.write)
            count += 1
    return count


def cmd_backup(ftp):
    stamp = dt.datetime.now().strftime("%Y-%m-%d_%H%M")
    dest = ROOT / "backups" / f"backup-{stamp}"
    n = download_tree(ftp, ".", dest)
    print(f"Backed up {n} files to {dest}")
    return dest


def ensure_dir(ftp, path):
    parts = [p for p in path.split("/") if p]
    cur = ""
    for p in parts:
        cur = f"{cur}/{p}" if cur else p
        try:
            ftp.mkd(cur)
        except ftplib.error_perm:
            pass  # exists


def cmd_deploy(ftp):
    if not (DIST / "index.html").exists():
        sys.exit("dist/index.html not found — run `npm run build` first")
    cmd_backup(ftp)
    files = [p for p in DIST.rglob("*") if p.is_file() and not (set(p.relative_to(DIST).parts) & SKIP) and not p.name.endswith(".map")]
    # upload assets first and index.html last, so visitors never get HTML pointing at missing files
    files.sort(key=lambda p: (p.name == "index.html", str(p)))
    for p in files:
        rel = p.relative_to(DIST).as_posix()
        if "/" in rel:
            ensure_dir(ftp, posixpath.dirname(rel))
        with open(p, "rb") as fh:
            ftp.storbinary(f"STOR {rel}", fh)
        print("uploaded", rel)
    print(f"Done: {len(files)} files uploaded (nothing deleted on the server).")


def main():
    if len(sys.argv) < 2 or sys.argv[1] not in ("list", "backup", "deploy"):
        sys.exit(__doc__)
    if sys.argv[1] == "deploy" and "--yes" not in sys.argv:
        sys.exit("Refusing to deploy without --yes (run `list` first to confirm the remote folder).")
    load_env()
    ftp = connect()
    try:
        {"list": cmd_list, "backup": cmd_backup, "deploy": cmd_deploy}[sys.argv[1]](ftp)
    finally:
        ftp.quit()


if __name__ == "__main__":
    main()
