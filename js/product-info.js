var commentArray = [];
var productsArray = [];
let related = [];

// pone nombre de usuario en la ventana de "dejar comentarios"

function nombreEnComentario() {
    let usuario = JSON.parse(localStorage.getItem("usuario"));
    let nombre_ = document.getElementById('nombre_');
    
    
    
    nombre_.innerHTML= `<i  style="color: black" class="fas fa-user"> ${usuario.nombre}  ` ;
     
    
    };

 function showCarousel(array){
     
    var slides="";
    var i = 0 ;
    array.forEach(elemento=> {          

        if (i==0){
            slides+= "<div class='carousel-item active'>  <img class='img-fluid'  src=" +elemento+" alt='"+elemento+ "' width=700 height=2000> </div>";
            } else{
        slides+= "<div class='carousel-item '>  <img class='img-fluid'  src=" +elemento+" alt='"+elemento+ "' width=700 height=2000> </div>";
        }
        i++;
     });
    document.getElementById('slides').innerHTML=slides; 



 }   



function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend += ` <div id="myModal" class="modal">
        <span class="close">&times;</span>
        <img class="modal-content" id="img01">
        <div id="caption"></div>
      </div>
        <div class="col-lg-3 col-md-4 col-6">
        
            <div class="d-block mb-4 h-100 ">
                <img id="myImg" style="width:100%;max-width:300px" src="` + imageSrc + `" alt="">
                

            </div>
        </div>
        
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}
function showComment(array){

    let htmlContentToAppend = "";
    for(let i = 0; i <   array.length; i++){
        let data = array[i];

        htmlContentToAppend +=`
        
        <div style ="margin: 20px"class="card text-center">
        <div class="card-header"> <i  style="color: black" class="fas fa-user"></i> ${data.user}  </div>
        <div class="card-body">
        <h5 class="card-title">${data.description}</h5> </div>`

        let estrellas = "";
        let num = array[i].score;
        for (let i = 1; i <= 5; i++) {
            if (i<=num){
                estrellas +=`<i class="fas fa-star"> </i>`;

            } else{
                estrellas +=`<i class="far fa-star"></i>`;
            }

        } htmlContentToAppend += `<div> ${estrellas} </div>   

       
       
      
      <div class="card-footer text-muted">
      ${data.dateTime}
      </div>
        </div>
       
        `
        
        
       

        document.getElementById("comentarios").innerHTML = htmlContentToAppend; 
    }
}

function formatearHora()  {
    var hoy = new Date();
    var yyyy = hoy.getFullYear();
    var mm =  hoy.getMonth() + 1;
    var dd =  hoy.getDate();
    var hrs = hoy.getHours();
    var min = hoy.getMinutes();
    var sec = hoy.getSeconds();hoy
    if (mm < 10) {
        mm = '0' + mm;
        }
    
    if (dd < 10) {
        dd = '0' + dd;
        }

    if (hrs < 10) {
        hrs = '0' + hrs;
        }
    
    if (min < 10) {
        min = '0' + min;
        }    

    if (sec < 10) {
        sec = '0' + sec;
        }    
    
    hoy = yyyy + `-` + mm + `-` + dd + ` ` + hrs + `:` + min + `:` + sec;
    return hoy;
}


//Muestra los productos relaciónados

function relatedProducts() {
    getJSONData(PRODUCT_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            related = resultObj.data;
            productRelated = related.relatedProducts; 
            console.log(productRelated);
            let htmlContentToAppend = ``;
            getJSONData(PRODUCTS_URL).then(function (resultObjs) {
                if (resultObjs.status === "ok") {
                   
                    prod = resultObjs.data; 
                    console.log(prod);
                   let producto = prod.name
                    console.log(producto);
                    for (let indice of productRelated) {
                        console.log(prod[indice]);
                        htmlContentToAppend += `
                        <div class="card w-45 justify-content col-2>
                        <div class="card col-sm-5 pb-3">
                        <img class="card-img-top" src="${prod[indice].imgSrc}" alt="Card image cap">                           
                            <div class="card-body d-flex flex-column text-center pt-6">                             
                                <h2 class="card-title">${prod[indice].name}</h2>
                                <p class="card-text text-justify">${prod[indice].description}</p>
                                <a href="#" class="btn btn-outline-secondary mt-auto">Ver producto</a>
                            </div>                        
                        </div>
                      </div>
                     
                            `;
                        }
                        document.getElementById("prod-list-container1").innerHTML = htmlContentToAppend;
                    }                                                  
                });
            };
        });
    }
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            product = resultObj.data;

            let productNameHTML  = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let productCostHTML = document.getElementById("productCost");
            let productCategoryHTML = document.getElementById("productCategory");
            let productSoldCountHTML = document.getElementById("productSoldCount");
        
            productNameHTML.innerHTML = product.name;
            productDescriptionHTML.innerHTML = product.description;
            productCostHTML.innerHTML = `USD`+" $"+product.cost;
            productCategoryHTML.innerHTML = product.category;
            productSoldCountHTML.innerHTML = product.soldCount;

            //Muestro las imagenes en forma de galería 
            //Muestro carousel
            //Muestro y los productos related
            showImagesGallery(product.images);
            showCarousel(product.images);
            relatedProducts();
        }
    });
});

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            commentArray = resultObj.data;
            //Muestro los comentarios
            showComment(commentArray);
            nombreEnComentario();  
            
           
        }
      
    });
});

//





//
document.getElementById("agregar").addEventListener("click", () => {
    //cuando hago click en "Agregar"
    
    let comentario = {}; //Creo una variable de objeto llamada "comentario"
    
    // Preguntar en la clase de consulta    sobre la siguiente linea comentada para aclarar dudar 
    //comentario.user = localStorage.getItem('usuario');                
     comentario.user = document.getElementById("nombre").textContent
     comentario.description = document.getElementById("opinion").value; //Obtengo el contenido del text "nombre"
     comentario.score = document.getElementById("cant").value
     comentario.dateTime = formatearHora();
        
     if (comentario.description.trim() == "") {
        alert("Comentario vacio");
    } else {
        commentArray.push(comentario);
    }
    showComment(commentArray);//Mostramos la lista.
    
  }); 


