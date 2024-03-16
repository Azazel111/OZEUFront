console.log('hello');

const swiper = new Swiper('.swiper', {

    // If we need pagination
    pagination: {
        el: '.first-banner-slider-pagination',
    },
    // Navigation arrows
    navigation: {
        nextEl: '.first-banner-slider__next',
        prevEl: '.first-banner-slider__prev',
    },
    allowSwipeToPrev: false,
    allowSwipeToNext: false,
});