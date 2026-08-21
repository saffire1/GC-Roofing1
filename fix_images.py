import glob
import re

def fix(fpath):
    with open(fpath, 'r') as f:
        content = f.read()

    # Skip if no img
    if '<img ' not in content:
        return
        
    # We must add import BlurImage
    if 'BlurImage' not in content:
        # insert after the last import
        import_stmt = "import BlurImage from './ui/BlurImage';\n"
        if fpath == 'src/components/ui/BlurImage.tsx':
            return
        
        lines = content.split('\n')
        last_import = 0
        for i, line in enumerate(lines):
            if line.startswith('import '):
                last_import = i
                
        lines.insert(last_import + 1, import_stmt)
        content = '\n'.join(lines)

    # 1. Hero.tsx
    if 'Hero.tsx' in fpath:
        content = re.sub(
            r'<img\s+src="https://live\.staticflickr\.com/65535/55399113314_c5c5c6b386_b\.jpg"\s+alt="Professional roofing project"\s+className="absolute inset-0 w-full h-full object-cover object-center"\s*/>',
            '<BlurImage src="https://live.staticflickr.com/65535/55399113314_c5c5c6b386_b.jpg" alt="Professional roofing project" className="absolute inset-0 w-full h-full" imgClassName="object-center" priority />',
            content
        )
        
    # 2. Introduction.tsx
    if 'Introduction.tsx' in fpath:
        content = re.sub(
            r'<img\s+src="https://live\.staticflickr\.com/65535/55456907042_4b34a3b324_b\.jpg"\s+alt="Professional roofer working on a residential roof"\s+className="object-cover w-full h-full"\s*/>',
            '<BlurImage src="https://live.staticflickr.com/65535/55456907042_4b34a3b324_b.jpg" alt="Professional roofer working on a residential roof" className="w-full h-full absolute inset-0" />',
            content
        )
        
    # 3. WhyUs.tsx
    if 'WhyUs.tsx' in fpath:
        content = re.sub(
            r'<img\s+src="https://live\.staticflickr\.com/65535/54963666770_676c8909cc_b\.jpg"\s+alt="Detailed slate roof workmanship"\s+className="absolute inset-0 w-full h-full object-cover rounded-sm border border-navy-700"\s*/>',
            '<BlurImage src="https://live.staticflickr.com/65535/54963666770_676c8909cc_b.jpg" alt="Detailed slate roof workmanship" className="absolute inset-0 w-full h-full rounded-sm border border-zinc-200" />',
            content
        )
        
    # 4. Contact.tsx
    if 'Contact.tsx' in fpath:
        content = re.sub(
            r'<img\s+src="https://tile\.openstreetmap\.org/13/3960/2625\.png"\s+alt="Map view of Belfast"\s+className="w-full h-full object-cover opacity-50 grayscale"\s*/>',
            '<BlurImage src="https://tile.openstreetmap.org/13/3960/2625.png" alt="Map view of Belfast" className="absolute inset-0 w-full h-full opacity-50 grayscale" />',
            content
        )
        
    # 5. Gallery.tsx
    if 'Gallery.tsx' in fpath:
        content = re.sub(
            r'<img\s+src=\{image\.url\}\s+alt=\{image\.alt\}\s+className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"\s*/>',
            '<BlurImage src={image.url} alt={image.alt} className="absolute inset-0 w-full h-full" imgClassName="group-hover:scale-110" />',
            content
        )

    with open(fpath, 'w') as f:
        f.write(content)

for fpath in glob.glob('src/components/*.tsx'):
    fix(fpath)

