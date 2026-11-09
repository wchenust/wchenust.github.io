$(function () {
    // Navbar scroll effect
    var navbar = document.getElementById('navbar');
    function onScroll() {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Mobile menu toggle
    var toggle = document.getElementById('navbar-toggle');
    var links = document.getElementById('navbar-links');
    if (toggle && links) {
        toggle.addEventListener('click', function () {
            links.classList.toggle('open');
            var icon = toggle.querySelector('i');
            if (links.classList.contains('open')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
});

function closeMobileMenu() {
    var links = document.getElementById('navbar-links');
    var toggle = document.getElementById('navbar-toggle');
    if (links && links.classList.contains('open')) {
        links.classList.remove('open');
        var icon = toggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
}
