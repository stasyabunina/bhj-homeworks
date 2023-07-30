const links = document.querySelectorAll('.has-tooltip');

links.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';

        tooltip.innerText = link.getAttribute('title');
        let coordinatesParent = link.getBoundingClientRect();
        tooltip.style.top = coordinatesParent.bottom + 'px';
        tooltip.style.left = coordinatesParent.left + 'px';
        link.appendChild(tooltip);
        tooltip.classList.add('tooltip_active')

        let tooltips = document.querySelectorAll('.tooltip');
        let currentTooltip = link.querySelector('.tooltip');
        tooltips.forEach(tooltip => {
            if (tooltip != currentTooltip) {
                tooltip.remove();
            }
        });
    })
})