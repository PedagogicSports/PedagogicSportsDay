const carousel = document.querySelector(".sports-carousel");
const slides = document.querySelectorAll(".sports-slide");

const slideshowButton = document.querySelector(".sports-slideshow-button");
const buttons = document.querySelectorAll(".sports-carousel-button");
const indicators = document.querySelectorAll(".sports-carousel-indicator");

const width = carousel.clientWidth;

let isSlideshow = true;
let currentSlide = 0;

export default function SportsCarousel() {
  CarouselSlideshow();
  ButtonsController();
  IndicatorsController();
}

function CarouselSlideshow() {
  slideshowButton.addEventListener("click", () => {
    isSlideshow = !isSlideshow;

    slideshowButton.src = isSlideshow
      ? "/buttons/pause.png"
      : "/buttons/resume.png";
  });

  setInterval(() => {
    if (!isSlideshow) return;

    if (currentSlide === slides.length - 1) currentSlide = 0;
    else ++currentSlide;

    CarouselMoveSlides();
    IndicatorsAnimation();
  }, 6000);
}

function ButtonsController() {
  buttons.forEach((button, buttonIndex) => {
    button.addEventListener("click", () => {
      if (buttonIndex === 1 && currentSlide === slides.length - 1) {
        currentSlide = 0;
        CarouselMoveSlides();
        IndicatorsAnimation();
        return;
      }

      if (buttonIndex === 0 && currentSlide === 0) {
        currentSlide = slides.length - 1;
        CarouselMoveSlides();
        IndicatorsAnimation();
        return;
      }

      if (buttonIndex === 1) ++currentSlide;
      if (buttonIndex === 0) --currentSlide;

      isSlideshow = false;
      slideshowButton.src = "/buttons/resume.png";

      CarouselMoveSlides();
      IndicatorsAnimation();
    });
  });
}

function IndicatorsController() {
  indicators.forEach((indicator, indicatorIndex) => {
    indicator.addEventListener("click", () => {
      if (currentSlide === indicatorIndex) return;
      currentSlide = indicatorIndex;

      isSlideshow = false;
      slideshowButton.src = "/buttons/resume.png";

      CarouselMoveSlides();
      IndicatorsAnimation();
    });
  });
}

function CarouselMoveSlides() {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(${-currentSlide * width}px)`;
  });
}

function IndicatorsAnimation() {
  indicators.forEach((indicator, indicatorIndex) => {
    if (currentSlide === indicatorIndex) {
      indicator.style.backgroundColor = "#fff";
      indicator.style.opacity = "1";
    } else {
      indicator.style.backgroundColor = "transparent";
      indicator.style.opacity = "0.25";
    }
  });
}
