let book = document.querySelector('.book');
let colorWrapper = document.querySelector('.book__control_color');
let bgColorWrapper = document.querySelector('.book__control_background');
let color = colorWrapper.querySelectorAll('.color');
let bgColor = bgColorWrapper.querySelectorAll('.color');
let size = document.querySelectorAll('.font-size');
let links = book.querySelectorAll('a');


links.forEach((e) => {
    e.onclick = function () {
        return false
    }
});

size.forEach((e) => {
    e.addEventListener('click', () => {
        if (e.classList.contains('font-size_small')) {
            book.classList.remove('book_fs-big');
            book.classList.add('book_fs-small');
        } else if (e.classList.contains('font-size_big')) {
            book.classList.remove('book_fs-small');
            book.classList.add('book_fs-big');
        } else {
            book.classList.remove('book_fs-small');
            book.classList.remove('book_fs-big');
        }

        const sizeActive = book.querySelector('.font-size_active');
        sizeActive.classList.remove('font-size_active');
        e.classList.add('font-size_active')
    })
});

color.forEach((e) => {
    e.addEventListener('click', () => {
        if (e.dataset.textColor == 'whitesmoke') {
            book.classList.remove('book_color-black');
            book.classList.remove('book_color-gray');
            book.classList.add('book_color-whitesmoke');
        } else if (e.dataset.textColor == 'black') {
            book.classList.remove('book_color-whitesmoke');
            book.classList.remove('book_color-gray');
            book.classList.add('book_color-black');
        } else if (e.dataset.textColor == 'gray') {
            book.classList.remove('book_color-whitesmoke');
            book.classList.remove('book_color-black');
            book.classList.add('book_color-gray');
        }

        const colorActive = color.querySelector('.color_active');
        colorActive.classList.remove('color_active');
        e.classList.add('color_active')
    })
});

bgColor.forEach((e) => {
    e.addEventListener('click', () => {
        if (e.classList.contains('bg_color_white')) {
            book.classList.remove('bg_color_black');
            book.classList.remove('bg_color_gray');
            book.classList.add('bg_color_white');
        } else if (e.classList.contains('bg_color_black')) {
            book.classList.remove('bg_color_white');
            book.classList.remove('bg_color_gray');
            book.classList.add('bg_color_black');
        } else if (e.classList.contains('bg_color_gray')) {
            book.classList.remove('bg_color_white');
            book.classList.remove('bg_color_black');
            book.classList.add('bg_color_gray');
        }

        const bgColorActive = bgColorWrapper.querySelector('.color_active');
        bgColorActive.classList.remove('color_active');
        e.classList.add('color_active')
    })
})

// for (let i = 0; i < size.length; i++) {

//     size[i].addEventListener('click', () => {
//         const sizeActive = document.querySelector('.font-size_active');
//         sizeActive.classList.remove('font-size_active');
//         size[i].classList.add('font-size_active');

//         if (size[i].classList.contains('font-size_small')) {
//             book.classList.remove('book_fs-big');
//             book.classList.add('book_fs-small');
//         } else if (size[i].classList.contains('font-size_big')) {
//             book.classList.remove('book_fs-small');
//             book.classList.add('book_fs-big');
//         } else {
//             book.classList.remove('book_fs-small');
//             book.classList.remove('book_fs-big');
//         }
//     });
// }