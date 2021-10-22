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
        <div class="amount" >$${product.unitCost}<h3 class="subtitle">${product.currency}</h3></div>
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
