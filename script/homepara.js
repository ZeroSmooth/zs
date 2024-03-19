window.addEventListener('scroll', () => {
    const parallaxBg = document.querySelector('.parallax-bg');
    const scrollY = window.scrollY;
    const translateY = scrollY * 0.5;
    console.log(translateY);
    parallaxBg.style.transform = `translateY(${translateY}px)`;
});