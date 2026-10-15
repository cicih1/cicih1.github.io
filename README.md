# Yanxi Chen — academic website

Complete academic portfolio for https://cicih1.github.io/.

The website includes research and publications, all four research appointments, engineering and leadership projects, two pending patent applications, education and coursework, honors, volunteer service, and tools and skills. Supporting image provenance is recorded in `ASSET_SOURCES.md`.

## Edit

- `index.html`: biography, dated News, selected research, contact links, and visitor map.
- `research.html`: all publications, research photos/videos, manuscript statuses, invited talks, and patents.
- `experience.html`: research appointments, Scholar-linked advisor portraits, projects, and skills.
- `education.html`: degree, GPA, and A-grade coursework.
- `service.html`: Reviewer Service, honors, and volunteering.
- `assets/navigation.js`: preserves old homepage section links by redirecting to their new pages.
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

News uses dates supported by the supplied CV, award materials, or the owner's confirmation. Entries without a verified month use the year only. Submission news describes submission or revised-submission events; current review status remains on the Publications page. `assets/news.js` automatically orders entries newest first using each `<time datetime="YYYY-MM">` value; update the displayed date together with this value. Year-only entries follow known dates within that year, with ties preserving source order. The static HTML is also date-sorted. News remains on the homepage in a keyboard-accessible, manually scrollable region and is not a separate navigation item. All five pages have consistent navigation, their own title/canonical URL, and one Umami tracker.

The owner confirmed October 2026 for the T-ASE, IEEE Sensors Journal, and Optics and Lasers in Engineering submissions/revisions, and September 2026 for the ICRA 2027 submission. Tongji joining dates follow the CV: Medical Robotics Lab in September 2025 and BioNACH Lab in December 2023. The CNN-based continuum-robot pose-tracking project is retained in an HTML comment in `experience.html` at the owner's request.

The original ALO–RATS workshop poster is at `assets/posters/alo-rats-iros-2026.pdf`, with a rendered WebP preview. Advisor photos link to verified Google Scholar profiles; official photo sources are recorded in `ASSET_SOURCES.md`. Edit the current HTML files for routine maintenance; scripts under the local work directory describe historical migrations and should not be blindly rerun.

`assets/visitors.js` lazily loads the total and country aggregates when the footer approaches the viewport. No account credentials or API keys are used; the public share token is fetched at runtime and kept in memory. A failed request shows an unavailable message rather than an invented zero. The full Umami dashboard remains available to the owner.

## Page organization

The Publications navigation item retains `research.html` for URL compatibility: Publications & Manuscripts, Patent applications, Reviewer Service, then Invited Talks. `education.html` contains the undergraduate degree, A-grade coursework, then Honors & awards. `service.html` is the standalone Beyond the lab page (accessible heart navigation), with golf photographs and volunteer service. Former service-page honors/reviewer anchors redirect to their new locations.

News highlights: `data-pin-order="1"` pins the first-author IROS 2026 acceptance (June 2026); `data-pin-order="2"` pins the co-first-author ALO–RATS workshop news (September 2026). Dates confirmed by the owner. Other entries remain chronological. Remove the attribute and pin icon to unpin an item.
