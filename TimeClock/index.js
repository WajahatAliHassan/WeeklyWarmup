function updateTime(){
let hours = document.getElementById("hour");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("second");

let date = new Date();
hr = date.getHours();
min = date.getMinutes();
sec = date.getSeconds();

if (hr > 12) hr = 1;
if (hr < 10) hr = "0" + hr;
else if (min < 10) min = "0" + min;
else if (sec < 10) sec = "0" + sec;

  hours.textContent = hr;
  minutes.textContent = min;
  seconds.textContent = sec;
}
updateTime();

setInterval(updateTime, 1000);