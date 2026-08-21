import re

with open('vite.config.ts', 'r') as f:
    content = f.read()

# Add base: './' inside the returned object in defineConfig
if "base: './'" not in content:
    content = content.replace(
        'plugins: [react(), tailwindcss()],',
        "base: './',\n    plugins: [react(), tailwindcss()],"
    )

with open('vite.config.ts', 'w') as f:
    f.write(content)
