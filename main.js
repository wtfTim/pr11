let items = document.getElementById('menu-items');
menu.addEventListener('mouseover', function () {
    items.style.display = 'flex';
    items.style.transform = 'translateY(0)';
    items.style.transition = 'transform 0.3s ease-in-out';
});
menu.addEventListener('mouseout', function () {
    items.style.transform = 'translateY(-200px)';
    items.style.transition = 'transform 0.3s ease-in-out'; 
        items.style.display = 'none';

});