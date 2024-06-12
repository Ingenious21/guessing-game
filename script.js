document.addEventListener('DOMContentLoaded', () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 5;

    const input = document.getElementById('input');
    const guess = document.getElementById('guess');
    const message = document.getElementById('message');
    const attemptsDisplay = document.getElementById('attempts');
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modal-message');
    const playAgain = document.getElementById('play-again');
    const closeModal = document.getElementById('close-modal');

    guess.addEventListener('click', () => {
        const userGuess = parseInt(input.value, 10);

        if (isNaN(userGuess)) {
            message.textContent = 'Please enter a number.';
            return;
        }

        attempts--;

        if (userGuess === randomNumber) {
            modalMessage.textContent = 'Congratulations! You guessed the number.';
            showModal();
        } else if (attempts > 0) {
            if (userGuess > randomNumber) {
                message.textContent = `Too high! You have ${attempts} attempts left.`;
            } else if (userGuess < randomNumber) {
                message.textContent = `Too low! You have ${attempts} attempts left.`;
            }
        } else {
            modalMessage.textContent = `You've run out of attempts! The correct number was ${randomNumber}.`;
            showModal();
        }

        attemptsDisplay.textContent = `Attempts left: ${attempts}`;
        input.value = '';
        input.focus();
    });

    playAgain.addEventListener('click', () => {
        location.reload();
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        guess.disabled = true;
        input.disabled = true;
    });

    function showModal() {
        modal.style.display = 'block';
        guess.disabled = true;
        input.disabled = true;
    }
});
