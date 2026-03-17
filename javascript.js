
// new Swiper("#swiper-1")



// this part was copied from chatgpt 
let currentIndex = 0;
const slides = document.querySelectorAll('.swiper-slide');
const wrapper = document.querySelector('.swiper-wrapper');
const totalSlides = slides.length;

function updateSlider() {
  // This moves the "film strip" left based on the current slide index
  wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function moveSlide(direction) {
  currentIndex += direction;

  // Loop logic
  if (currentIndex >= totalSlides) currentIndex = 0;
  if (currentIndex < 0) currentIndex = totalSlides - 1;

  updateSlider();
  resetTimer();
}

// 10 Second Auto-Scroll
let autoScroll = setInterval(() => moveSlide(1), 10000);

function resetTimer() {
  clearInterval(autoScroll);
  autoScroll = setInterval(() => moveSlide(1), 10000);
}
