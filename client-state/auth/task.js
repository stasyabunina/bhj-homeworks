const form = document.getElementById('signin__form');
const formWrapper = document.querySelector('.signin');
const welcome = document.querySelector('.welcome');
const id = document.getElementById('user_id');

if (localStorage.getItem('user_id')) {
    welcome.classList.add('welcome_active');
    id.textContent = localStorage.getItem('user_id');
    formWrapper.classList.remove('signin_active');
} else {
    formWrapper.classList.add('signin_active');
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.responseType = 'json';

    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === xhr.DONE) {
            if (!xhr.response.success) {
                alert('Неверный логин/пароль');
            } else {
                welcome.classList.add('welcome_active');
                formWrapper.classList.remove('signin_active');
                id.textContent = xhr.response.user_id;
                localStorage.setItem('user_id', xhr.response.user_id);
            }
        }
    })

    const formData = new FormData(form);
    xhr.send(formData);
    form.reset()
})

const button = document.createElement('button');
button.className = 'button';
button.textContent = 'Выйти';
button.type = 'button';
welcome.append(button);

button.addEventListener('click', () => {
    welcome.classList.remove('welcome_active');
    formWrapper.classList.add('signin_active');
    localStorage.removeItem('user_id');
    form.reset()
})






