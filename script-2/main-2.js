import { addProduct } from "./addproduct-2.js";
import { listProducts } from "./listProduct-2.js" 
import { searchProduct } from "./searchProduct-2.js";


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

