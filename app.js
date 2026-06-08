const docHour = document.querySelector(".hour");
const docMin = document.querySelector(".min");
const docSec = document.querySelector(".sec");

let timeInterval,
  startTime,
  isRunning = false;
let elapsedTime = 0;

function showNotification(title, body) {
  if (Notification.permission === "granted") {
    console.log("Notification function is called!");
    const notie = new Notification(title, {
      body: body,
      icon: "./coderIcon.png",
    });
    console.log("This is notie: ", notie);
  }
}

let isNotified = false;

const startTimer = () => {
  isPaused = false;
  console.log("isRunning?", isRunning);
  if (!isRunning) {
    isRunning = true;
    startTime = Date.now();

    timeInterval = setInterval(() => {
      let elapsed = elapsedTime + (Date.now() - startTime);

      let ms = Math.floor((elapsed % 1000) / 10);
      let sec = (elapsed % (1000 * 60)) / 1000;
      let min = (elapsed % (1000 * 60 * 60)) / 60000;
      let hour = (elapsed / (1000 * 60 * 60 * 60)) % 12;

      if (Math.floor(min) === 5 && !isNotified) {
        showNotification("JSTimer Notification!", "10 Seconds has completed!");
        isNotified = true;
      }

      docHour.innerText = Math.floor(hour).toString().padStart(2, "0");
      docMin.innerText = Math.floor(min).toString().padStart(2, "0");
      docSec.innerText = Math.floor(sec).toString().padStart(2, "0");
    }, 10);
  } else {
    return;
  }
};

let isPaused = true;
let isReset = false;
const laps = [];

const addLap = () => {
  laps.push(elapsedTime);
  showLaps();
};

const showLaps = () => {
  const lapList = document.querySelector(".lap-list");
  lapList.innerText = "";

  laps.map((lap, idx) => {
    let sec = (lap % (1000 * 60)) / 1000;
    let min = (lap % (1000 * 60 * 60)) / 60000;
    let hour = (lap / (1000 * 60 * 60 * 60)) % 12;

    let l = document.createElement("div");
    l.innerText = `Lap ${idx + 1}`;
    l.classList.add("lap");

    let lTime = document.createElement("span");
    lTime.innerText = `${Math.floor(hour).toString().padStart(2, "0")} : ${Math.floor(min).toString().padStart(2, "0")} : ${Math.floor(sec).toString().padStart(2, "0")}`;

    l.appendChild(lTime);
    lapList.appendChild(l);
  });
};

const pauseTimer = () => {
  clearInterval(timeInterval);
  if (!isPaused && !isReset) {
    isPaused = true;
    elapsedTime += Date.now() - startTime;
    isRunning = false;
    addLap();
  } else if (!isPaused && isReset) {
    isPaused = true;
    elapsedTime = 0;
    isRunning = false;
  }
};

const reset = () => {
  clearInterval(timeInterval);
  isReset = true;
  // startTime = 0;
  elapsedTime = 0;
  isRunning = false;
  docHour.innerText = "00";
  docMin.innerText = "00";
  docSec.innerText = "00";
};

Notification.requestPermission();
