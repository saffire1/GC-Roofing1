import re

with open('src/components/WhyUs.tsx', 'r') as f:
    content = f.read()

content = re.sub(r'transition=\{\{ duration: 0\.6, ease: "easeOut" \}\}\s*whileInView=\{\{ opacity: 1, y: 0 \}\}\s*viewport=\{\{ once: true \}\}\s*transition=\{\{ delay: 0\.1 \}\}',
    'whileInView={{ opacity: 1, y: 0 }}\n              viewport={{ once: true }}\n              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}',
    content)

content = content.replace('whileInView={{ opacity: 1, x: 0 }}', 'whileInView={{ opacity: 1, y: 0 }}')

with open('src/components/WhyUs.tsx', 'w') as f:
    f.write(content)
