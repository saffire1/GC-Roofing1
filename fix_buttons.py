import glob

def fix(fpath):
    with open(fpath, 'r') as f:
        content = f.read()
        
    # Fix Introduction.tsx
    if 'Introduction.tsx' in fpath:
        content = content.replace('bg-white text-zinc-950 px-8 py-3.5 rounded-sm font-semibold hover:bg-zinc-50', 'bg-black text-white px-8 py-3.5 rounded-sm font-semibold hover:bg-zinc-900')
        # Also fix the 15+ years badge: 'bg-black' -> became 'bg-black' ?
        # wait, in revert_to_light.py, 'bg-black' wasn't replaced! I skipped 'bg-black' replacing!
        # Ah! I didn't replace 'bg-black' at all. I only did bg-zinc-950 -> bg-white.
        # Let's check what 'bg-black' is in Introduction.tsx.
        
    # Fix QuoteSection.tsx
    if 'QuoteSection.tsx' in fpath:
        content = content.replace('bg-white text-zinc-950 font-semibold py-3.5 rounded-sm hover:bg-zinc-50', 'bg-gold-500 text-black font-semibold py-3.5 rounded-sm hover:bg-gold-600')
        content = content.replace('bg-black', 'bg-white')
        content = content.replace('text-zinc-950 px-4', 'text-zinc-950 bg-white px-4') # inputs
        # Wait, if inputs were bg-black before, they are now bg-black because I didn't replace it!
        # Let's just fix inputs
        content = content.replace('bg-black', 'bg-white')
        content = content.replace('text-zinc-950', 'text-black')

    with open(fpath, 'w') as f:
        f.write(content)

for f in glob.glob('src/**/*.tsx', recursive=True):
    fix(f)
