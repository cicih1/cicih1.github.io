/* Preserve links to sections from the original single-page website. */
(() => {
  const page = location.pathname.split('/').pop();
  if (page === 'experience.html' && location.hash === '#education') {
    location.replace('education.html#education');
    return;
  }
  if (page === 'service.html') {
    const moved = {'#honors': 'education.html#honors', '#reviewer-service': 'research.html#reviewer-service'};
    if (moved[location.hash]) location.replace(moved[location.hash]);
    return;
  }
  if (page && page !== 'index.html') return;
  const destinations = {"research": "research.html#research", "invited-talks": "research.html#invited-talks", "patents": "research.html#patents", "endovascular": "research.html#endovascular", "alo-rats": "research.html#alo-rats", "pose-perception": "research.html#pose-perception", "morphing-impeller": "research.html#morphing-impeller", "flow-matching": "research.html#flow-matching", "fiber-sensing": "research.html#fiber-sensing", "optical-inspection": "research.html#optical-inspection", "lamp": "research.html#lamp", "education": "education.html#education", "experience": "experience.html#experience", "projects": "experience.html#projects", "skills": "experience.html#skills", "georgia-tech": "experience.html#georgia-tech", "duke": "experience.html#duke", "honors": "education.html#honors", "reviewer-service": "research.html#reviewer-service", "service": "service.html#service"};
  const followLegacyLink = () => {
    const target = destinations[location.hash.slice(1)];
    if (target) location.replace(target);
  };
  followLegacyLink();
  window.addEventListener('hashchange', followLegacyLink);
})();
