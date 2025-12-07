const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentSlide = 0;
let slideInterval;


function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}


function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}


function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}


function startSlideShow() {
  slideInterval = setInterval(nextSlide, 3000); 
}
function stopSlideShow() {
  clearInterval(slideInterval);
}


nextBtn.addEventListener('click', () => {
  nextSlide();
  stopSlideShow();
  startSlideShow();
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  stopSlideShow();
  startSlideShow();
});


showSlide(currentSlide);
startSlideShow();
