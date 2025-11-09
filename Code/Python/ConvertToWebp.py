from pathlib import Path
from PIL import Image
from send2trash import send2trash 


# === Settings ===
SRC_DIR = Path("C:/Users/Uporabnik/Documents/JS/HauntingTheHauntessa/Assets/Graphics")         
QUALITY = 85                # 0..100 (ignored if LOSSLESS=True)
METHOD = 6                  # 0..6 (higher = better compression, slower)
LOSSLESS = False            # True = pixel-perfect, typically larger files
DELETE_ORIGINALS = True    # True = move PNGs to recycle bin after successful conversion
#SUFFIX = "png"
SUFFIX = "jpg"

# === Convert ===
converted = skipped = deleted = 0
for png in (p for p in SRC_DIR.rglob("*") if p.suffix.lower() == f".{SUFFIX}"):
    out = png.with_suffix(".webp")
    if out.exists():
        print(f"skipped {out}")
        skipped += 1
        
        if DELETE_ORIGINALS:
            send2trash(str(png))
            print(f"deleted {png}")
            deleted += 1
        continue
    try:
        with Image.open(png) as im:
            im.save(out, "WEBP", quality=QUALITY, method=METHOD, lossless=LOSSLESS)
            print(f"{png} to {out}")
        converted += 1

        if DELETE_ORIGINALS:
            send2trash(str(png))
            print(f"deleted {png}")
            deleted += 1
            
    except Exception as e: print(f"Failed on {png}: {e}")

print(f"Done. Converted: {converted}, skipped: {skipped}, deleted: {deleted}")
