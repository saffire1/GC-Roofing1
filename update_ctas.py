import glob
import re

def update_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # The new classes we want for primary buttons
    # bg-black text-white border border-black hover:bg-gold-500 hover:border-gold-500 hover:text-black transition-all duration-300
    
    # 1. Header.tsx
    if 'Header.tsx' in filepath:
        content = content.replace(
            'bg-gold-500 text-black px-6 py-2.5 rounded-sm font-medium hover:bg-gold-600 transition-colors shadow-sm',
            'bg-black text-white border border-black hover:bg-gold-500 hover:border-gold-500 hover:text-black px-6 py-2.5 rounded-sm font-medium transition-all duration-300 shadow-sm'
        )
    
    # 2. Hero.tsx
    if 'Hero.tsx' in filepath:
        content = content.replace(
            'bg-gold-500 text-black px-8 py-4 rounded-sm font-semibold text-lg text-center hover:bg-gold-600 transition-colors shadow-lg flex items-center justify-center',
            'bg-black text-white border border-black hover:bg-gold-500 hover:border-gold-500 hover:text-black px-8 py-4 rounded-sm font-semibold text-lg text-center transition-all duration-300 shadow-lg flex items-center justify-center'
        )
        # Maybe the secondary button in Hero gets a white border and black text on hover?
        # The prompt says "Enhance the primary CTA buttons..." so let's stick to the primary ones or apply to all solid black ones.
        # It says "shifts the background from solid black to a elegant gold border/fill".
        # Let's apply this to the secondary hero button as well if it's already black!
        content = content.replace(
            'bg-black text-white px-8 py-4 rounded-sm font-semibold text-lg text-center hover:bg-zinc-900 transition-colors shadow-lg flex items-center justify-center',
            'bg-black text-white border border-zinc-700 hover:bg-gold-500 hover:border-gold-500 hover:text-black px-8 py-4 rounded-sm font-semibold text-lg text-center transition-all duration-300 shadow-lg flex items-center justify-center'
        )

    # 3. Introduction.tsx
    if 'Introduction.tsx' in filepath:
        content = content.replace(
            'bg-black text-white px-8 py-3.5 rounded-sm font-semibold hover:bg-zinc-900 transition-colors',
            'bg-black text-white border border-black hover:bg-gold-500 hover:border-gold-500 hover:text-black px-8 py-3.5 rounded-sm font-semibold transition-all duration-300'
        )
        
    # 4. QuoteSection.tsx
    if 'QuoteSection.tsx' in filepath:
        content = content.replace(
            'bg-gold-500 text-black px-8 py-4 rounded-sm font-semibold text-lg hover:bg-gold-600 transition-colors shadow-md',
            'bg-black text-white border border-black hover:bg-gold-500 hover:border-gold-500 hover:text-black px-8 py-4 rounded-sm font-semibold text-lg transition-all duration-300 shadow-md'
        )
        content = content.replace(
            'bg-gold-500 text-black font-semibold py-3.5 rounded-sm hover:bg-gold-600 transition-colors disabled:opacity-70 flex justify-center items-center',
            'bg-black text-white border border-black hover:bg-gold-500 hover:border-gold-500 hover:text-black font-semibold py-3.5 rounded-sm transition-all duration-300 disabled:opacity-70 flex justify-center items-center'
        )
        
    # 5. StickyMobileCTA.tsx
    if 'StickyMobileCTA.tsx' in filepath:
        content = content.replace(
            'bg-gold-500 text-black font-semibold py-3 rounded-sm shadow-sm active:bg-gold-600 transition-colors',
            'bg-black text-white border border-black hover:bg-gold-500 hover:border-gold-500 hover:text-black font-semibold py-3 rounded-sm shadow-sm transition-all duration-300'
        )

    with open(filepath, 'w') as f:
        f.write(content)

for filepath in glob.glob('src/components/*.tsx'):
    update_file(filepath)
