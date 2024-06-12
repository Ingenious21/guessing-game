document.addEventListener('DOMContentLoaded', () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 5;

    const input = document.getElementById('input');
    const guess = document.getElementById('guess');
    const message = document.getElementById('message');
    const attemptsDisplay = document.getElementById('attempts');

    guess.addEventListener('click', () => {
        const userGuess = parseInt(input.value, 10);

        if (isNaN(userGuess)) {
            message.textContent = 'Please enter a valid number.';
            return;
        }

        attempts--;

        if (attempts > 0) {
            if (userGuess === randomNumber) {
                message.textContent = `Congratulations! You guessed the number.`;
                guess.disabled = true;
                input.disabled = true;
            } else if (userGuess > randomNumber) {
                message.textContent = `Too high! You have ${attempts} attempts left.`;
            } else if (userGuess < randomNumber) {
                message.textContent = `Too low! You have ${attempts} attempts left.`;
            }
        } else {
            if (userGuess === randomNumber) {
                message.textContent = `Congratulations! You guessed the number.`;
            } else {
                message.textContent = `You've run out of attempts! The correct number was ${randomNumber}.`;
            }
            guess.disabled = true;
            input.disabled = true;
        }

        attemptsDisplay.textContent = `Attempts left: ${attempts}`;
        input.value = '';
        input.focus();
    });
});
