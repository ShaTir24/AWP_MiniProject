const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const navbar = document.querySelector('.navbar');

document.addEventListener('DOMContentLoaded', function () {
    mobileMenuIcon.addEventListener('click', function () {
        navbar.classList.toggle('show');
        mobileMenuIcon.style.display = "none";
    });
});

document.addEventListener('click', (event) => {
    if (!navbar.contains(event.target) && !mobileMenuIcon.contains(event.target)) {
        navbar.classList.remove('show');
        mobileMenuIcon.style.display = "block";
    }
});