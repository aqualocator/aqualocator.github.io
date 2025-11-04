from PIL import Image
import os

folder = r"C:\Users\CKonkol\Documents\GitHub\aqualocator.github.io\welcome"  # change this path

for filename in os.listdir(folder):
    if filename.lower().endswith(".png"):
        path = os.path.join(folder, filename)
        img = Image.open(path)
        w_percent = 800 / float(img.size[0])
        h_size = int(float(img.size[1]) * w_percent)
        img = img.resize((800, h_size), Image.LANCZOS)
        img.save(path, "PNG")  # overwrite original
