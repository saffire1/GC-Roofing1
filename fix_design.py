import glob

def fix(fpath):
    with open(fpath, 'r') as f:
        content = f.read()

    if 'Services.tsx' in fpath:
        content = content.replace('bg-black border-t', 'bg-zinc-50 border-t')
        content = content.replace('bg-black w-16 h-16', 'bg-zinc-950 w-16 h-16') # icon bg can stay black
        
    if 'Contact.tsx' in fpath:
        content = content.replace('bg-black border-t', 'bg-zinc-50 border-t')
        content = content.replace('bg-black p-4', 'bg-white p-4') # map overlay
        
    if 'Reviews.tsx' in fpath:
        content = content.replace('bg-black p-8', 'bg-white p-8')
        
    if 'Introduction.tsx' in fpath:
        content = content.replace('bg-black p-6', 'bg-zinc-950 p-6') # The 15+ years card
        content = content.replace('text-zinc-950 mb-1">15+', 'text-white mb-1">15+')
        content = content.replace('text-zinc-600 font-medium">Years Serving', 'text-zinc-400 font-medium">Years Serving')

    with open(fpath, 'w') as f:
        f.write(content)

for f in glob.glob('src/components/*.tsx'):
    fix(f)
