document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('open');
        });
    }

    const recommendations = document.querySelectorAll('.recommendation');
    recommendations.forEach(item => {
        item.addEventListener('click', () => {
            alert(`You clicked on ${item.querySelector('.product-title').innerText}`);
        });
    });
});
