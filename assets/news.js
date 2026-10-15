/* Explicitly pinned highlights first; remaining news newest first. */
(() => {
  const list = document.querySelector('#news .news-list');
  if (!list) return;
  const dateKey = item => {
    const value = item.querySelector('time[datetime]')?.getAttribute('datetime') || '';
    if (!/^\d{4}(?:-\d{2}){0,2}$/.test(value)) return -1;
    const [year, month = 0, day = 0] = value.split('-').map(Number);
    return year * 10000 + month * 100 + day;
  };
  const items = Array.from(list.children);
  const pinKey = item => {
    const rank = Number(item.getAttribute('data-pin-order'));
    return rank > 0 ? rank : Infinity;
  };
  items.sort((a, b) => {
    const aPin = pinKey(a), bPin = pinKey(b);
    return aPin === bPin ? dateKey(b) - dateKey(a) : aPin - bPin;
  });
  list.append(...items);
})();
