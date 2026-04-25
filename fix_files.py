import re

files = ['portfolio.html', 'pricing.html', 'contact.html', 'blog.html', 'case-studies.html']

for fname in files:
    with open(fname, 'r', encoding='utf-8') as f:
        content = f.read()

    # Fix 1: dropdown - add closing </div> after dropdown-menu closes
    content = re.sub(
        r'Graphics Design</a></div>(<a(?: class="active")? href="portfolio\.html")',
        r'Graphics Design</a></div></div>\1',
        content
    )

    # Fix 2: footer-brand - add closing </div> after contact-info closes
    content = re.sub(
        r'(class="contact-info">.*?TIN: \d+-\d+-\d+</p>\s*</div>)\s*<div>\s*<h4>Quick Links</h4>',
        r'\1\n            </div>\n            <div>\n                <h4>Quick Links</h4>',
        content,
        flags=re.DOTALL
    )

    # Fix 3: footer-wrap - add closing </div> before footer-bottom
    content = re.sub(
        r'(</div>\s*</div>\s*)<div class="container footer-bottom">',
        r'\1            </div>\n        </div>\n        <div class="container footer-bottom">',
        content
    )

    with open(fname, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'Fixed {fname}')

