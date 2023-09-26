const slides = [
    '<div><img src="img/landscapes/landscapes-carousel-1.jpg" alt="Red ship in a fjord"></div>',
    '<div><img src="img/landscapes/landscapes-carousel-2.jpg" alt="Mountains in snow"></div>',
    '<div><img src="img/landscapes/landscapes-carousel-3.jpg" alt="The man on the top of the mountain"></div>',
    '<div><img src="img/landscapes/landscapes-carousel-4.png" alt="The view on the fjord"></div>',
    '<div><img src="img/landscapes/landscapes-carousel-5.jpg" alt="Colored houses between mountains"></div>',
    '<div><img src="img/landscapes/landscapes-carousel-6.jpg" alt="Red houses between mountains"></div>'
];

let currentSlide = 0;

function renderSlide() {
    const slideContainer = document.querySelector(".landscapes__carousel-slide");
    slideContainer.innerHTML = slides[currentSlide];
    console.log(slideContainer);
    if (window.matchMedia("(min-width: 767px)").matches) {
        const secondSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        slideContainer.innerHTML += slides[secondSlide];
        if (window.matchMedia("(min-width:997px)").matches) {
            const thirdSlide = secondSlide + 1 >= slideContainer.length ? 0 : secondSlide + 1;
            slideContainer.innerHTML += slides[thirdSlide];
        }
    }
    renderIndicators();
}

function nextSlide() {
    currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
    renderSlide();
}

function prevSlide() {
    currentSlide = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
    renderSlide();
}

renderSlide();
const nextBtn = document.querySelector(".landscapes__carousel-btn-next");
nextBtn.addEventListener("click", nextSlide);
const prevBtn = document.querySelector(".landscapes__carousel-btn-prev");
prevBtn.addEventListener("click", prevSlide);

window.addEventListener("resize", renderSlide);

function renderIndicators() {
    const indicatorsContainer = document.querySelector(".landscapes__carousel-indicators");
    indicatorsContainer.innerHTML = "";
    for (let i = 0; i < slides.length; i++) {
      indicatorsContainer.innerHTML += 
      `<button class="landscapes__carousel-indicator ${i === currentSlide ? "landscapes__carousel-indicator--active" : ""}"></button>`
    }
    const indicators = document.querySelectorAll(".landscapes__carousel-indicator");
    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => {
        currentSlide = index;
        renderSlide();
        renderIndicators(slides, currentSlide);
      });
    });
}
  
renderIndicators();
  