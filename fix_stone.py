import glob
import re

def fix(fpath):
    with open(fpath, 'r') as f:
        content = f.read()

    content = content.replace('stone-100', 'zinc-200')
    content = content.replace('stone-200', 'zinc-300')
    content = content.replace('stone-300', 'zinc-400')
    content = content.replace('stone-400', 'zinc-400')
    
    # Check if there are other styling issues
    # I'll make the buttons have a gold border/fill on hover which is already done.
    
    with open(fpath, 'w') as f:
        f.write(content)

for f in glob.glob('src/components/*.tsx'):
    fix(f)
