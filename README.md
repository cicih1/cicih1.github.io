# Yanxi Chen — academic website

Complete academic portfolio for https://cicih1.github.io/.

The website includes research and publications, all four research appointments, engineering and leadership projects, two pending patent applications, education and coursework, honors, volunteer service, and tools and skills. Supporting image provenance is recorded in `ASSET_SOURCES.md`.

## Edit

- `index.html`: biography, publication statuses, research experience, contact links.
- `style.css`: layout, typography, mobile and print styles.
- `assets/YanxiCHEN_CV.pdf`: original CV, dated October 14, 2026.
- `assets/yanxi-chen.png`: portrait from Yanxi Chen's public GitHub profile.
- `assets/endovascular.png`: Figure 1 extracted from Chen et al., arXiv:2607.00066v1, CC BY 4.0. The figure links to the paper on the website; the original attribution is retained here.

No build step is required. Core content, photographs and native video controls work with JavaScript disabled. Umami Cloud provides optional visitor analytics; its tracker runs only on cicih1.github.io.

## Preview

Run `python -m http.server 8765` in this folder and open http://localhost:8765/.

## Publish on GitHub Pages

Create a **public** repository named `cicih1.github.io` under `cicih1`, and push this folder to its `main` branch. In Settings → Pages, choose **Deploy from a branch**, then **main / (root)**. `.nojekyll` ensures plain static delivery. No paid service or custom domain is required.

Publication titles, authors, dates, and manuscript statuses are based on the supplied CV. Under-review and in-revision manuscripts are explicitly labeled. Private research repositories are not linked or published. The related U-Net repository is labeled as related code rather than the official paper release.

The information architecture is inspired by https://tairanhe.com/; the source and styling were written independently.

## Visitor statistics

Umami Cloud tracks this domain using public website ID `4b967c95-93ae-43ca-9a20-58d74b66b744`. The bottom of the page shows one lifetime page-view total and a compact world map, reading only aggregate public statistics from this read-only share: https://cloud.umami.is/analytics/us/share/bcpFTc8xqWInfQnd. Manage the board in the owner's Umami Cloud account under Boards. Tracking begins with this deployment; it cannot recover visits from before installation.

The selected coursework contains only A grades from the supplied WES evaluation. The private transcript and original presentation are not published. Five research videos are compressed H.264 MP4 files with native controls, no autoplay, and no preloading.

`assets/visitors.js` lazily loads the total and country aggregates when the footer approaches the viewport. No account credentials or API keys are used; the public share token is fetched at runtime and kept in memory. A failed request shows an unavailable message rather than an invented zero. The full Umami dashboard remains available to the owner.
