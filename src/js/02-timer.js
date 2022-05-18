
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const startBth = document.querySelector('[data-start]');
const inputEl = document.querySelector('#datetime-picker');

const refs = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]')
}

startBth.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) { 
        const currentTime = Date.now();
        if (selectedDates[0].getTime() > currentTime) {
            startBth.disabled = false;
        }
        else {
            window.alert("Please choose a date in the future");
        }
  },
};

const result = flatpickr(inputEl, options);

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

 function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}


startBth.addEventListener('click', handleStartBtnClick);

function handleStartBtnClick() {
//  const deltaTime = 0;
  const timerId = setInterval(() => {
    
    
    startBth.disabled = true;
    const selectedTime = result.selectedDates[0].getTime();
    const deltaTime = selectedTime - Date.now();
     const formatTime = convertMs(deltaTime);
  if (deltaTime <= 0) {
    startBth.disabled = false;
    clearInterval(timerId);
    return;
          }
   
    updateClockface(formatTime);
    console.log(formatTime);

    
  }, 1000);
    
};

function updateClockface ({ days, hours, minutes, seconds }) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.minutes.textContent = `${minutes}`;
  refs.seconds.textContent = `${seconds}`;
}







