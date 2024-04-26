const resultDisplay = document.getElementById('result');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const message = document.getElementById('message');

const minExtrem = -10;
const maxExtrem =  10;

let counter = 0;

function updateCounter(value) {
    counter += value;
    resultDisplay.textContent = counter;

    if (counter > 0) {
        resultDisplay.className = 'yellow-bg';
    } else if (counter < 0) {
        resultDisplay.className = 'green-bg';
    } else {
        resultDisplay.className = 'red-bg';
    }

    if (counter === maxExtrem) {
        plusBtn.disabled = true;
        showMessage(maxExtrem);
    } else if (counter === minExtrem) {
        minusBtn.disabled = true;
        showMessage(minExtrem);
    } else {
        plusBtn.disabled = false;
        minusBtn.disabled = false;
        hideMessage();
    }
}

function showMessage(extrem) {
    message.textContent = 'Вы достигли экстремального значения ('+extrem+")!";
    message.style.visibility = 'visible';
}

function hideMessage() {
    message.style.visibility = 'hidden';
}

plusBtn.addEventListener('click', () => {
    updateCounter(1);
});

minusBtn.addEventListener('click', () => {
    updateCounter(-1);
});

document.addEventListener("DOMContentLoaded", () => {
    updateCounter(0);
});