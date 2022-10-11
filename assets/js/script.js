const menu = document.querySelector('.menu');

function openMenu() {
  menu.classList.add('show');
}

function closeMenu() {
  menu.classList.remove('show')
}

// adicionar sombra ao header quando der scroll na página
// add shadow to header when scrolling page
const nav = document.querySelector('nav')
const navHeight = nav.offsetHeight
function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    nav.classList.add('scroll')
  } else {
    // menor que a altura do header
    nav.classList.remove('scroll')
  }
}

// When scroll
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
})