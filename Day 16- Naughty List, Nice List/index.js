class SorteeManager {
  constructor() {
    this.niceListEl = document.getElementById('nice-list');
    this.naughtyListEl = document.getElementById('naughty-list');
    this.form = document.querySelector('form');
    this.sorteesArr = JSON.parse(localStorage.getItem('sorteesArr')) || [];

    this.initialize();
  }

  initialize() {
    this.renderLists();
    this.setupEventListeners();
  }

  setupEventListeners() {
    document.addEventListener('click', (e) => this.handleDocumentClick(e));
    this.form.addEventListener('submit', (e) => this.handleFormSubmit(e));
  }

  handleDocumentClick(e) {
    if (e.target.dataset.class) {
      this.switchFromNaughtyOrNice(e);
    }

    if (e.target.id === 'delete-btn') {
      this.deleteItemFromArray(e.target.parentElement.dataset.id);
    }

    if (e.target.id === 'update-btn') {
      this.updateItemInArray(e.target);
    }
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.addNameToList();
  }

  renderLists() {
    const niceList = this.sorteesArr.filter((item) => item.hasBeenGood);
    const naughtyList = this.sorteesArr.filter((item) => !item.hasBeenGood);

    this.renderList(this.niceListEl, niceList);
    this.renderList(this.naughtyListEl, naughtyList);
  }

  addNameToList() {
    const nameEl = document.getElementById('new-name');
    const nameCheckboxEl = document.getElementById('naughty-checkbox');

    const newSortee = {
      name: nameEl.value,
      hasBeenGood: nameCheckboxEl.checked,
      id: this.sorteesArr.length + 1,
    };

    this.sorteesArr.push(newSortee);

    localStorage.setItem('sorteesArr', JSON.stringify(this.sorteesArr));
    this.renderLists();

    nameEl.value = '';
    nameCheckboxEl.checked = true;
  }

  switchFromNaughtyOrNice(e) {
    const id = e.target.parentNode.dataset.id;
    const person = this.sorteesArr.find((item) => item.id == id);

    e.target.parentElement.innerHTML = `<span>${
      person.name
    }</span><label for"naughty-nice-list-update-input" style="color: var(--gold); margin-left: 5px;">Nice? </label><input type="checkbox" id="naughty-nice-list-update-input" ${
      person.hasBeenGood ? 'checked' : ''
    }/><button class="list-item-btn" id="update-btn">Update</button> <button class="list-item-btn" id="delete-btn">Delete</button>`;
  }

  deleteItemFromArray(id) {
    this.sorteesArr = this.sorteesArr.filter((item) => item.id != id);
    localStorage.setItem('sorteesArr', JSON.stringify(this.sorteesArr));
    this.renderLists();
  }

  updateItemInArray(target) {
    const hasBeenGood = target.previousSibling.checked;
    const id = target.parentElement.dataset.id;

    this.sorteesArr = this.sorteesArr.map((item) =>
      item.id == id ? { ...item, hasBeenGood } : item
    );

    localStorage.setItem('sorteesArr', JSON.stringify(this.sorteesArr));
    this.renderLists();
  }

  renderList(element, list) {
    element.innerHTML = list
      .map(
        (item) =>
          `<li class="list-item" data-id=${item.id}><span>${item.name}</span> <button data-class="btn" class="list-item-btn">Edit</button></li>`
      )
      .join('');
  }
}

const sorteeManager = new SorteeManager();
