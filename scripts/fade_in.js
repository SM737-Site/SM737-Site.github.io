document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade_in');

    function checkVisibility() {
        fadeElements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            // If element is in the viewport, add the 'visible' class
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                element.classList.add('visible');
            } 
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();  // Call once to handle elements already in view when the page loads
});
