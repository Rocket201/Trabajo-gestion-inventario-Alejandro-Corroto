/**
 * Autor: Alejandro González Corroto Fernández
 * GitHub: https://github.com/Rocket201/Trabajo-gestion-inventario-Alejandro-Corroto.git
 */

import { addProduct } from "./addproduct.js";
import { listProducts } from "./listProduct.js" 
import { searchProduct } from "./searchProduct.js";

console.log("js,main carga")
document.addEventListener("DOMContentLoaded", listProducts);


document.addEventListener("DOMContentLoaded", listProducts) 

document.addEventListener("DOMContentLoaded", ()=>{

    const btnForm = document.getElementById("product-form-events")

    btnForm.addEventListener("click", ()=>{
        console.log("btnAñadir")
        addProduct();
    })
    
})

    document.addEventListener("DOMContentLoaded", () => {
    
    const searchButton = document.getElementById("search-button");
    searchButton.addEventListener("click", () => {
        const searchInput = document.getElementById("search-product").value;
        searchProduct(searchInput);
    })
})

