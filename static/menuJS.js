// console.log("here");
remButtons = document.getElementsByClassName('remove-btn');
for(let i = 0;i < remButtons.length;i++) {
    let btn = remButtons[i];
    btn.addEventListener('click', function(event) {
        let clickedButton = event.target;
        clickedButton.parentElement.parentElement.remove();
        updateCartTotal();
    })
}



let qtyInputs = document.getElementsByClassName('qty-input');
// console.log(qtyInputs);
for(let i = 0;i < qtyInputs.length;i++) {
    let input = qtyInputs[i];
    input.addEventListener('change',updateCartTotalAfterChangedQuantity);
}

function updateCartTotalAfterChangedQuantity(event) {
    let input = event.target;
    if(isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateCartTotal();
}

function updateCartTotal() {
    let cartItemPrices = document.getElementsByClassName('cart-item-price');
    let sum = 0;
    for(i = 0;i < cartItemPrices.length;i++) {
        let val = parseFloat(cartItemPrices[i].innerHTML.substring(2));
        let inpQty = qtyInputs[i].value;
        sum += val * inpQty;
        // console.log(sum);
    }
    sum = Math.round(sum * 100) / 100;
    document.getElementsByClassName('total-price')[0].innerHTML= "$ " + sum;
}

let addToCartButtons = document.getElementsByClassName('add-to-cart');
for(let i = 0;i < addToCartButtons.length;i++) {
    let addToCartButton = addToCartButtons[i];
    addToCartButton.addEventListener('click',addToCartButtonClicked);
}

function addToCartButtonClicked(event) {
    let button = event.target;
    let contentDiv = button.parentElement.parentElement.parentElement;
    let qtyDiv = button.parentElement.parentElement;
    let menuCardDiv = contentDiv.parentElement;

    let title = contentDiv.getElementsByTagName('h4')[0].innerHTML;
    let price = contentDiv.getElementsByTagName('span')[0].innerHTML;
    let quantity = qtyDiv.getElementsByTagName('input')[0].value;
    let imgSrc = menuCardDiv.getElementsByClassName('food-item')[0].src;
    addItemToCart(title,price,imgSrc,quantity);
    updateCartTotal();
}

function addItemToCart(title,price,imgSrc,quantity) {
    let cart = document.getElementsByClassName('cart-item-name');
    for (let index = 0; index < cart.length; index++) {
        const name = cart[index];
        if(name.innerText == title) {
            alert('This item is already in the cart.');
            return;
        }
    }
    let newItem = document.createElement('div');
    let newItemContents = `<div class="cart-item-img">
            <img src="${imgSrc}" alt="cart-item-img">
        </div>
        <div class="cart-item-info">
            <span class="cart-item-name">${title}</span> 
            <span class="cart-item-price">${price}</span> 
        </div>
        <div class="cart-qty qty"><input class="qty-input" id="qty" type="number" value="${quantity}" min="1" max="5"></div>
        <div class="remove-btn-div"> 
            <button class="remove-btn">Remove</button>
        </div>`;
    newItem.innerHTML = newItemContents;
    newItem.classList.add('cart-item');
    let cartBox = document.getElementsByClassName('cart-box')[0];
    cartBox.append(newItem);
    newItem.getElementsByClassName('remove-btn')[0].addEventListener('click', function(event) {
        let clickedButton = event.target;
        clickedButton.parentElement.parentElement.remove();
        updateCartTotal();
    });
    newItem.getElementsByClassName('qty-input')[0].addEventListener('change', updateCartTotalAfterChangedQuantity);
}

let payBtn = document.getElementById('pay-btn');
payBtn.addEventListener('click', () => {
    alert('Thank you for your purchase.');
    let cartBox = document.getElementsByClassName('cart-box')[0];
    while(cartBox.hasChildNodes()) {
        cartBox.removeChild(cartBox.firstChild);
    }
    updateCartTotal();
})