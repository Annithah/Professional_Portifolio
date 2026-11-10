const BASE = "/assets/images/profile";
const ALT = "Uwihirwe Anitha, Full-Stack Developer";

/** variant "square": hero (400w/800w). variant "portrait": About section 4:5 (480w/960w). */
export default function ProfilePicture({ variant = "square", sizes, eager = false, className = "" }) {
  const square = variant === "square";
  const small = square ? "profile-square-400" : "profile-portrait-480x600";
  const large = square ? "profile-square-800" : "profile-portrait-960x1200";
  const [w1, w2] = square ? [400, 800] : [480, 960];
  const srcset = (ext) => `${BASE}/${small}.${ext} ${w1}w, ${BASE}/${large}.${ext} ${w2}w`;
  return (
    <picture>
      <source type="image/webp" srcSet={srcset("webp")} sizes={sizes} />
      <img
        src={`${BASE}/${small}.jpg`}
        srcSet={srcset("jpg")}
        sizes={sizes}
        width={w1}
        height={square ? 400 : 600}
        alt={ALT}
        loading={eager ? "eager" : "lazy"}
        decoding={eager ? "sync" : "async"}
        {...(eager ? { fetchpriority: "high" } : {})}
        className={`w-full h-full object-cover ${className}`}
        style={{ objectPosition: square ? "50% 35%" : "50% 30%" }}
      />
    </picture>
  );
}
