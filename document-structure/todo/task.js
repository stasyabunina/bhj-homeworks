const input = document.querySelector('.tasks__input');
const form = document.querySelector('.tasks__control');
const list = document.querySelector('.tasks__list');

form.addEventListener('submit', (element) => {
    element.preventDefault();

    let task = document.createElement('div');
    task.className = 'task';
    list.appendChild(task);
    const html =
    `<div class="task__title">${input.value}</div>
    <a href="#" class="task__remove">&times;</a>`;
    task.insertAdjacentHTML('afterBegin', html);

    const btns = document.querySelectorAll('.task__remove');
    btns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();

            btn.parentElement.remove()
        })
    })

    form.reset()
});