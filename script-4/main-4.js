import { addProduct } from "./addproduct-4.js";
import { listProducts } from "./listProduct-4.js" 
import { searchProduct } from "./searchProduct-4.js";


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

