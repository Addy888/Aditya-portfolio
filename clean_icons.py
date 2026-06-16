import os
import re

components_dir = r"c:\Users\ADITYA\Downloads\personal-portfolio-website\components"

def clean_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Remove `icon: X,` from arrays/objects
    content = re.sub(r'\s*icon:\s*[A-Z][a-zA-Z0-9_]*,\n?', '\n', content)

    # Fix empty conditional JSX blocks like:
    # {item.href && (
    #     
    # )}
    content = re.sub(r'\{[a-zA-Z0-9_.]+\s*&&\s*\(\s*\)\}', '', content)
    
    # Another specific one from contact.tsx
    content = re.sub(r'\{item\.href\s*&&\s*\(\s*\)\}', '', content)

    # Also remove `const Icon = item.icon` or similar and the usage of `<Icon ... />`
    content = re.sub(r'\s*const\s+Icon\s*=\s*[a-zA-Z0-9_.]+\.icon\n?', '\n', content)
    content = re.sub(r'<\s*Icon\s+[^>]*/>', '', content)
    
    # Also fix empty wrappers in contact.tsx
    content = re.sub(r'<div className="p-3 bg-[^"]+ rounded-[^"]+">\s*</div>', '', content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

for root, _, files in os.walk(components_dir):
    for file in files:
        if file.endswith('.tsx'):
            clean_file(os.path.join(root, file))

print("Cleaned up missing references.")
