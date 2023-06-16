const menuItems = document.querySelector('.menu-items');
const toggleMenu = document.querySelector('.toggle-menu');

toggleMenu.addEventListener('click', () => {
  menuItems.classList.toggle('show');
});
