const slides = [
    '<div><img src="img/landscapes/landscapes-carousel-1.jpg" alt="Red ship in a fjord"></div>',
    '<div><img src="img/landscapes/landscapes-carousel-2.jpg" alt="Mountains in snow"></div>',
    '<div><img src="img/landscapes/landscapes-carousel-3.jpg" alt="The man on the top of the mountain"></div>',
    '<div><img src="img/landscapes/landscapes-carousel-4.png" alt="The view on the fjord"></div>',
    '<div><img src="img/landscapes/landscapes-carousel-5.jpg" alt="Colored houses between mountains"></div>',
    '<div><img src="img/landscapes/landscapes-carousel-6.jpg" alt="Red houses between mountains"></div>'
];

let currentSlideIdx = 0;

function renderSlide() {
    const slideContainer = document.querySelector('.landscapes__carousel-slide');
    slideContainer.innerHTML = slides[currentSlideIdx];
    if (window.matchMedia('(min-width: 767px)').matches) {
        const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        slideContainer.innerHTML += slides[secondSlideIdx];
        if (window.matchMedia('(min-width: 991px)').matches) {
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