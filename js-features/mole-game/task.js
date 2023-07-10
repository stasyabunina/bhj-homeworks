'use strict';

const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
let getHole = index => document.getElementById(`hole${index}`);

for (let index = 1; index < 10; index++) {
    getHole(index).onclick = () => {
      if (getHole(index).className.includes("hole_has-mole")) {
        dead.textContent++;
      } else {
        lost.textContent++;
      }
  
      if (lost.textContent >= 5) {
        alert("Вы проиграли!");
        dead.textContent = 0;
        lost.textContent = 0;
      } else if (dead.textContent >= 5) {
        alert("Вы выиграли!");
        dead.textContent = 0;
        lost.textContent = 0;
      }
    };
  }