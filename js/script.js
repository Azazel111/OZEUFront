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
        speed: 4000,
        loop: true,
        autoplay: {
            delay: 0,
        },
        slidesPerView: 4,
    });
}

if (document.querySelector('.video-content')) {
    const video = document.querySelector('.video-content');
    const videoPlay = document.querySelector('.video-play');
    let isPlay = false;
    videoPlay.addEventListener('click', function () {
        if (isPlay == false) {
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

// SLIDER BANNER PRODUCTS

if (document.querySelector('.swiper_thumbnail')) {
    var swiper_thumbnail = new Swiper(".swiper_thumbnail", {
        slidesPerView: 2,
        // navigation: {
        //     nextEl: '.swiper_thumbnail__next',
        //     prevEl: '.swiper_thumbnail__prev',
        // },                        
    })
}

if (document.querySelector('.banner-products-detail-swiper')) {
    const swiper = new Swiper('.banner-products-detail-swiper', {
        slidesPerView: 1,
        // pagination: {
        //     el: '.first-banner-slider-pagination',
        // },

        // allowSwipeToPrev: false,
        // allowSwipeToNext: false,
        thumbs: {
            swiper: swiper_thumbnail,
        },
    });
}

// COMPANY CYCLE SLIDER
if (document.querySelector('.cycle-swiper')) {
    const swiper = new Swiper('.cycle-swiper', {
        slidesPerView: 1,
        pagination: {
            el: '.cycle-swiper-pagination',
            type: 'fraction',
            clickable: true,
            renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' + ' / ' + '<span class="' + totalClass + '"></span>';
            }
        },
        navigation: {
            nextEl: '.cycle-swiper__btn_next',
            prevEl: '.cycle-swiper__btn_prev',
        },
    });
}

// COMPANY HISTORY SLIDER
if (document.querySelector('.history-swiper')) {
    const swiper = new Swiper('.history-swiper', {
        slidesPerView: 4,
        spaceBetween: 24,
        // pagination: {
        //     el: '.history-swiper-pagination',
        //     type: 'fraction',
        //     clickable: true,
        //     renderFraction: function (currentClass, totalClass) {
        //         return '<span class="' + currentClass + '"></span>' + ' / ' + '<span class="' + totalClass + '"></span>';
        //     }
        // },
        navigation: {
            nextEl: '.history-swiper__btn_next',
            prevEl: '.history-swiper__btn_prev',
        },
    });
}

// // COMPANY REWARD SLIDER
// if (document.querySelector('.reward-swiper')) {
//     const swiper = new Swiper('.reward-swiper', {
//         slidesPerView: 4,
//         spaceBetween: 24,
//         // pagination: {
//         //     el: '.history-swiper-pagination',
//         //     type: 'fraction',
//         //     clickable: true,
//         //     renderFraction: function (currentClass, totalClass) {
//         //         return '<span class="' + currentClass + '"></span>' + ' / ' + '<span class="' + totalClass + '"></span>';
//         //     }
//         // },
//         // navigation: {
//         //     nextEl: '.history-swiper__btn_next',
//         //     prevEl: '.history-swiper__btn_prev',
//         // },
//     });
// }

// COMPANY SERTIFICATES SLIDER
if (document.querySelector('.sertificates-list')) {
    const swiper = new Swiper('.sertificates-list', {
        slidesPerView: 4,
        spaceBetween: 24,
        // pagination: {
        //     el: '.history-swiper-pagination',
        //     type: 'fraction',
        //     clickable: true,
        //     renderFraction: function (currentClass, totalClass) {
        //         return '<span class="' + currentClass + '"></span>' + ' / ' + '<span class="' + totalClass + '"></span>';
        //     }
        // },
        // navigation: {
        //     nextEl: '.history-swiper__btn_next',
        //     prevEl: '.history-swiper__btn_prev',
        // },
    });
}

/*POPUP*/

const popupBtn = document.querySelector('.main-cta');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup-close__btn');

popupBtn.addEventListener('click', () => {
    popup.classList.add('popup--active');
    document.body.classList.add('stop-scroll');
})

popupClose.addEventListener('click', () => {
    popup.classList.remove('popup--active');
    document.body.classList.remove('stop-scroll');
});

/* PRODUCTS HIDE BTN */

const hideBtn = document.querySelector('.section-list-top__text');
const hideBlock = document.getElementById('hidable');

hideBtn.addEventListener('click', () => {
    if (!hideBlock.classList.contains('hidden')) {
        hideBlock.classList.add('hidden')
    } else {
        hideBlock.classList.remove('hidden')
    }
})