// API RENDER
const list = document.getElementById('list');

function createCard(item) {
  const card = document.createElement('div');
  const photo = document.createElement('img');
  const cardBottom = document.createElement('div');
  const title = document.createElement('div');
  const year = document.createElement('div');
  const sum = document.createElement('div')

  card.classList.add('item')
  photo.classList.add('item__pic');
  cardBottom.classList.add('item-bottom')

  title.textContent = item.firstName + ' ' + item.lastName;
  year.textContent = item.age;

  photo.src = item.imageUrl;

  cardBottom.append(title);
  cardBottom.append(year);
  cardBottom.append(sum);

  card.append(photo);
  card.append(cardBottom);

  return card;
}

async function renderList() {

  const url = 'https://rusfond.ru/api/please-help-destitutes?skip=0';
  const response = await fetch(url)
  let result = await response.json();

  result.data.items.forEach(element => {
    const child = createCard(element)
    
    list.append(child)
  });

  console.log(result)

}

renderList()