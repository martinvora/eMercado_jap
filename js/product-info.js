var commentArray = [];

// pone nombre de usuario en la ventana de "dejar comentarios"

function nombreEnComentario() {
    let usuario = JSON.parse(localStorage.getItem("usuario"));
    let nombre_ = document.getElementById('nombre_');
    
    
    
    nombre_.innerHTML= `<i  style="color: black" class="fas fa-user"> ${usuario.nombre}  ` ;
    
    
    
    
    };

function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100 ">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
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


function califico(){


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
            showImagesGallery(product.images);
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

document.getElementById("agregar").addEventListener("click", () => {
    //cuando hago click en "Agregar"

    let comentario = []; //Creo una variable de objeto llamada "persona"

     comentario.nombre = JSON.parse(localStorage.getItem("usuario")); //Obtengo el contenido del text "nombre"
     comentario.opinion = parseInt(document.getElementById("opinion").value);
      
     if (comentario.opinion.trim() == "") {
        alert("Nombre en blanco");
    } else {
      commentArray.push(comentario);
    }

});

