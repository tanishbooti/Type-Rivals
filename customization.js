window.selectedDifficulty = null;
window.selectedTime = null;


function toggleClass(selectedButton, buttonGroup) {
    buttonGroup.forEach(button => button.classList.remove('choose')); //iterates through each btn in btngrp and removes choose class
    selectedButton.classList.add('choose'); //selected btn ko choose class dedi
}


const timeButtons = document.querySelectorAll('.sec30, .min1, .min2');
timeButtons.forEach(button => {
    button.addEventListener('click', () => {
        toggleClass(button, timeButtons);
        window.selectedTime = button.textContent; 
        
        localStorage.setItem('selectedTime', window.selectedTime); //so that i can use in any other window
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
function checkSelections() { //before pressing start btn, it identifies if any one of btns in each category is selected or not
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

    console.log("Selected Difficulty:",window.selectedDifficulty);
    console.log("Selected Time:", window.selectedTime);

    const messageContainer = document.querySelector('.message-container');
    const countdownElement = document.createElement('div');
    countdownElement.classList.add('countdown');
    messageContainer.appendChild(countdownElement);

    let countdown = 5;
    countdownElement.textContent = countdown;

    const interval = setInterval(() => {
        countdown -= 1;
        countdownElement.textContent = countdown; //setting timer

        if (countdown === 0) {
            clearInterval(interval);
            document.body.innerHTML = '<h1 class="go">Go!</h1>';

            setTimeout(() => {
                window.location.href = 'contest.html'; //after a short delay, it takes to contest.html
            }, 10);
        }
    }, 1000);
});


function disableButtons() {
    [...timeButtons, ...difficultyButtons].forEach(button => { //taking 2 arrays at the time time, agr ... nhi use krte toh bs first element use hota
        button.disabled = true; //setting disabled property true taki user koi change na kr paye
        
    });
}
