const  ORDER_ASC_BY_PRICE = "09";
const  ORDER_DESC_BY_PRICE = "90";
const  ORDER_BY_PROD_RELEV = "Relev.";
var currentSortCriteria = undefined;
var minCount = undefined;
var maxCount = undefined;
var productsArray = [];

function sortProducts(criteria, array){
    let result = [];
    if (criteria === ORDER_ASC_BY_PRICE)
    {
        result = array.sort(function(a, b) {
            if ( a.cost < b.cost ){ return -1; }
            if ( a.cost > b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_DESC_BY_PRICE){
        result = array.sort(function(a, b) {
            if ( a.cost > b.cost ){ return -1; }
            if ( a.cost < b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_BY_PROD_RELEV){
        result = array.sort(function(a, b) {
            let aCount = parseInt(a.soldCount);
            let bCount = parseInt(b.soldCount);

            if ( aCount > bCount ){ return -1; }
            if ( aCount < bCount ){ return 1; }
            return 0;
        });
    }

    return result;
}

function showProductsList(){

    let htmlContentToAppend = "";
    for(let i = 0; i < productsArray .length; i++){
        let products = productsArray[i];

        if (((minCount == undefined) || (minCount != undefined && parseInt(products.productCount) >= minCount)) &&
            ((maxCount == undefined) || (maxCount != undefined && parseInt(products.productCount) <= maxCount))){

        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + products.imgSrc + `" alt="` + products.description + `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">`+ products.name + ` U$S `+products.cost+ ` </h4>
                        <small class="text-muted">` + products.soldCount + ` Vendidos </small>
                        
                    </div>
                    <smaller h4 class="mb-1">` + products.description + `</h4>
                </div>
            </div>
        </div>
        `
            }
        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
    }
}


function sortAndShowCategories(sortCriteria, categoriesArray){
    currentSortCriteria = sortCriteria;

    if(categoriesArray != undefined){
        productsArray = categoriesArray;
    }

    productsArray = sortProducts(currentSortCriteria, productsArray);

    //Muestro las categorías ordenadas
    showProductsList();
}


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL ).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            productsArray = resultObj.data;
            //Muestro los productos ordenados
            showProductsList(productsArray);
        }
        
    });
    
    document.getElementById("sortAsc").addEventListener("click", function(){
        sortAndShowCategories(ORDER_ASC_BY_PRICE);
    });
    document.getElementById("sortDesc").addEventListener("click", function(){
        sortAndShowCategories(ORDER_DESC_BY_PRICE);
    });

    document.getElementById("sortByRelev").addEventListener("click", function(){
        sortAndShowCategories(ORDER_BY_PROD_RELEV);
    });

});