# Yanxi Chen — academic website

Static academic website for https://cicih1.github.io/.

## Edit

- `index.html`: biography, publication statuses, research experience, contact links.
- `style.css`: layout, typography, mobile and print styles.
- `assets/YanxiCHEN_CV.pdf`: original CV, dated September 24, 2026.
- `assets/yanxi-chen.png`: portrait from Yanxi Chen's public GitHub profile.
- `assets/endovascular.png`: Figure 1 extracted from Chen et al., arXiv:2607.00066v1, CC BY 4.0. The figure links to the paper on the website; the original attribution is retained here.

No build step or JavaScript is required. The site works with keyboard navigation and with JavaScript disabled.

## Preview

Run `python -m http.server 8765` in this folder and open http://localhost:8765/.

## Publish on GitHub Pages

Create a **public** repository named `cicih1.github.io` under `cicih1`, and push this folder to its `main` branch. In Settings → Pages, choose **Deploy from a branch**, then **main / (root)**. `.nojekyll` ensures plain static delivery. No paid service or custom domain is required.

Publication titles, authors, dates, and manuscript statuses are based on the supplied CV. Under-review and in-revision manuscripts are explicitly labeled. Private research repositories are not linked or published. The related U-Net repository is labeled as related code rather than the official paper release.

The information architecture is inspired by https://tairanhe.com/; the source and styling were written independently.
