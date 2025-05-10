
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.querySelector('.form').addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const delay = Number(e.target.elements.delay.value);
  const state = e.target.elements.state.value;

  createPromise(delay, state)
    .then(delay => {
      iziToast.success({
        message: `Fulfilled promise in ${delay}ms`,
        position: 'topRight',
        timeout: 3000,
        backgroundColor: '#32c682',
        messageColor: '#fff',
        iconColor: '#fff',
        progressBarColor: '#fff',
        close: false,
        borderRadius: '12px',
      });
    })
    .catch(delay => {
      iziToast.error({
        message: `Rejected promise in ${delay}ms`,
        position: 'topRight',
        timeout: 3000,
        backgroundColor: '#f45858',
        messageColor: '#fff',
        iconColor: '#fff',
        progressBarColor: '#fff',
        close: false,
        borderRadius: '12px',
      });
    });
}

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      state === 'fulfilled' ? resolve(delay) : reject(delay);
    }, delay);
  });
}