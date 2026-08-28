import os
import img2pdf

def generate_pdf(image_paths, output_pdf):
    # Filter out missing paths
    existing_paths = [p for p in image_paths if os.path.exists(p)]
    
    if existing_paths:
        with open(output_pdf, "wb") as f:
            f.write(img2pdf.convert(existing_paths))
        print(f"PDF generated: {output_pdf}")
    else:
        print("No images found to generate PDF.")

if __name__ == "__main__":
    base_dir = "/Users/lorenzofrasconi/.gemini/antigravity/brain/cb476af2-7187-44f1-a781-a8b1850dd1a3/"
    image_files = [
        "home_page_full_1776701905190.png",
        "chi_siamo_full_1776701923526.png",
        "sedi_full_1776701940023.png",
        "documenti_full_1776701967577.png",
        "manifesto_full_1776701986627.png"
    ]
    image_paths = [os.path.join(base_dir, f) for f in image_files]
    output_pdf = "/Users/lorenzofrasconi/Desktop/Agent AI/zefiro-web/screenshots/zefiro_net_website.pdf"
    generate_pdf(image_paths, output_pdf)
