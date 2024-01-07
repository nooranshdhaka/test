// This script will handle clicking on each flame

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.flame').forEach(flame => {
        flame.addEventListener('click', function() {
            this.classList.add('flame-out'); // Adds the class that triggers the fade-out animation
        });
    });
});