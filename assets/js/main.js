const toggleIcon = document.querySelector('.toggle');
const navMenu = document.querySelector("nav");
const Nav = document.querySelector('.nav__menu')

toggleIcon.addEventListener('click', () => {
    toggleIcon.classList.toggle('active');
    navMenu.classList.toggle('active');
    Nav.classList.toggle('active');
})