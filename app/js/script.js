const menuButton = document.querySelector('.js-menu-btn');
const nav = document.querySelector('.js-nav');
const header = nav.parentElement;
const moreBtn = document.querySelector('.js-more-btn');
const moreContainer = document.querySelector('.js-more');
const secondaryNav = document.querySelector('.js-nav-secondary')

console.log()

menuButton.addEventListener('click', () => {
  nav.classList.toggle('isOpen')
  if(Array.from(nav.classList).includes('isOpen')) {
    secondaryNav.style.visibility = 'hidden';
  } else {
    setTimeout(() => {
      secondaryNav.style.visibility = 'visible';
    }, 300)
  }
})

moreBtn.addEventListener('click', () => {
  moreContainer.classList.toggle('isOpened');
  moreBtn.classList.toggle('isOpened');
})

let lastScrollPosition = 0;

window.addEventListener('scroll', () => {
  const currentScrollPosition = window.scrollY;
  if(currentScrollPosition > lastScrollPosition && currentScrollPosition > 100) {
    secondaryNav.style.transform = "translateY(-100%)"
  } else {
    secondaryNav.style.transform = "translateY(0)"
  }
  lastScrollPosition = currentScrollPosition;
})