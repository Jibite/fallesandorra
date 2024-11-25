export default function loopAnimations() {
    var scroll = window.requestAnimationFrame ||
    // IE Fallback
    function(callback) {
      window.setTimeout(callback, 1000 / 60)
    };
    const elementsDownUp = document.querySelectorAll('.element-down-up')
    const elementsUpDown = document.querySelectorAll('.element-up-down')
    const elementsLeftRight = document.querySelectorAll('.element-left-right')
    const elementsRightLeft = document.querySelectorAll('.element-right-left')
    Array.prototype.forEach.call(elementsDownUp, function (element) {
      if (isElementInViewport(element)) {
        element.classList.add('is-visible')
      } else {
        element.classList.remove('is-visible')
      }
    })
    Array.prototype.forEach.call(elementsUpDown, function (element) {
      if (isElementInViewport(element)) {
        element.classList.add('is-visible')
      } else {
        element.classList.remove('is-visible')
      }
    })
    Array.prototype.forEach.call(elementsLeftRight, function (element) {
      if (isElementInViewport(element)) {
        element.classList.add('is-visible')
      } else {
        element.classList.remove('is-visible')
      }
    })
    Array.prototype.forEach.call(elementsRightLeft, function (element) {
      if (isElementInViewport(element)) {
        element.classList.add('is-visible')
      } else {
        element.classList.remove('is-visible')
      }
    })
    scroll(loopAnimations)
  }