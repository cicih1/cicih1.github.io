/* Aggregate visitor statistics from the site's public Umami share. */
(() => {
  const section = document.getElementById('visitors');
  if (!section) return;
  const total = document.getElementById('visitor-total');
  const status = document.getElementById('visitor-map-status');
  const api = 'https://cloud.umami.is/analytics/us/api';
  const site = '4b967c95-93ae-43ca-9a20-58d74b66b744';
  const share = 'bcpFTc8xqWInfQnd';
  const number = new Intl.NumberFormat('en');
  const names = typeof Intl.DisplayNames === 'function'
    ? new Intl.DisplayNames(['en'], { type: 'region' }) : null;

  const regionName = code => code === 'CN' ? 'China' : (names?.of(code) || code);

  async function get(path, headers = {}) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch(api + path, {
        credentials: 'omit', headers, signal: controller.signal,
      });
      if (!response.ok) throw new Error('Statistics unavailable');
      return await response.json();
    } finally {
      clearTimeout(timeout);
    }
  }

  async function load() {
    try {
      const publicShare = await get('/share/' + share);
      if (!publicShare.token || !publicShare.websiteIds?.includes(site)) {
        throw new Error('Statistics unavailable');
      }
      const headers = {
        'x-umami-share-token': publicShare.token,
        'x-umami-share-context': '1',
      };
      const period = new URLSearchParams({
        startAt: String(Date.UTC(2026, 9, 1)), endAt: String(Date.now()),
      });
      const results = await Promise.allSettled([
        get(`/websites/${site}/stats?${period}`, headers),
        get(`/websites/${site}/metrics?${period}&type=country&limit=250`, headers),
      ]);
      const count = results[0].status === 'fulfilled' ? results[0].value.pageviews : null;
      total.textContent = Number.isSafeInteger(count) && count >= 0
        ? number.format(count) : 'Unavailable';
      if (results[1].status !== 'fulfilled' || !Array.isArray(results[1].value)) {
        status.textContent = 'Visitor locations are temporarily unavailable.';
        return;
      }
      // Match the combined CN/TW map geometry with one aggregate display value.
      const grouped = new Map();
      for (const item of results[1].value) {
        const originalCode = String(item.x || '').toUpperCase();
        if (!/^[A-Z]{2}$/.test(originalCode) || !Number.isFinite(item.y) || item.y <= 0) continue;
        const code = originalCode === 'TW' ? 'CN' : originalCode;
        grouped.set(code, (grouped.get(code) || 0) + item.y);
      }
      let located = 0;
      for (const [code, visitors] of grouped) {
        const shape = section.querySelector(`[data-country="${code}"]`);
        if (!shape) continue;
        const label = `${regionName(code)}: ${number.format(visitors)} visitor${visitors === 1 ? '' : 's'}`;
        shape.classList.add('has-visitors');
        shape.setAttribute('tabindex', '0');
        shape.setAttribute('aria-label', label);
        shape.querySelector('title').textContent = label;
        shape.addEventListener('mouseenter', () => { status.textContent = label; });
        shape.addEventListener('focus', () => { status.textContent = label; });
        located++;
      }
      const hint = located ? 'Hover or focus on a highlighted country or region to explore.'
        : 'Visitor locations will appear as geographic data becomes available.';
      status.textContent = hint;
      section.querySelector('svg').addEventListener('mouseleave', () => { status.textContent = hint; });
      section.querySelector('svg').addEventListener('focusout', () => { status.textContent = hint; });
    } catch {
      total.textContent = 'Unavailable';
      status.textContent = 'Visitor statistics are temporarily unavailable.';
    }
  }

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        observer.disconnect();
        load();
      }
    }, { rootMargin: '300px' });
    observer.observe(section);
  } else {
    load();
  }
})();
