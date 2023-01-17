let cart = []

function addToCart(title, price) {
cart.push({productTitle: title, ProductPrice: price, productQuantity: 1})

console.log(cart)
//Etter å ha lgt inn et produkt oppdater handlelistevisning:
renderCart()
//
document.querySelector("#cart .label").innerHTML = cart.length
}

function renderCart(){
    //Tom variabel for å bygge HTML til produkter
    let listHTML =""
    //Gå gjennom cart-arrayen, lag <li> for hvert produkt
    cart.map(prod => listHTML += `<li>
    <span class="title">${prod.productTitle}</span>
    <span class="price">${prod.ProductPrice}</span>
    <span class="quantity">${prod.productQuantity}</span>
    <button class="delete">X</button>
</li>`)

//Bruke en selector for å finne riktig <ul>, og skrive inn listHTML:

document.querySelector("#cartview ul").innerHTML = listHTML


}

function toggleCart() {
    document.querySelector("#cartview").classList.toggle("hidden")
}