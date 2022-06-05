const menu = document.querySelector('.header__nav')
const burger = document.querySelector('.header__menu')

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