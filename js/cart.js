var dataProduct = {};
const CART_LIST_URL = "https://japdevdep.github.io/ecommerce-api/cart/654.json";






//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.


function showCart(array) {
    
    let htmlContentToAppend = "";    
    for (let i = 0; i < array.length; i++) {
        let product = array[i];
        htmlContentToAppend += `     <div class="Cart-Items">     <div class="image-box">
        <img src="${product.src}" height="120px" />
      </div>
      <div class="about">
        <h1 class="title">${product.name}</h1>
        <h3 class="subtitle">Stock:${product.count}</h3>
        <img src="img/veg.png"  height="30px"/>
      </div>
      <div class="counter">
        <div class="btn1">+</div>
        <div class="count">2</div>
        <div class="btn1">-</div>
      </div>
      <div class="prices">
        <div class="amount">$${product.unitCost}<h3 class="subtitle">${product.currency}</h3></div>
        <div class="remove"><u>Quitar</u></div>
      </div>
          </div>
        `
    }
    document.getElementById("cart-list-container").innerHTML = htmlContentToAppend;
}

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_LIST_URL).then(function(resultObj){
        if (resultObj.status === "ok") {
            let cart = resultObj.data;
            showCart(cart.articles);

            
        }
    })
});
/*
<div class="Header">
      <h3 class="Heading">E-Carrito</h3>
      <h5 class="Action">Quitar todo</h5>
    </div>

    <div class="Cart-Items">
        <div class="image-box">
          <img src="img/apple.png" height="120px" />
        </div>
        <div class="about">
          <h1 class="title">Apple Juice</h1>
          <h3 class="subtitle">250ml</h3>
          <img src="img/veg.png"  height="30px"/>
        </div>
        <div class="counter">
          <div class="btn1">+</div>
          <div class="count">2</div>
          <div class="btn1">-</div>
        </div>
        <div class="prices">
          <div class="amount">$2.99</div>
          <div class="remove"><u>Quitar</u></div>
        </div>
    </div>

    <div class="Cart-Items pad">
        <div class="image-box">
          <img src="img/grapes.png"  height="120px" />
        </div>
        <div class="about">
          <h1 class="title">Grapes Juice</h1>
          <h3 class="subtitle">250ml</h3>
          <img src="img/veg.png"  height="30px"/>
        </div>
        <div class="counter">
          <div class="btn1">+</div>
          <div class="count">1</div>
          <div class="btn1">-</div>
        </div>
        <div class="prices">
          <div class="amount">$3.19</div>
          <div class="remove"><u>Quitar</u></div>
        
        </div>
    </div>
  <hr> 
  <div class="checkout">
  <div class="total">
    <div>
      <div class="Subtotal">Sub-Total</div>
      <div class="items">2 Articulos</div>
    </div>
    <div class="total-amount">$6.18</div>
  </div>
  <button class="button">Checkout</button></div>
    --></hr>*/