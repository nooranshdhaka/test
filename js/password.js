

function getMessage(attempt) {
    switch (attempt) {
        case 1: return "Try Again!";
        case 2: return "Nope, Try Again!";
        case 3: return "Come on Pari, you can do it";
        case 4: return "I believe in you";
        case 5: return "Hint: The Name of your loved one";
        case 6: return "C'mon, you still can't do it? Try again, it's not that hard";
        case 7: return "OMFG Pari, TRY AGAIN";
        case 8: return "IT'S 'M***o' YOU DUMBASS!";
        default: return "Try Again!";
    }
}

// Call this function to clear the message when the user starts typing again
function clearMessage() {
    const messageElement = document.getElementById("message");
    messageElement.style.visibility = 'hidden';
    messageElement.style.opacity = '0';
    messageElement.classList.remove("highlight-message-visible");
}




let attempts = 0;

function checkPassword() {
    const passwordInput = document.getElementById("password");
    const password = "Marco"; // Replace with the actual password
    const messageElement = document.getElementById("message");

    if (passwordInput.value === password) {
        window.location.href = "cake.html";
    } else {
        attempts++;
        messageElement.innerText = "Incorrect password. Try again.";
        messageElement.style.display = "block";
        messageElement.innerText = getMessage(attempts);
        messageElement.style.visibility = 'visible';
        messageElement.style.opacity = '1';
        messageElement.classList.add("highlight-message-visible");
        messageElement.classList.add("highlight-message-visible");
        unlockButton.classList.add("shake"); // Add shake class to button
        setTimeout(() => {
            unlockButton.classList.remove("shake"); // Remove shake class after animation
        }, 500); // Duration of shake animation

        
    }
}
