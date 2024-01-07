// Immediately check if the current date is past the target date
window.onload = function() {
    const targetDate = new Date('January 8, 2024 00:00:00').getTime();
    const now = new Date().getTime();

    if (now >= targetDate) {
        window.location.href = 'password.html';
    } else {
        // If it's not time yet, start the countdown
        updateCountdown();
        setInterval(updateCountdown, 1000);
    }
};

function updateCountdown() {
    const countdownElement = document.getElementById('countdown');
    const targetDate = new Date('January 8, 2024 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        window.location.href = 'password.html';
        return;
    }

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
