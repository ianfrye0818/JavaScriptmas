const inputFieldEl = document.getElementById('input-field');
const form = document.querySelector('form');
const peopleListEl = document.getElementById('people-list');
const imgEl = document.getElementById('main-img');

let people = JSON.parse(localStorage.getItem('people')) || [];

document.addEventListener('dblclick', (e) => {
  if (e.target.dataset.id) {
    deleteItem(e.target.dataset.id);
  }
});

//add item to list
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (inputFieldEl.value.trim()) {
    people = [...people, inputFieldEl.value];
    localStorage.setItem('people', JSON.stringify(people));
    inputFieldEl.value = '';
    renderList(people);
  }
});

//delete item from list
function deleteItem(id) {
  people = people.filter((_, index) => {
    return index !== Number(id);
  });
  localStorage.setItem('people', JSON.stringify(people));
  celebrateGif();
  renderList(people);
}

//render celebration gif
function celebrateGif() {
  imgEl.src =
    'https://media.tenor.com/qg8K8VOmzJwAAAAi/party-popper-confetti.gif';
  setTimeout(() => {
    imgEl.src = './images/icon.png';
  }, 2000);
}

//render list
function renderList(arr) {
  peopleListEl.innerHTML = arr
    .map((item, index) => {
      return `<li data-id=${index}>${item}</li>`;
    })
    .join('');
}
//initial render
renderList(people);
