document.addEventListener('DOMContentLoaded', () => {
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the animation class when the slide comes into view
                entry.target.classList.add('fade-in');
            } else {
                // Remove the animation class when the slide leaves view
                entry.target.classList.remove('fade-in');
            }
        });
    }, options);

    document.querySelectorAll('.slide').forEach(slide => {
        observer.observe(slide);
    });
});
