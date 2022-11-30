const btn = document.getElementById('menu-btn')
const mobileMenu = document.getElementById('menu')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  mobileMenu.classList.toggle('flex')
  mobileMenu.classList.toggle('hidden')
})