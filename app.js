const docHour = document.querySelector(".hour");
const docMin = document.querySelector(".min");
const docSec = document.querySelector(".sec");

let startInterval;

const startTimer = () => {
  let time = Date.now();
  startInterval = setInterval(() => {
    // console.log(time);
    let elapsed = Date.now() - time;

    let ms = Math.floor((elapsed % 1000) / 10);
    let sec = (elapsed % (1000 * 60)) / 1000;
    let min = (elapsed % (1000 * 60 * 60)) / 60000;
    let hour = (elapsed / (1000 * 60 * 60 * 60)) % 12;

    docHour.innerText = Math.floor(hour).toString().padStart(2, "0");
    docMin.innerText = Math.floor(min).toString().padStart(2, "0");
    docSec.innerText = Math.floor(sec).toString().padStart(2, "0");
    // console.log(Math.floor(hour), " : ", Math.floor(min), " : ", Math.floor(sec));
  }, 10);
};

const pauseTimer = () => {
  clearInterval(startInterval);
};
