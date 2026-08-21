import os
import glob

def replace_in_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # We want a dark theme
    
    # 1. Backgrounds
    content = content.replace('bg-white', 'bg-black')
    content = content.replace('bg-stone-50', 'bg-zinc-950')
    content = content.replace('bg-stone-100', 'bg-zinc-900')
    content = content.replace('bg-stone-200', 'bg-zinc-800')
    
    content = content.replace('bg-navy-950', 'bg-black')
    content = content.replace('bg-navy-900', 'bg-zinc-950')
    content = content.replace('bg-navy-800', 'bg-zinc-900')
    content = content.replace('bg-navy-50', 'bg-zinc-900')
    
    # 2. Text colors
    content = content.replace('text-navy-900', 'text-white')
    content = content.replace('text-navy-800', 'text-zinc-100')
    content = content.replace('text-navy-700', 'text-zinc-300')
    content = content.replace('text-navy-600', 'text-zinc-400')
    content = content.replace('text-navy-500', 'text-zinc-500')
    
    content = content.replace('text-stone-900', 'text-white')
    content = content.replace('text-stone-800', 'text-zinc-200')
    content = content.replace('text-stone-600', 'text-zinc-400')
    content = content.replace('text-stone-500', 'text-zinc-500')
    
    # 3. Borders
    content = content.replace('border-stone-200', 'border-zinc-800')
    content = content.replace('border-stone-300', 'border-zinc-700')
    content = content.replace('border-navy-800', 'border-zinc-800')
    
    # 4. Accents
    content = content.replace('roofing-blue', 'gold')
    
    # 5. Buttons text - we want black text on gold buttons.
    # The gold buttons usually have 'bg-gold-500 text-white'. Let's replace 'bg-gold-500 text-white' with 'bg-gold-500 text-black'
    content = content.replace('bg-gold-500 text-white', 'bg-gold-500 text-black')
    
    # Also in some places it might be 'text-white px-6 py-2.5 bg-gold-500' -> not going to match exactly.
    # Let's just fix known buttons.
    
    with open(filepath, 'w') as f:
        f.write(content)

for filepath in glob.glob('src/**/*.tsx', recursive=True):
    replace_in_file(filepath)
