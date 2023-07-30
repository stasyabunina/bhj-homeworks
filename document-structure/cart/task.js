const btnIncrease = document.querySelectorAll('.product__quantity-control_inc');
const btnDecrease = document.querySelectorAll('.product__quantity-control_dec');
const btns = document.querySelectorAll('.product__add');
const products = document.querySelector('.cart__products');

btnIncrease.forEach((inc) => {
    inc.addEventListener('click', () => {
        const quantity = inc.parentElement.querySelector('.product__quantity-value');
        let count = Number(quantity.textContent);

        count++;
        quantity.textContent = count;
    })
});

btnDecrease.forEach((dec) => {
    dec.addEventListener('click', () => {
        const quantity = dec.parentElement.querySelector('.product__quantity-value');
        let count = Number(quantity.textContent);

        if (count > 1) {
            count--;
            quantity.textContent = count;
        } else {
            return false
        }
    })
})

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        let currentProduct = products.querySelector(`[data-id='${btn.closest('.product').dataset.id}']`);

        if (!currentProduct) {
            let product = document.createElement('div');
            product.className = 'cart__product';
            products.appendChild(product);
            product.dataset.id = btn.closest('.product').dataset.id;

            const quantity = btn.closest('.product').querySelector('.product__quantity-value');
            let count = Number(quantity.textContent);

            const html =
            `<img class="cart__product-image" src="${btn.closest('.product').querySelector('img').src}">
            <div class="cart__product-count">${count}</div>`;
            product.insertAdjacentHTML('afterBegin', html);
        } else {
            const quantity = btn.closest('.product').querySelector('.product__quantity-value');
            let count = Number(quantity.textContent);

            currentProduct.querySelector('.cart__product-count').textContent = count;
        }
    })
})