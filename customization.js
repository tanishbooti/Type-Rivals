window.selectedDifficulty = null;
window.selectedTime = null;


function toggleClass(selectedButton, buttonGroup) {
    buttonGroup.forEach(button => button.classList.remove('choose'));
    selectedButton.classList.add('choose');
}


const timeButtons = document.querySelectorAll('.sec30, .min1, .min2');
timeButtons.forEach(button => {
    button.addEventListener('click', () => {
        toggleClass(button, timeButtons);
        window.selectedTime = button.textContent; 
        
        localStorage.setItem('selectedTime', window.selectedTime);
        checkSelections();
    });
});


const difficultyButtons = document.querySelectorAll('.easy, .med, .hard');
difficultyButtons.forEach(button => {
    button.addEventListener('click', () => {
        toggleClass(button, difficultyButtons);
        window.selectedDifficulty = button.textContent;
       
        localStorage.setItem('selectedDifficulty', window.selectedDifficulty);
        checkSelections();
    });
});


const startButton = document.querySelector('.start');
function checkSelections() {
    const timeSelected = Array.from(timeButtons).some(button => button.classList.contains('choose'));
    const difficultySelected = Array.from(difficultyButtons).some(button => button.classList.contains('choose'));
    if (timeSelected && difficultySelected) {
        startButton.style.display = 'block';
    } else {
        startButton.style.display = 'none';
    }
}


startButton.addEventListener('click', () => {
    disableButtons();
    startButton.style.display = 'none';

    console.log("Selected Difficulty:", window.selectedDifficulty);
    console.log("Selected Time:", window.selectedTime);

    const messageContainer = document.querySelector('.message-container');
    const countdownElement = document.createElement('div');
    countdownElement.classList.add('countdown');
    messageContainer.appendChild(countdownElement);

    let countdown = 5;
    countdownElement.textContent = countdown;

    const interval = setInterval(() => {
        countdown -= 1;
        countdownElement.textContent = countdown;

        if (countdown === 0) {
            clearInterval(interval);
            document.body.innerHTML = '<h1 class="go">Go!</h1>';

            setTimeout(() => {
                window.location.href = 'contest.html';
            }, 10);
        }
    }, 1000);
});


function disableButtons() {
    [...timeButtons, ...difficultyButtons].forEach(button => {
        button.disabled = true;
        button.classList.add('disabled');
    });
}