import glob

def fix(fpath):
    with open(fpath, 'r') as f:
        content = f.read()

    # We want text colors to be dark (zinc-600, zinc-700, zinc-800) because backgrounds are white
    content = content.replace('text-stone-100', 'text-zinc-900')
    content = content.replace('text-stone-200', 'text-zinc-800')
    content = content.replace('text-stone-300', 'text-zinc-700')
    content = content.replace('text-stone-400', 'text-zinc-600')
    
    # Wait, if Hero.tsx has text-stone-200, we WANT it to be light because Hero is dark!
    if 'Hero.tsx' in fpath or 'Footer.tsx' in fpath:
        # Restore them to light colors
        content = content.replace('text-zinc-900', 'text-stone-100')
        content = content.replace('text-zinc-800', 'text-stone-200')
        content = content.replace('text-zinc-700', 'text-stone-300')
        content = content.replace('text-zinc-600', 'text-stone-400')
        content = content.replace('text-zinc-950', 'text-white')
        pass
        
    with open(fpath, 'w') as f:
        f.write(content)

for f in glob.glob('src/**/*.tsx', recursive=True):
    fix(f)
