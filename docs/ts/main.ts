document.addEventListener('DOMContentLoaded', () => {

    // 1. Sticky Header on Scroll
    const header = document.querySelector('.header');
    if (header) {
        const scrollOffset = 50; // Pixels to scroll before header becomes sticky
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > scrollOffset) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // 2. Fade-in Sections on Scroll
    const sections = document.querySelectorAll('.fade-in-section');
    const options = {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the item must be visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    console.log("DataPure interactive script loaded.");
});
