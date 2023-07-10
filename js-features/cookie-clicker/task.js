'use strict';

let cookie = document.getElementById('cookie');
let clickCounter = document.getElementById('clicker__counter');
let newClick = document.getElementById('clicker__speed');

let count = Number(clickCounter.textContent);
let oldClick = Date.now();

cookie.onclick = () => {
    count++;
    clickCounter.textContent = count;
    if (cookie.width === 200) {
        cookie.width = 230;
    } else {
        cookie.width = 200;
    }

    newClick.textContent = (1000 / (Date.now() - oldClick)).toFixed(2);
    oldClick = Date.now();
};