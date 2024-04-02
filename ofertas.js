const imageContainer = document.getElementById('boximagem ');
const image = document.getElementById('boximagem');

imageContainer.addEventListener('mouseenter', () => {
    image.classList.add('zoomed');
});

imageContainer.addEventListener('mouseleave', () => {
    image.classList.remove('zoomed');
});
