# Fix Dropdown and Footer Across All Pages

## Issues Identified
1. **Dropdown (Desktop Nav)**: Missing closing `</div>` for `.dropdown` container in 7 pages. This causes Portfolio, Case Studies, Pricing, Blog, Contact links to be nested inside the dropdown instead of being direct siblings in `<nav>`.
2. **Footer**: Missing two closing `</div>` tags in 7 pages — `.footer-brand` and `.footer-wrap` are never closed, causing `.footer-bottom` to be incorrectly nested and breaking the grid layout.\n
## Reference File
- `about.html` has correct structure for both dropdown and footer.

## Files to Fix
- [ ] index.html
- [ ] services.html
- [ ] portfolio.html
- [ ] pricing.html
- [ ] contact.html
- [ ] blog.html
- [ ] case-studies.html

## Fix Details Per File
1. **Dropdown**: Add `</div>` after `.dropdown-menu` closes.
2. **Footer**: Add `</div>` to close `.footer-brand` after `.contact-info`, and add `</div>` to close `.footer-wrap` after the Connect column, before `.footer-bottom`.

