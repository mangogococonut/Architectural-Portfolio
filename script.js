document.addEventListener('DOMContentLoaded', function () {
  var pages = document.getElementsByClassName('page');

  // Set initial zIndex and pageNum
  for (var i = 0; i < pages.length; i++) {
    var page = pages[i];
    page.style.zIndex = pages.length - i;
    page.pageNum = i + 1;
  }

  let flipping = false; // Flag to prevent fast clicking

  // Add click event for flipping
  for (let i = 0; i < pages.length; i++) {
    pages[i].addEventListener('click', function () {
      if (flipping) return; // Skip if already flipping
      flipping = true;

      // Allow next click after transition ends (adjust timing to match CSS)
      setTimeout(() => {
        flipping = false;
        updateZIndices();
      }, 700);

      if (this.pageNum % 2 === 0) {
        this.classList.remove('flipped');
        this.previousElementSibling.classList.remove('flipped');
      } else {
        this.classList.add('flipped');
        this.nextElementSibling.classList.add('flipped');
      }
    });
  }

  // Optional: keep z-index updated after flip
  function updateZIndices() {
    for (let i = 0; i < pages.length; i++) {
      if (pages[i].classList.contains('flipped')) {
        pages[i].style.zIndex = i;
      } else {
        pages[i].style.zIndex = pages.length - i;
      }
    }
  }
});
