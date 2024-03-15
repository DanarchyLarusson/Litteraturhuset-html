document.addEventListener("DOMContentLoaded", function() {
    const verksamhetNavItem = document.querySelector('.navbar li:nth-child(3)');
    const dropdownMenu = document.querySelector('.navbar li:nth-child(3) .dropdown-menu');

    verksamhetNavItem.addEventListener('mouseenter', function() {
        dropdownMenu.style.display = 'block';
    });

    verksamhetNavItem.addEventListener('mouseleave', function() {
        dropdownMenu.style.display = 'none';
    });
});
