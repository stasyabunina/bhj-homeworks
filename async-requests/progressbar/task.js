const form = document.getElementById('form');

form.addEventListener('submit', e => {
    e.preventDefault();

    const progress = document.getElementById('progress');
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState === xhr.DONE) {
            form.reset()
        }
    });

    xhr.upload.addEventListener('progress', (el) => {
        let percent = (el.loaded / el.total).toFixed(2);
        progress.setAttribute('value', percent)
    });

    const formData = new FormData(form);
    xhr.send(formData)
})