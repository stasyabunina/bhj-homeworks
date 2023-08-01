const links = document.querySelectorAll('.has-tooltip');
const tooltip = document.createElement('div');
tooltip.className = 'tooltip';

links.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        link.after(tooltip);
        
        if (link.title == tooltip.textContent) {
            tooltip.classList.toggle('tooltip_active');
        } else {
            tooltip.innerText = link.getAttribute('title');
            let coordinatesLink = link.getBoundingClientRect();
            tooltip.style.top = coordinatesLink.bottom + 'px';
            tooltip.style.left = coordinatesLink.left + 'px';
            tooltip.classList.add('tooltip_active');
        }
    })
})






