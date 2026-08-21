with open('src/components/Hero.tsx', 'r') as f:
    content = f.read()

content = content.replace(
    'bg-zinc-950/60 z-10 mix-blend-multiply',
    'bg-black/50 z-10'
)
content = content.replace(
    'from-zinc-950/90 via-zinc-950/40',
    'from-black/90 via-black/30'
)
# change the image to a much nicer roofing unsplash image
content = content.replace(
    'https://live.staticflickr.com/65535/55399113314_c5c5c6b386_b.jpg',
    'https://images.unsplash.com/photo-1632759147040-c6508935c128?q=80&w=2800&auto=format&fit=crop'
)

with open('src/components/Hero.tsx', 'w') as f:
    f.write(content)
