window.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.mel-button');
    const card = document.querySelector('.mel-card');

    button.addEventListener('mouseenter', function() {
        card.classList.add('animate');
    });

    button.addEventListener('mouseleave', function() {
        card.classList.remove('animate');
    });
});