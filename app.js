let time = Date.now();

// const startTimer = () => {

// };
setInterval(() => {
  let elapsed = Date.now() - time;

  let ms = Math.floor((elapsed % 1000) / 10);
  let sec = (elapsed % (1000 * 60)) / 1000;
  let min = (elapsed % (1000 * 60 * 60)) / 60000;
  let hour = (elapsed % (1000 * 60 * 60 * 60)) / 600000;

  console.log(Math.floor(hour), " : ", Math.floor(min), " : ", Math.floor(sec));
}, 10);
// startTimer();
