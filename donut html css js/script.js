// script.js
const donut = document.querySelector('.donut');

donut.addEventListener('mouseover', () => {
    donut.style.animationPlayState = 'paused';
});

donut.addEventListener('mouseout', () => {
    donut.style.animationPlayState = 'running';
});
