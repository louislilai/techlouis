const fs = require('fs');

const files = ['portfolio.html', 'pricing.html', 'contact.html', 'blog.html', 'case-studies.html'];

for (const fname of files) {
    let content = fs.readFileSync(fname, 'utf-8');

    // Fix 1: dropdown - add closing </div> after dropdown-menu closes
    content = content.replace(
        /Graphics Design<\/a><\/div>(<a(?: class="active")? href="portfolio\.html")/g,
        'Graphics Design</a></div></div>$1'
    );

    // Fix 2: footer-brand - add closing </div> after contact-info closes
    content = content.replace(
        /(class="contact-info">[\s\S]*?TIN: \d+-\d+-\d+<\/p>\s*<\/div>)\s*<div>\s*<h4>Quick Links<\/h4>/,
        '$1\n            </div>\n            <div>\n                <h4>Quick Links</h4>'
    );

    // Fix 3: footer-wrap - add closing </div> before footer-bottom
    content = content.replace(
        /(<\/div>\s*<\/div>\s*)<div class="container footer-bottom">/,
        '$1            </div>\n        </div>\n        <div class="container footer-bottom">'
    );

    fs.writeFileSync(fname, content, 'utf-8');
    console.log('Fixed ' + fname);
}

