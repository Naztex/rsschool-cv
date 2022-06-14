const buttonBurg = document.querySelector('.burg');
const navBurg = document.querySelector('.nav');
const navUl = document.querySelector ('.nav__menu')
const page = document.querySelector('body');
const links = document.querySelectorAll('.list-items__link');

buttonBurg.addEventListener('click', toggleMenu);
[...links].forEach((link) => {
  link.addEventListener('click', toggleMenu);
})

function toggleMenu () {
	buttonBurg.classList.toggle('pos');
	navBurg.classList.toggle('active');
	navUl.classList.toggle('active');
	page.classList.toggle('blocked');
}