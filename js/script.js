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

// COMPANY VACANSIES SLIDER
if (document.querySelector('.vacansies-slider')) {
    const swiper = new Swiper('.vacansies-slider', {
        slidesPerView: 2,
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

// PARTNERS REVIEWS SLIDER
if (document.querySelector('.partners-reviews-slider')) {
    const swiper = new Swiper('.partners-reviews-slider', {
        slidesPerView: 1,
        // pagination: {
        //     el: '.history-swiper-pagination',
        //     type: 'fraction',
        //     clickable: true,
        //     renderFraction: function (currentClass, totalClass) {
        //         return '<span class="' + currentClass + '"></span>' + ' / ' + '<span class="' + totalClass + '"></span>';
        //     }
        // },
        navigation: {
            nextEl: '.partners-reviews-slider-navigate__next',
            prevEl: '.partners-reviews-slider-navigate__prev',
        },
    });
}
// COMPANY LICENSES SLIDER
if (document.querySelector('.licenses-modal-slider')) {
    const swiper = new Swiper('.licenses-modal-slider', {
        slidesPerView: 1,
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

if (document.querySelector('.section-list-top__text')) {
    const hideBtn = document.querySelector('.section-list-top__text');
    const hideBlock = document.getElementById('hidable');

    hideBtn.addEventListener('click', () => {
        if (!hideBlock.classList.contains('hidden')) {
            hideBlock.classList.add('hidden')
        } else {
            hideBlock.classList.remove('hidden')
        }
    })
}

// LICENSES MODAL
if (document.querySelector('.licenses-modal')) {
    const modal = document.querySelector('.licenses-modal');
    const modalActiveButtons = document.querySelectorAll('.licenses-list__item');
    const modalCloseButton = document.querySelector('.licenses-modal__close');
    const hiddenClass = "licenses-modal--active";

    modalActiveButtons.forEach(element => {
        element.addEventListener('click', function () {
            console.log(element + " click");
            modal.classList.add(hiddenClass);
        });
    });
    modalCloseButton.addEventListener('click', function () {
        modal.classList.remove(hiddenClass);
    })
}

if (document.querySelector('.contacts-main')) {
    ymaps.ready(init);
    function init() {
        var myMap = new ymaps.Map("contacts-map", {
            center: [55.76404930322114, 60.71786041531365],
            zoom: 16
        });

        var myPlacemark = new ymaps.Placemark([55.7644250018747, 60.72127943108178], {}, {
            iconLayout: 'default#image',
            iconImageHref: '/img/map-pin.svg',
            iconImageSize: [60, 79],
            iconImageOffset: [-3, -42],
        });

        myMap.geoObjects.add(myPlacemark);
        myMap.controls.remove('zoomControl');
        myMap.controls.remove('trafficControl');
        myMap.controls.remove('searchControl');
        myMap.controls.remove('typeSelector');
        myMap.controls.remove('fullscreenControl');
        myMap.controls.remove('geolocationControl');
        myMap.controls.remove('rulerControl');
        myMap.behaviors.disable('scrollZoom');
    };
};

// KIDS PAGE
if (document.getElementById('kidsList')) {
    const list = document.getElementById('kidsList');
    const paginator = document.getElementById('pagination')

    function createCard(obj) {

        const card = document.createElement('div');
        const picWrapper = document.createElement('div');
        const pic = document.createElement('img')
        const kidName = document.createElement('div');
        const kidInfo = document.createElement('div');
        const kidAge = document.createElement('span');
        const kidCity = document.createElement('span');
        const kidIllness = document.createElement('div');
        const kidLink = document.createElement('button')

        card.classList.add('kid');
        picWrapper.classList.add('kid-photo-wrapper');
        pic.classList.add('kid__photo');
        kidName.classList.add('kid__title');
        kidInfo.classList.add('kid__info');
        kidAge.classList.add('kid__age')
        kidCity.classList.add('kid__city');
        kidIllness.classList.add('kid__illness');
        kidLink.classList.add('btn-reset', 'kid__more')

        kidLink.innerHTML = `
          <span>Как помочь</span>
          <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.70225 5.69568C6.87681 5.86229 6.87681 6.13245 6.70225 6.29911L1.5618 11.2058C1.38722 11.3724 1.10419 11.3724 0.929636 11.2058L0.297473 10.6024C0.12292 10.4358 0.12292 10.1656 0.297473 9.99895L4.48973 5.9974L0.297365 1.99584C0.122812 1.82923 0.122919 1.55902 0.297473 1.39241L0.929635 0.789023C1.10419 0.622409 1.38722 0.622409 1.5618 0.789023L6.70225 5.69568Z" fill="#ACACAC"/>
          </svg>     
          `;

        pic.setAttribute('src', obj.imageUrl);
        kidName.textContent = obj.firstName + ' ' + obj.lastName;
        kidAge.textContent = obj.age + ', ';
        kidCity.textContent = obj.regions[0]['name'];
        kidIllness.textContent = obj.diseaseDescription

        picWrapper.append(pic);
        kidInfo.append(kidAge);
        kidInfo.append(kidCity);

        card.append(picWrapper);
        card.append(kidName);
        card.append(kidInfo);
        card.append(kidIllness);
        card.append(kidLink);

        return card;
    }

    async function renderList() {
        const url = 'https://rusfond.ru/api/please-help-destitutes?skip=0';
        const response = await fetch(url);
        let data = await response.json();
        let currentPage = 1;
        let rows = 9;

        const start = rows * currentPage;
        const end = start + rows;
        const kids = data.data.items.slice(start, end);
        const pagesCount = Math.ceil(data.data.items.length / rows);

        const paginationList = document.createElement('div');
        paginationList.classList.add('kids-pagination__list')

        for (let i = 0; i < pagesCount; i++) {
            const paginationItem = document.createElement('div');
            paginationItem.classList.add('kids-pagination__item');
            paginationItem.textContent = i + 1;
            paginationList.append(paginationItem);

            paginationItem.addEventListener('click', () => {
                currentPage = parseInt(paginationItem.textContent);
            })
        }

        paginator.append(paginationList)

        kids.forEach(e => {
            const kid = createCard(e);
            list.append(kid);
        });
    }
    renderList()
};

