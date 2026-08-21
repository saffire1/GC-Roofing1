import re

with open('src/components/Gallery.tsx', 'r') as f:
    content = f.read()

content = content.replace(
    'whileInView={{ opacity: 1, scale: 1 }}',
    'whileInView={{ opacity: 1, y: 0 }}'
)

with open('src/components/Gallery.tsx', 'w') as f:
    f.write(content)
