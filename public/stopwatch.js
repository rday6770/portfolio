const timer = document.querySelector("#time");
const start_btn = document.querySelector("#start_stopwatch");
const pause_btn = document.querySelector("#pause_stopwatch");
const reset_btn = document.querySelector("#reset_stopwatch");

let time = 0,
  interval;

function showTime() {
  time += 1;
  timer.innerHTML = toHHMMSS(time);
}

function start() {
  interval = setInterval(showTime, 1000);
}

function pause() {
  if (interval) {
    clearInterval(interval);
    interval = null;
    pause_btn.innerHTML = "RESUME";
  } else {
    interval = setInterval(showTime, 1000);
    pause_btn.innerHTML = "PAUSE";
  }
}

function reset() {
  clearInterval(interval);
  interval = null;
  pause_btn.innerHTML = "PAUSE";
  time = 0;
  timer.innerHTML = toHHMMSS(time);
}

function toHHMMSS(time) {
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time - hours * 3600) / 60);
  let seconds = time - hours * 3600 - minutes * 60;

  hours = `${hours}`.padStart(2, "0");
  minutes = `${minutes}`.padStart(2, "0");
  seconds = `${seconds}`.padStart(2, "0");

  return hours + ":" + minutes + ":" + seconds;
}

/*
Reference:
 Stopwatch in javascript—Jsfiddle—Code playground. (n.d.). Retrieved 3 June 2022, from https://jsfiddle.net/2vwcd3a8/
*/
