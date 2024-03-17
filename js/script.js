console.log('hello');
// SLIDER IN FIRSTBANNER
if (document.querySelector('.first-banner-swiper')) {
    const swiper = new Swiper('.first-banner-swiper', {

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
}

// SLIDER UTP
if (document.querySelector('.utp')) {
    const utp = new Swiper('.utp', {
        loop: true,
        autoplay: {
            dalay: 2000,
        },
        // freeMode: true,
        slidesPerView: 4,
    });
}

if(document.querySelector('.video-content')) {
    const video = document.querySelector('.video-content');
    const videoPlay = document.querySelector('.video-play');
    let isPlay = false;
    videoPlay.addEventListener('click', function() {
        if(isPlay == false) {
            video.play();
            // video.setAttribute('controls');
            video.setAttribute('controls', 'controls');
            isPlay = true;
            videoPlay.children[0].style.display = 'none';
        } else {
            video.pause();
            video.removeAttribute('controls');
            videoPlay.children[0].style.display = 'block';
            isPlay = false;
        }
    });
}

// SLIDER NEWS IN HOME PAGE
if (document.querySelector('.news-slider')) {
    const swiper = new Swiper('.news-slider', {
        slidesPerView: 3,
        loop: true,
        spaceBetween: 24,
        // pagination: {
        //     el: '.first-banner-slider-pagination',
        // },
        // navigation: {
        //     nextEl: '.first-banner-slider__next',
        //     prevEl: '.first-banner-slider__prev',
        // },
        // allowSwipeToPrev: false,
        // allowSwipeToNext: false,
    });
}