const links = document.querySelectorAll('.has-tooltip');

links.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';

        tooltip.innerText = link.getAttribute('title');
        let coordinatesLink = link.getBoundingClientRect();
        tooltip.style.top = coordinatesLink.bottom + 'px';
        tooltip.style.left = coordinatesLink.left + 'px';
        link.after(tooltip);

        let tooltips = document.querySelectorAll('.tooltip');
        let currentTooltip = link.nextElementSibling;
        tooltips.forEach(tooltip => {
            if (tooltip != currentTooltip) {
                tooltip.remove();
            }
        });

        currentTooltip.classList.toggle('tooltip_active');
    })
})