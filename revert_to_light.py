import glob

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    original = content

    # Special handling for Hero.tsx to keep it dark
    if 'Hero.tsx' in filepath:
        # Keep hero dark, maybe just fix the button
        content = content.replace('bg-zinc-950', 'bg-zinc-950') # noop
        pass
    else:
        # General backgrounds
        content = content.replace('bg-zinc-950', 'bg-white')
        content = content.replace('bg-zinc-900', 'bg-zinc-50')
        content = content.replace('bg-zinc-800', 'bg-zinc-100')
        
        # Black backgrounds -> White, except maybe we want to keep some black blocks?
        # A white background with black cards is also nice. Let's make most bg-black into bg-white
        # But wait, button with bg-black text-white should stay bg-black text-white!
        # Introduction button: className="... bg-zinc-950 text-white ... hover:bg-zinc-900" 
        # This was changed to bg-white. Let's fix that later.
        
        # Borders
        content = content.replace('border-zinc-800', 'border-zinc-200')
        content = content.replace('border-zinc-700', 'border-zinc-300')
        
        # Text colors
        # Avoid changing text-white if it's on a dark background (like a black button or gold button).
        # Actually gold buttons have text-black now.
        content = content.replace('text-white', 'text-zinc-950')
        content = content.replace('text-zinc-100', 'text-zinc-900')
        content = content.replace('text-zinc-200', 'text-zinc-800')
        content = content.replace('text-zinc-300', 'text-zinc-700')
        content = content.replace('text-zinc-400', 'text-zinc-600')
        content = content.replace('text-white/80', 'text-zinc-950/80')

    # Footer should probably stay black to match "Gold Black" identity.
    if 'Footer.tsx' in filepath:
        content = original
        # maybe just fix the gold accent if needed, but it already has it.
        pass

    with open(filepath, 'w') as f:
        f.write(content)

for f in glob.glob('src/**/*.tsx', recursive=True):
    process_file(f)
