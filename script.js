// navigation menu functionality
const menuBtn = document.querySelector('.menu-btn');
const menuItems = document.querySelector('.nav-items');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuItems.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuItems.classList.remove('open');
    menuOpen = false;
  }
});

// smooth scroll
const links = document.querySelectorAll('a');

for (const link of links) {
  link.addEventListener('click', clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute('href');
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}
