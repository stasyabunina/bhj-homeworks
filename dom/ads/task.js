let rotator = (document.querySelectorAll('.rotator'));

rotator.forEach(item => {
    let rotators = Array.from(item.querySelectorAll('.rotator__case'));
    let current = 0;


    function handler() {
        rotators[current].classList.remove('rotator__case_active');
        current++;

        if (current >= rotators.length) {
            current = 0;
        }

        rotators[current].classList.add('rotator__case_active');
        rotators[current].style.color = rotators[current].dataset.color;
        let interval = rotators[current].dataset.speed;

        setTimeout(handler, interval);
    };

    handler()
})

