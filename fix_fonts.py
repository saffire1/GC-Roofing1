import glob
import re

def fix(fpath):
    with open(fpath, 'r') as f:
        content = f.read()

    # Add font-serif to major headings (h1 and h2)
    content = content.replace('className="text-4xl sm:text-5xl lg:text-7xl font-bold', 'className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold')
    content = content.replace('className="text-3xl md:text-4xl lg:text-5xl font-bold', 'className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold')
    content = content.replace('className="text-3xl md:text-4xl font-bold', 'className="font-serif text-3xl md:text-4xl font-bold')

    with open(fpath, 'w') as f:
        f.write(content)

for f in glob.glob('src/components/*.tsx'):
    fix(f)
