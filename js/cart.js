var dataProduct = {};
const CART_LIST_URL = "https://japdevdep.github.io/ecommerce-api/cart/987.json";






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
      </div>
      <div class="counter">
        <div class="btn1">+</div>
        <div class="count">${product.count}</div>
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

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()