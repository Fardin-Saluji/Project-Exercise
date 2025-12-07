let timerDisplay = document.getElementById("timer");
let startBtn = document.getElementById("start");
let resetBtn = document.getElementById("reset");

let time = 10 * 60; 
let countdown;

function updateTimer() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  timerDisplay.textContent = `${minutes}:${seconds}`;

  if (time > 0) {
    time--;
  } else {
    clearInterval(countdown);
    alert("⏰ Time’s up!");
  }
}

startBtn.addEventListener("click", () => {
  clearInterval(countdown);
  countdown = setInterval(updateTimer, 1000);
});


resetBtn.addEventListener("click", () => {
  clearInterval(countdown);
  time = 10 * 60;
  timerDisplay.textContent = "10:00";
});
