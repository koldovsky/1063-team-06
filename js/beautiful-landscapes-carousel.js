const slides = [
    '<div class="landscapes__carousel-img"><img src="img/landscapes/landscapes-carousel-1.jpg" alt="Red ship in a fjord"></div>',
    '<div class="landscapes__carousel-img"><img src="img/landscapes/landscapes-carousel-2.jpg" alt="Mountains in snow"></div>',
    '<div class="landscapes__carousel-img"><img src="img/landscapes/landscapes-carousel-3.jpg" alt="The man on the top of the mountain"></div>',
    '<div class="landscapes__carousel-img"><img src="img/landscapes/landscapes-carousel-4.png" alt="The view on the fjord"></div>',
    '<div class="landscapes__carousel-img"><img src="img/landscapes/landscapes-carousel-5.jpg" alt="Colored houses between mountains"></div>',
    '<div class="landscapes__carousel-img"><img src="img/landscapes/landscapes-carousel-6.jpg" alt="Red houses between mountains"></div>'
];

let currentSlideIdx = 0;

function renderSlide() {
    const slideContainer = document.querySelector('.landscapes__carousel-slide');
    slideContainer.innerHTML = slides[currentSlideIdx];
    // console.log(slideContainer);
    if (window.matchMedia('(min-width: 767px)').matches) {
        const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        slideContainer.innerHTML += slides[secondSlideIdx];
        if (window.matchMedia('(min-width: 997px)').matches) {
            const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
            slideContainer.innerHTML += slides[thirdSlideIdx];
        }
    }
    renderIndicators();
}

window.addEventListener('resize', renderSlide);

function nextSlide() {
    currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
    renderSlide();
}

function prevSlide() {
    currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
    renderSlide();
}

renderSlide();

const nextBtn = document.querySelector('.landscapes__carousel-btn-next');
nextBtn.addEventListener('click', nextSlide);
const prevBtn = document.querySelector('.landscapes__carousel-btn-prev');
prevBtn.addEventListener('click', prevSlide);

function renderIndicators() {
    const indicatorsContainer = document.querySelector('.landscapes__carousel-indicators');
    indicatorsContainer.innerHTML = '';
    for (let i = 0; i < slides.length; i++) {
        indicatorsContainer.innerHTML += `<button class='landscapes__carousel-indicator ${i === currentSlideIdx ? 'landscapes__carousel-indicator--active' : ''}'></button>`
    }
    const indicators = document.querySelectorAll('.landscapes__carousel-indicator');
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlideIdx = index;
            renderSlide();
            renderIndicators(slides, currentSlide);
        });
    });
}
  
renderIndicators();
  