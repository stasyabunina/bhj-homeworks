'use strict';

// let time = 59;
// let timer = document.getElementById('timer');
// let interval = setInterval(addTimer, 1000);

// function addTimer() {
//     if (time === 0) {
//         clearInterval(interval);
//         alert('Вы победили в конкурсе!');
//         window.location.assign('https://www.python.org/ftp/python/3.11.4/python-3.11.4-amd64.exe');
//     }

//     timer.textContent = time;
//     time -= 1;
// }


let timer = document.getElementById('timer');
let interval = setInterval(addTimer, 1000);

function addTimer() {
  let time = timer.textContent;
  let arr = time.split(':');
  let hour = arr[0];
  let minute = arr[1];
  let second = arr[2];

  if (second == 0) {
    if (minute == 0) {
      if (hour == 0) {
        clearInterval(interval);
        alert('Вы победили в конкурсе!');
        window.location.assign('https://www.python.org/ftp/python/3.11.4/python-3.11.4-amd64.exe');
      }

      hour -= 1;
      minute = 60;
      second = 60;

      if (hour < 10) {
        hour = '0' + hour;
      }
    }

    minute -= 1;
    second = 60;

    if (minute < 10) {
      minute = '0' + minute;
    }
  }

  second -= 1;

  if (second < 10) {
    second = '0' + second;
  }

  time = `${hour}:${minute}:${second}`;
  timer.textContent = time;
}