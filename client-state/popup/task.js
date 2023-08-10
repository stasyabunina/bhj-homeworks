const popup = document.querySelector('.modal');
const close = document.querySelector('.modal__close');

close.addEventListener('click', () => {
    popup.classList.remove('modal_active');
    setCookie('closed', 'true')
});

function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value)
}

function getCookie(name) {
    const value = '; ' + document.cookie;
    let parts = value.split('; ' + name + '=');
    if (parts.length === 2) {
        return parts.pop().split(';').shift();
    }
}

if (getCookie('closed') != 'true') {
    popup.classList.add('modal_active')
}