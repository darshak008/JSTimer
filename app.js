const docHour = document.querySelector(".hour");
const docMin = document.querySelector(".min");
const docSec = document.querySelector(".sec");

let timeInterval, startTime, isRunning;
let elapsedTime = 0;

const startTimer = () => {
  isPaused = false;
  if (!isRunning) {
    isRunning = true;
    startTime = Date.now();

    timeInterval = setInterval(() => {
      let elapsed = elapsedTime + (Date.now() - startTime);

      let ms = Math.floor((elapsed % 1000) / 10);
      let sec = (elapsed % (1000 * 60)) / 1000;
      let min = (elapsed % (1000 * 60 * 60)) / 60000;
      let hour = (elapsed / (1000 * 60 * 60 * 60)) % 12;

      docHour.innerText = Math.floor(hour).toString().padStart(2, "0");
      docMin.innerText = Math.floor(min).toString().padStart(2, "0");
      docSec.innerText = Math.floor(sec).toString().padStart(2, "0");
    }, 10);
  } else {
    return;
  }
};

const pauseTimer = () => {
  clearInterval(timeInterval);
};

const pause = document.querySelector(".pause");
let isPaused;

pause.addEventListener("click", () => {
  if (!isPaused) {
    isPaused = true;
    let pausedTime = pauseTimer();
    elapsedTime += Date.now() - startTime;
    isRunning = false;
  } else {
    isPaused = true;
  }
});

const reset = () => {
  clearInterval(timeInterval);
  docHour.innerText = "00";
  docMin.innerText = "00";
  docSec.innerText = "00";
};
