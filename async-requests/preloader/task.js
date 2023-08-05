let xhr = new XMLHttpRequest();
const items = document.getElementById('items');
const loader = document.querySelector('.loader');

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.responseType = 'json';

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
      loader.classList.remove('loader_active');

      let currencies = Object.entries(xhr.response.response.Valute);

      currencies.forEach((currency) => {
        let html = `<div class="item">
        <div class="item__code">${currency[1].CharCode}</div>
        <div class="item__value">${currency[1].Value}</div>
        <div class="item__currency">руб.</div>
        </div>`;
        items.insertAdjacentHTML('afterbegin', html);
      })
    } else {
        loader.className = 'loader loader_active';
    }
});

xhr.send();