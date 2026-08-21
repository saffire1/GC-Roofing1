import re

with open('src/components/Hero.tsx', 'r') as f:
    content = f.read()

# Replace the broken Unsplash image with a known working, beautiful modern house exterior
content = content.replace(
    'https://images.unsplash.com/photo-1504307651254-35680f356f58?q=80&w=2800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2800&auto=format&fit=crop'
)

with open('src/components/Hero.tsx', 'w') as f:
    f.write(content)
