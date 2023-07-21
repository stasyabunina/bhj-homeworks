const btn = document.querySelectorAll('.dropdown__value');
const list = document.querySelectorAll('.dropdown__list');
const links = document.querySelectorAll('.dropdown__link');

btn.forEach(item => {
    item.addEventListener("click", function () {
        let dropdown = this.parentElement.querySelector(".dropdown__list");

        list.forEach(el => {
            if (el != dropdown) {
                el.classList.remove('dropdown__list_active');
            }
        });

        dropdown.classList.toggle('dropdown__list_active');

        links.forEach((link) => {
            const activeDiv = link.closest('div');
            const selectedBtn = activeDiv.querySelector('.dropdown__value');

            link.addEventListener('click', () => {
                selectedBtn.textContent = link.textContent;

                function hide() {
                    dropdown.classList.remove('dropdown__list_active')
                }
        
                hide() 
            })
        })
    })
});

links.forEach((e) => {
    e.onclick = function () {
        return false;
    };
})