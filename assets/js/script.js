const menuIcon = document.querySelector("#menuIcon");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.querySelector("#nav");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

menuIcon.addEventListener("click", toggleMenu);
menuIcon.addEventListener("touchstart", toggleMenu);

const header = document.querySelector("header");
const navHeight = header.offsetHeight;
function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add("scroll");
  } else {
    // menor que a altura do header
    header.classList.remove("scroll");
  }
}

window.addEventListener("scroll", function () {
  changeHeaderWhenScroll();
});

// // adicionar sombra ao header quando der scroll na página
// // add shadow to header when scrolling page
// const nav = document.querySelector('nav')
// const navHeight = nav.offsetHeight
// function changeHeaderWhenScroll() {
//   if (window.scrollY >= navHeight) {
//     // scroll é maior que a altura do header
//     nav.classList.add('scroll')
//   } else {
//     // menor que a altura do header
//     nav.classList.remove('scroll')
//   }
// }

// // When scroll
// window.addEventListener('scroll', function () {
//   changeHeaderWhenScroll()
// })
