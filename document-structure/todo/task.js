const input = document.querySelector('.tasks__input');
const form = document.querySelector('.tasks__control');
const btnAdd = document.querySelector('.tasks__add');
const list = document.querySelector('.tasks__list');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if ((e.key = 13) || (e.key = 1)) {
        addTask()
    }

    form.reset()

    // const btns = document.querySelectorAll('.task__remove');
    // btns.forEach((btn) => {
    //     btn.addEventListener('click', (e) => {
    //         e.preventDefault();

    //         btn.parentElement.remove()
    //     })
    // })

    const elements = document.querySelectorAll('.task');

    elements.forEach((element) => {
        element.querySelector('.task__remove').addEventListener('click', () => {
            element.remove()
        })
    })
});



// btnAdd.addEventListener('click', (e) => {
//     addTask()
//     e.preventDefault();
//     input.value = ''
// });

// input.addEventListener('keydown', (e) => {
//     if (e.key === 'Enter') {
//         addTask()
//     } else {
//       return;
//     }

//     input.value = ''
// });

function addTask() {
    if ((input.value.trim() != "")) {
        let task = document.createElement('div');
        task.className = 'task';
        list.appendChild(task);
        const html =
            `<div class="task__title">${input.value}</div>
        <a href="#" class="task__remove">&times;</a>`;
        task.insertAdjacentHTML('afterBegin', html);
    }
}