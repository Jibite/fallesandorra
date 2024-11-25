export default function isElementInViewport(el: HTMLElement) {
    const rect = el.getBoundingClientRect()
    return ((rect.top <= 0 &&
      rect.bottom >= 0) ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)))
  }