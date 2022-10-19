const ImgArr = ["./images/image-product-1.jpg", "./images/image-product-2.jpg", "./images/image-product-3.jpg", "./images/image-product-4.jpg"];

const preview = document.getElementById('preview');
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const Cart = document.querySelectorAll('.Cart');
const cartNumber = document.getElementById('cartNumber')
const cartTiTle = document.querySelector('.title');
let total = document.querySelector('.total');
const list = document.querySelector('.list');
const checkoutBtn = document.querySelector('#checkout');
const empty = document.querySelector('.empty');
const addToCart = document.querySelector('#addToCart');
const displayCart = document.querySelector('.allCart')
const cartBtn = document.querySelector('.cartBtn')
const count = document.querySelector('.count')
const deleteBtn = document.querySelector('.delete')
let cartTotal = 0;


preview.src = './images/image-product-1.jpg'
let countImg = 0;


previous.addEventListener('click', () => {
    if (countImg !== 0) {
        countImg--;
        preview.src = ImgArr[countImg]
    }
})

next.addEventListener('click', () => {
    if (countImg !== (ImgArr.length - 1)) {
        countImg++;
        preview.src = ImgArr[countImg]
    }
})


one.addEventListener('click', () => {
    countImg = 0;
    preview.src = ImgArr[countImg];
    resetStyle();
    one.style.opacity = '0.7';
    one.style.borderColor = 'hsl(26, 100%, 55%)';
})

two.addEventListener('click', () => {
    countImg = 1;
    preview.src = ImgArr[countImg];
    resetStyle();
    two.style.opacity = '0.7';
    two.style.borderColor = 'hsl(26, 100%, 55%)';
})

three.addEventListener('click', () => {
    countImg = 2;
    preview.src = ImgArr[countImg];
    resetStyle();
    three.style.opacity = '0.7';
    three.style.borderColor = 'hsl(26, 100%, 55%)';
})
four.addEventListener('click', () => {
    countImg = 3;
    preview.src = ImgArr[countImg]
    resetStyle();
    four.style.opacity = '0.7';
    four.style.borderColor = 'hsl(26, 100%, 55%)';
})

function resetStyle() {
    one.style.opacity = '1';
    one.style.borderColor = 'white';
    two.style.opacity = '1';
    two.style.borderColor = 'white';
    three.style.opacity = '1';
    three.style.borderColor = 'white';
    four.style.opacity = '1';
    four.style.borderColor = 'white';
}



one.addEventListener('mouseenter', () => {
    one.style.opacity = '0.7';
})
one.addEventListener('mouseleave', () => {
    if (countImg !== 0) {
        one.style.opacity = '1';
    }
})

two.addEventListener('mouseenter', () => {
    two.style.opacity = '0.7';
})
two.addEventListener('mouseleave', () => {
    if (countImg !== 1) {
        two.style.opacity = '1';
    }
})

three.addEventListener('mouseenter', () => {
    three.style.opacity = '0.7';
})
three.addEventListener('mouseleave', () => {
    if (countImg !== 2) {
        three.style.opacity = '1';
    }
})

four.addEventListener('mouseenter', () => {
    four.style.opacity = '0.7';
})
four.addEventListener('mouseleave', () => {
    if (countImg !== 3) {
        four.style.opacity = '1';
    }
})



Cart.forEach((e) => {
    e.addEventListener('click', () => {
        if (e.src.includes('/images/icon-minus.svg')) {
            if (cartTotal > 0) {
                cartTotal--;
                cartNumber.innerHTML = cartTotal;
                count.innerHTML = cartTotal;
            }
        }
        else {
            cartTotal++;
            cartNumber.innerHTML = cartTotal;
            count.innerHTML = cartTotal;
        }
        cartTotalNum();

    })
})


function cartTotalNum() {
    if (cartTotal >= 1) {
        cartTiTle.innerHTML = `Fall Limited Edition Sneakers $125 x ${cartTotal}`
        total.innerHTML = `$ ${125 * cartTotal}.00`;
        list.style.display = 'flex';
        checkoutBtn.style.display = 'block';
        empty.style.display = 'none'
    }
    else {
        empty.style.display = 'block'
        list.style.display = 'none';
        checkoutBtn.style.display = 'none';
    }
}

addToCart.addEventListener('click', () => {
    cartTotal++;
    cartNumber.innerHTML = cartTotal;
    cartTotalNum();
    count.innerHTML = cartTotal;
})

cartBtn.addEventListener('click', () => {
    if (displayCart.style.display === 'flex') {
        displayCart.style.display = 'none';
    }
    else {
        displayCart.style.display = 'flex';
    }
})

count.addEventListener('click', () => {
    if (displayCart.style.display === 'flex') {
        displayCart.style.display = 'none';
    }
    else {
        displayCart.style.display = 'flex';
    }
})

deleteBtn.addEventListener('click', () => {
    cartTotal = 0
    count.innerHTML = cartTotal;
    cartNumber.innerHTML = cartTotal;
    empty.style.display = 'block'
    list.style.display = 'none';
    checkoutBtn.style.display = 'none';
})