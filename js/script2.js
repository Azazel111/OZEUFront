if(document.querySelector('.contacts-main')) {
  ymaps.ready(init);
  function init() {
      var myMap = new ymaps.Map("contacts-map", {
          center: [55.76404930322114,60.71786041531365],
          zoom: 16
      });

      var myPlacemark = new ymaps.Placemark([55.7644250018747,60.72127943108178], {}, {
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

if(document.getElementById('kidsList')) {
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

        for(let i = 0; i < pagesCount; i++) {
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