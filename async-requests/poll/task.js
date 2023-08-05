let xhr = new XMLHttpRequest();
const poll = document.querySelector('.poll__answers');
const title = document.querySelector('.poll__title');

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.responseType = 'json';

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        title.innerText = xhr.response.data.title;

        let answers = xhr.response.data.answers;
        answers.forEach(answer => {
            let html = `<button class="poll__answer">${answer}</button>`;
            poll.insertAdjacentHTML('afterbegin', html);
        });
    }

    let buttons = document.querySelectorAll('.poll__answer');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Спасибо, ваш голос засчитан!');
        })
    })


});

xhr.send();