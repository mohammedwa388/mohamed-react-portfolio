/** Scroll even if the destination hash is already present in the URL. */
export function scrollToSection(section) {
  const id = section.replace(/^#/, '');
  const target = document.getElementById(id);
  const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const behavior = reduceMotion ? 'instant' : 'smooth';
  if (id === 'hero') {
    window.scrollTo({top: 0, behavior});
  } else if (target) {
    target.scrollIntoView({behavior, block: 'start'});
  }
}
