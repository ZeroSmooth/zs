document.addEventListener('DOMContentLoaded', function() {

const parallaxContainer = document.getElementById('parallax-game'); 
const parallaxContent = document.querySelector('.innergame'); 
let isHovering = false; 

parallaxContent.addEventListener('mouseenter', () => {
    isHovering = true; 
});

parallaxContent.addEventListener('mousemove', (e) => {
    if (!isHovering) return;

    const rect = parallaxContainer.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const tiltAngleX = -y / 30;
    const tiltAngleY = x / 100; 

    parallaxContainer.style.transition = 'transform 0.5s ease-out'; 
    parallaxContainer.style.transform = `perspective(1000px) rotateX(${tiltAngleX}deg) rotateY(${tiltAngleY}deg)`;
});

parallaxContent.addEventListener('mouseleave', () => {
    isHovering = false;

    parallaxContainer.style.transition = 'transform 0.5s ease-out';
    parallaxContainer.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
});
});