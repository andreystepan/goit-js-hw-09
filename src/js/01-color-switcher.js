const PROMT_DELAY = 1000;
let timeoutId = null;

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

startBtn.addEventListener('click',handleBtnStart);
stopBtn.addEventListener('click',handleBtnStop);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function handleBtnStart() {
    if (stopBtn) {
        startBtn.disabled = true;
    }

    timeoutId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor()
    }, PROMT_DELAY);
};



function handleBtnStop() {
    clearInterval(timeoutId);
    startBtn.disabled = false;
}
