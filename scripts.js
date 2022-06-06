const menu = document.querySelector('.header__nav')
const burger = document.querySelector('.header__menu')
const smoothLinks = document.querySelectorAll('a[href^="#"]');

for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener('click', function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute('href');

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}

const toggleMenu = () => {
  menu.classList.toggle('active')
  burger.classList.toggle('active')
}

burger.addEventListener('click', toggleMenu)
menu.addEventListener('click', (e) => {
  const target = e.target
  if (target.classList.contains('header__link')) {
    toggleMenu()
  }
})

