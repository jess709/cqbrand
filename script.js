// Small, purposeful interaction: the header gains a shadow once the
// page scrolls beneath it, so it reads as sitting above the content
// instead of just floating flat on top of it.
document.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('header');
  if (!header) return;

  var onScroll = function () {
    if (window.scrollY > 10) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});
