import re

with open('src/components/Hero.tsx', 'r') as f:
    content = f.read()

# Replace the wrapper and BlurImage
old_block = '''      <div className="absolute inset-0 z-0">
        <BlurImage src="https://images.unsplash.com/photo-1632759147040-c6508935c128?q=80&w=2800&auto=format&fit=crop" alt="Professional roofing project" className="w-full h-full" imgClassName="object-center" priority />
      </div>'''

new_block = '''      <BlurImage src="https://images.unsplash.com/photo-1504307651254-35680f356f58?q=80&w=2800&auto=format&fit=crop" alt="Professional roofing project" className="absolute inset-0 w-full h-full z-0" imgClassName="object-cover object-center" priority />'''

if old_block in content:
    content = content.replace(old_block, new_block)
else:
    # fallback if spacing is different
    # just find the whole <div className="absolute inset-0 z-0">...</div>
    import re
    content = re.sub(r'<div className="absolute inset-0 z-0">\s*<BlurImage[^>]+>\s*</div>', new_block, content)

with open('src/components/Hero.tsx', 'w') as f:
    f.write(content)
