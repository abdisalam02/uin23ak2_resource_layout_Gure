const cartview = document.getElementById("cartview")
const cartv = document.getElementsByClassName("hidden")
let total = document.getElementById("total")
const price = document.getElementsByClassName("price")

let cart = []

function addToCart(title, price) {
cart.push({productTitle: title, ProductPrice: price, productQuantity: 1})
   document.querySelector("#cartview").classList.remove("hidden")
console.log(cart)


//Etter å ha lgt inn et produkt oppdater handlelistevisning:
// cartview.style.display = "block"
renderCart()
// if(cartview.classList.contains("hidden")){
    // }
    document.querySelector("#cart .label").innerHTML = cart.length
}

function renderCart(){
    //Tom variabel for å bygge HTML til produkter
    let listHTML =""
    //Gå gjennom cart-arrayen, lag <li> for hvert produkt
    cart.map((prod, index) => listHTML += `<li id="prod-${index}">
    <span class="title">${prod.productTitle}</span>
    <span class="price">${prod.ProductPrice}</span>
    <span class="quantity">${prod.productQuantity}</span>
    <button class="delete" onClick="deleteProd(${index})">X</button>
</li>`)

//Bruke en selector for å finne riktig <ul>, og skrive inn listHTML:
document.querySelector("#cartview ul").innerHTML = listHTML

let totalprice = 0

cart.map(ttl => totalprice += ttl.ProductPrice )
document.querySelector("#total").innerHTML = totalprice







}

function deleteProd(index){
    document.getElementById("prod-"+index).classList.add("hidden")
    setTimeout(()=>{
        cart.splice(index, 1)
        renderCart()
    }, 700)
    console.log("delete")
}

function toggleCart() {
    document.querySelector("#cartview").classList.toggle("hidden")
}


// function addMulla(){
//     // total.innerHTML = cart.price + cart.price

//     cart.map((i) =>total.innerHTML = cart.ProductPrice1        
//     )

// }

