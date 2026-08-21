import re

with open('src/components/Services.tsx', 'r') as f:
    content = f.read()

# Add transition to h2
content = content.replace(
    'viewport={{ once: true }}\n            className="font-serif',
    'viewport={{ once: true }}\n            transition={{ duration: 0.6, ease: "easeOut" }}\n            className="font-serif'
)
# Update transition in p
content = content.replace(
    'transition={{ delay: 0.1 }}',
    'transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}'
)
# Update transition in cards
content = content.replace(
    'transition={{ duration: 0.4, delay: idx * 0.05 }}',
    'transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.05 }}'
)

with open('src/components/Services.tsx', 'w') as f:
    f.write(content)
