/* Sort dated news newest first. Year-only entries follow known dates that year. */
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
  items.sort((a, b) => dateKey(b) - dateKey(a));
  list.append(...items);
})();
