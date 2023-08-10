const input = document.getElementById('editor');
const text = localStorage.getItem('input');

if (text) {
    input.value = text
};

input.addEventListener('input', () => {
    localStorage.setItem('input', input.value)
})

const button = document.createElement('button');
button.className = 'button';
button.textContent = 'Очистить содержимое';
button.type = 'button';
input.after(button);

button.addEventListener('click', () => {
    input.value = '';
    localStorage.removeItem('input')
})