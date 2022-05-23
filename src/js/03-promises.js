import Notiflix from 'notiflix';


const btnSabmit = document.querySelector('.form');
const inputDelay = document.querySelector('[name="delay"]');
const inputStep = document.querySelector('[name="step"]');
const inputAmount = document.querySelector('[name="amount"]');

let delay = 0;
let step = 0;
let amount = 0;

btnSabmit.addEventListener('submit', handleClickPromise);

 
function handleClickPromise(e) {
  e.preventDefault();
  delay = Number(inputDelay.value);
  step = Number(inputStep.value);
  amount = inputAmount.value;

     function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
     resolve(`✅ Fulfilled promise ${position} in ${delay}ms`)
  } else {
     reject(`❌ Rejected promise ${position} in ${delay}ms`)
  }
   },delay)
     
  })
       
     }

 for (let position = 1; position <= amount; position += 1){
  createPromise(position, delay).then(successPromise)
  .catch(failurePromise);

   delay += step;
  }
  e.target.reset();
 }; 
 
function successPromise(position) { 
    Notiflix.Notify.success(` ${position} `); 
} 

function failurePromise(position) { 
    Notiflix.Notify.failure(`${position}`); 
}
