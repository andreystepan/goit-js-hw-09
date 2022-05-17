// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";


const startBth = document.querySelector('[data-start]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        const currentTime = options.defaultDate.getTime();
        const selectedTime = selectedDates[0].getTime();
        // console.log(selectedDates[0]);
        // console.log(currentTime);
        // console.log(selectedTime);
        // const deltaTime = selectedTime - currentTime;
        // const time = convertMs(deltaTime);
        // console.log(time)
        // console.log(deltaTime);
        if (selectedDates[0].getTime() > currentTime) {
            startBth.disabled = false;
        }
        else {
            startBth.disabled = true;
            window.alert("Please choose a date in the future");
        }
    
  },
};

flatpickr('input#datetime-picker', options);



startBth.addEventListener('click', handleStartBtnClick);

function handleStartBtnClick() {
// const current = new Date(options.onClose(selectedDates[0].getTime()));
console.log(Date.now());
};

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






