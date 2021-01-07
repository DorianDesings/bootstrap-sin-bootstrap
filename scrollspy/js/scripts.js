const menuItems = document.querySelectorAll('.main-menu__item');
const article1 = document.getElementById('article-1');
const article2 = document.getElementById('article-2');
const article3 = document.getElementById('article-3');
const article4 = document.getElementById('article-4');

const removeActiveMenuItem = () => {
  menuItems.forEach(item => item.classList.remove('main-menu__item--active'));
};

const addActiveMenuItem = index => {
  removeActiveMenuItem();
  menuItems[index].classList.add('main-menu__item--active');
};

const checkElement = element =>
  element.getBoundingClientRect().top > 0 &&
  element.getBoundingClientRect().top < 200;

window.addEventListener('scroll', () => {
  if (checkElement(article1)) {
    addActiveMenuItem(article1.dataset.index);
  } else if (checkElement(article2)) {
    addActiveMenuItem(article2.dataset.index);
  } else if (checkElement(article3)) {
    addActiveMenuItem(article3.dataset.index);
  } else if (checkElement(article4)) {
    addActiveMenuItem(article4.dataset.index);
  }
});
