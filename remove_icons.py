import os
import re

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the lucide-react import
    import_match = re.search(r'import\s+\{([^}]+)\}\s+from\s+["\']lucide-react["\']', content)
    if import_match:
        icons = [icon.strip() for icon in import_match.group(1).split(',')]
        
        # Remove the import statement
        content = re.sub(r'import\s+\{[^}]+\}\s+from\s+["\']lucide-react["\']\n?', '', content)
        
        for icon in icons:
            if not icon:
                continue
            
            # Special case for navigation: replace Menu and X with text
            if icon == 'Menu':
                content = re.sub(rf'<\s*{icon}\s*[^>]*/>', 'Menu', content)
            elif icon == 'X' and 'toast' not in filepath: # don't replace X in toast with text 'Menu'
                content = re.sub(rf'<\s*{icon}\s*[^>]*/>', 'Close', content)
            else:
                # Remove <Icon ... />
                content = re.sub(rf'<\s*{icon}\s*[^>]*/>', '', content)
                # Remove <Icon> ... </Icon>
                content = re.sub(rf'<\s*{icon}\s*[^>]*>.*?</\s*{icon}\s*>', '', content, flags=re.DOTALL)

    # Clean up empty containers specific to the codebase
    content = re.sub(r'<div className="[^"]*p-3[^"]*bg-primary/10[^"]*rounded-lg[^"]*">\s*</div>', '', content)
    content = re.sub(r'<div className="[^"]*w-12 h-12[^"]*bg-primary/10[^"]*rounded-xl[^"]*">\s*</div>', '', content)
    content = re.sub(r'<div className="[^"]*w-10 h-10[^"]*bg-primary/10[^"]*rounded-lg[^"]*">\s*</div>', '', content)
    content = re.sub(r'<div className="[^"]*p-3 bg-accent/10 rounded-lg[^"]*">\s*</div>', '', content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

components_dir = r"c:\Users\ADITYA\Downloads\personal-portfolio-website\components"

for root, _, files in os.walk(components_dir):
    for file in files:
        if file.endswith('.tsx'):
            process_file(os.path.join(root, file))

print("Done processing components")
