if (document.readyState === 'loading') {
    document.addEventListener('DomContendLoaded', ready())
}
else {
    ready()
}
function ready() {
    let CartRemoveBtns = document.querySelectorAll('.cart-remove')
    let cartBox = document.querySelector('.cart-box')
    console.log(CartRemoveBtns);
    CartRemoveBtns.forEach(btn => {
        btn.addEventListener('click', removeItem)
    })
    let Quantidy_inputs = document.querySelector('.cart-quantidy')
    for (let i = 0; i < Quantidy_inputs.length; i++) {
        let inputs = Quantidy_inputs[i]
        console.log(inputs);
        inputs.addEventListener('change', QuantidyChange)
        UbdateCartTotal()
    }
    let Addcarts = document.querySelectorAll('.addToCart')
    for (let i = 0; i < Addcarts.length; i++) {
        let addButons = Addcarts[i]
        addButons.addEventListener('click', addCartCliced)
    }

}
function addCartCliced(event) {
    let button = event.target
    let proContainer = button.parentElement.parentElement
    console.log(proContainer);
    let proImage = document.querySelector('.pro-image')
    console.log(proImage);

}

function QuantidyChange(event) {
    let inputs = event.target
    if (isNaN(inputs.value) || inputs.value <= 0) {
        inputs.value = 1
    }
    UbdateCartTotal()
}
function removeItem(event) {
    RemoveBtn = event.target
    console.log(RemoveBtn);
    RemoveBtn.parentElement.remove()
    UbdateCartTotal()
}
// add events

function UbdateCartTotal() {
    let cartMains = document.querySelector('.car1')
    let Cart_Content = document.querySelectorAll('.cart-content')
    let total = 0
    for (let i = 0; i < Cart_Content.length; i++) {
        let contentCards = Cart_Content[i]
        console.log(contentCards);
        let priceElement = contentCards.querySelector('.cart-price');
        console.log(priceElement);
        let Quantidy_element = contentCards.querySelector('.cart-quantidy')
        console.log(Quantidy_element);
        price = parseFloat(priceElement.innerText)
        console.log(price);
        quantidy = Quantidy_element.value
        console.log(quantidy);
        total = total + (price * quantidy)
        console.log(total);
    }
    let TotalPrice = document.querySelector('.total-price')
    TotalPrice.innerText = "$" + total
}