"""Generate profile photo crops, OG image and favicons for the portfolio.

Source (never modified): assets/images/profile/original.jpg
Output:                  public/assets/images/profile/  and  public/ (favicons)

Run:  python scripts/profile_images.py
Needs: pip install pillow "opencv-python-headless<5"   (OpenCV only used to report the detected face)
Fonts for the OG image are downloaded into scripts/.fonts (git-ignored) on first run.

Crop boxes were measured on the 2308x3232 original:
  head top y~463, hairline ~583, chin ~1150, eye line ~843, face centre x~1060.
  Square 1300px, top 336  -> eyes 39%, headroom 9.8%, face 43.6% of height.
  Portrait 1280x1600, top 275 -> eyes 35.5%, headroom ~11.8%.
The camera is level (head tilt is pose), so no rotation is applied.
Adjust SQUARE / PORTRAIT below to make the framing tighter or looser.
"""
from pathlib import Path
import urllib.request

from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageFont, ImageOps

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "assets/images/profile/original.jpg"
OUT = ROOT / "public/assets/images/profile"
PUBLIC = ROOT / "public"
FONTS = Path(__file__).resolve().parent / ".fonts"

GREEN = (31, 61, 46)
GREEN_DEEP = (22, 48, 31)
GOLD = (242, 169, 58)
CREAM = (251, 249, 246)

FACE_CX = 1060
SQUARE = (FACE_CX - 650, 336, 1300)  # left, top, side
PORTRAIT = (FACE_CX - 640, 275, 1280, 1600)  # left, top, w, h

FONT_URLS = {
    "Poppins-SemiBold.ttf": "https://github.com/google/fonts/raw/main/ofl/poppins/Poppins-SemiBold.ttf",
    "Poppins-Medium.ttf": "https://github.com/google/fonts/raw/main/ofl/poppins/Poppins-Medium.ttf",
    "Poppins-Bold.ttf": "https://github.com/google/fonts/raw/main/ofl/poppins/Poppins-Bold.ttf",
    "PlayfairDisplay-Italic.ttf": "https://github.com/google/fonts/raw/main/ofl/playfairdisplay/PlayfairDisplay-Italic%5Bwght%5D.ttf",
}


def font(name, size):
    FONTS.mkdir(exist_ok=True)
    path = FONTS / name
    if not path.exists():
        urllib.request.urlretrieve(FONT_URLS[name], path)
    return ImageFont.truetype(str(path), size)


def touch_up(img):
    """Light, natural: +4% brightness, +6% contrast. No smoothing or filters."""
    img = ImageEnhance.Brightness(img).enhance(1.04)
    return ImageEnhance.Contrast(img).enhance(1.06)


def resize(img, size):
    out = img.resize(size, Image.LANCZOS)
    # slight sharpening after resizing (~ sharp sigma 0.6)
    return out.filter(ImageFilter.UnsharpMask(radius=0.6, percent=60, threshold=2))


def save_pair(img, stem):
    # Pillow only writes EXIF when asked, so metadata (incl. GPS) is stripped.
    img.save(OUT / f"{stem}.webp", "WEBP", quality=82, method=6)
    img.save(OUT / f"{stem}.jpg", "JPEG", quality=85, progressive=True, optimize=True)


def report_face(path):
    try:
        import cv2
    except ImportError:
        return
    g = cv2.cvtColor(cv2.imread(str(path)), cv2.COLOR_BGR2GRAY)
    fc = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_frontalface_default.xml")
    print("detected face (x, y, w, h):", fc.detectMultiScale(g, 1.1, 6, minSize=(200, 200)).tolist())


def favicon(size):
    s = size * 4
    im = Image.new("RGBA", (s, s), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    d.rounded_rectangle((0, 0, s - 1, s - 1), radius=int(s * 0.24), fill=GREEN)
    f = font("Poppins-SemiBold.ttf", int(s * 0.62))
    bbox = d.textbbox((0, 0), "A", font=f)
    w, h = bbox[2] - bbox[0], bbox[3] - bbox[1]
    x = (s - w) / 2 - bbox[0] - s * 0.05
    y = (s - h) / 2 - bbox[1]
    d.text((x, y), "A", font=f, fill=CREAM)
    r = s * 0.075
    cx, cy = x + bbox[2] + s * 0.06, y + bbox[3] - r
    d.ellipse((cx - r, cy - r, cx + r, cy + r), fill=GOLD)
    return im.resize((size, size), Image.LANCZOS)


def og_image(portrait):
    W, H = 1200, 630
    og = Image.new("RGB", (W, H), GREEN)
    d = ImageDraw.Draw(og)
    # soft gold glow behind photo
    glow = Image.new("L", (W, H), 0)
    ImageDraw.Draw(glow).ellipse((40, 60, 520, 640), fill=110)
    glow = glow.filter(ImageFilter.GaussianBlur(90))
    og.paste(Image.new("RGB", (W, H), GOLD), mask=glow)
    # photo (4:5) with rounded corners
    ph = resize(portrait, (432, 540))
    mask = Image.new("L", ph.size, 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, *ph.size), radius=36, fill=255)
    d.rounded_rectangle((84, 57, 84 + 432, 57 + 540), radius=36, outline=GOLD, width=3)
    og.paste(ph, (72, 45), mask)
    tx = 590
    d.text((tx, 168), "Hello, I'm", font=font("PlayfairDisplay-Italic.ttf", 40), fill=GOLD)
    d.text((tx, 220), "Uwihirwe", font=font("Poppins-Bold.ttf", 76), fill=CREAM)
    d.text((tx, 306), "Anitha", font=font("Poppins-Bold.ttf", 76), fill=CREAM)
    d.rounded_rectangle((tx, 410, tx + 70, 416), radius=3, fill=GOLD)
    d.text((tx, 436), "Full-Stack Developer", font=font("Poppins-SemiBold.ttf", 38), fill=GOLD)
    d.text((tx, 496), "Web · Mobile · AI  —  Based in Rwanda", font=font("Poppins-Medium.ttf", 24), fill=(197, 215, 203))
    d.text((tx, 560), "uwihirwe.enoveta.com", font=font("Poppins-Medium.ttf", 22), fill=(161, 185, 170))
    og.save(OUT / "og-image-1200x630.jpg", "JPEG", quality=85, progressive=True, optimize=True)


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    report_face(SRC)
    img = ImageOps.exif_transpose(Image.open(SRC)).convert("RGB")
    print("original size:", img.size)
    img = touch_up(img)

    l, t, s = SQUARE
    square = img.crop((l, t, l + s, t + s))
    for size in (800, 400):
        save_pair(resize(square, (size, size)), f"profile-square-{size}")

    l, t, w, h = PORTRAIT
    portrait = img.crop((l, t, l + w, t + h))
    for pw, ph in ((960, 1200), (480, 600)):
        save_pair(resize(portrait, (pw, ph)), f"profile-portrait-{pw}x{ph}")

    og_image(portrait)

    favicon(32).save(PUBLIC / "favicon-32x32.png")
    favicon(180).convert("RGB").save(PUBLIC / "apple-touch-icon.png")  # iOS wants opaque
    favicon(512).save(PUBLIC / "icon-512.png")
    favicon(192).save(PUBLIC / "icon-192.png")
    favicon(48).save(PUBLIC / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])

    for p in sorted(OUT.iterdir()):
        print(f"{p.name:40s} {p.stat().st_size / 1024:6.1f} KB")


if __name__ == "__main__":
    main()
