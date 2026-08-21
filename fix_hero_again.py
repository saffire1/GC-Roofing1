import re

with open('src/components/Hero.tsx', 'r') as f:
    content = f.read()

# Replace the BlurImage line
old_line = '<BlurImage src="https://images.unsplash.com/photo-1632759147040-c6508935c128?q=80&w=2800&auto=format&fit=crop" alt="Professional roofing project" className="absolute inset-0 w-full h-full" imgClassName="object-center" priority />'
new_line = '''
      <div className="absolute inset-0 z-0">
        <BlurImage src="https://images.unsplash.com/photo-1632759147040-c6508935c128?q=80&w=2800&auto=format&fit=crop" alt="Professional roofing project" className="w-full h-full" imgClassName="object-center" priority />
      </div>
'''
content = content.replace(old_line, new_line.strip())

# Make it more luxurious:
# Increase padding, refine typography, adjust black overlays so the image is more visible
content = content.replace('bg-black/50', 'bg-black/40')
content = content.replace('from-black/90 via-black/30', 'from-black/90 via-black/40')

with open('src/components/Hero.tsx', 'w') as f:
    f.write(content)
