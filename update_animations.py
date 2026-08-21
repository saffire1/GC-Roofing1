import re

# 1. Update Services.tsx
with open('src/components/Services.tsx', 'r') as f:
    services = f.read()

# Already has motion.h2 and motion.p with y: 10, let's make it y: 30 and duration 0.6
services = re.sub(
    r'initial={{ opacity: 0, y: 10 }}',
    'initial={{ opacity: 0, y: 30 }}',
    services
)
services = re.sub(
    r'initial={{ opacity: 0, y: 20 }}',
    'initial={{ opacity: 0, y: 40 }}',
    services
)
# Make the whole section wrapper slightly animated if needed, or just keep the children staggered. The children already stagger well, we just increased the Y offset.

with open('src/components/Services.tsx', 'w') as f:
    f.write(services)

# 2. Update WhyUs.tsx
with open('src/components/WhyUs.tsx', 'r') as f:
    why_us = f.read()

why_us = why_us.replace(
    'initial={{ opacity: 0, y: 20 }}',
    'initial={{ opacity: 0, y: 30 }}\n              transition={{ duration: 0.6, ease: "easeOut" }}'
)
why_us = why_us.replace(
    'initial={{ opacity: 0, x: -20 }}',
    'initial={{ opacity: 0, y: 30 }}'
)
with open('src/components/WhyUs.tsx', 'w') as f:
    f.write(why_us)

# 3. Update Gallery.tsx
with open('src/components/Gallery.tsx', 'r') as f:
    gallery = f.read()

# Fix the bg-black -> bg-white so text-zinc-950 shows
gallery = gallery.replace('className="py-20 lg:py-28 bg-black"', 'className="py-20 lg:py-28 bg-zinc-50 border-t border-zinc-200"')

# Add motion to headers
gallery = gallery.replace(
    '<h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-950 mb-6 tracking-tight">',
    '''<motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-950 mb-6 tracking-tight"
          >'''
)
gallery = gallery.replace(
    '<p className="text-lg text-zinc-600">',
    '''<motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-lg text-zinc-600"
          >'''
)
gallery = gallery.replace('</p>', '</motion.p>', 1) # only replace first p closing
gallery = gallery.replace('</h2>', '</motion.h2>')

gallery = gallery.replace(
    'initial={{ opacity: 0, scale: 0.95 }}',
    'initial={{ opacity: 0, y: 40 }}'
)

with open('src/components/Gallery.tsx', 'w') as f:
    f.write(gallery)
