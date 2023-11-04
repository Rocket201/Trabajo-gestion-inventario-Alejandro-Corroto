import { listProducts } from "./listProduct.js";
import { fusiles } from "./products.js";


export const addProduct = ()=> {
    console.log("añadir producto funciona")

    const armaForm = document.getElementById("product-form-events");

    armaForm.addEventListener("submit", (event)=>{

        event.preventDefault()

        const productName = document.getElementById("product-name").value;
        const productAmmo= parseInt(document.getElementById("product-ammo").value);
        const productPrice = parseFloat(document.getElementById("product-price").value).toFixed(2);

        if( productName && !isNaN( productAmmo ) && !isNaN(productPrice) ){

            const newWeapon = {
                id: fusiles.length + 1,
                nombre: productName,
                balas: productAmmo,
                precio: productPrice,
            }

            fusiles.push(newWeapon);
            const clearTable = document.getElementById("clear-table")
            clearTable.innerHTML = "";
            armaForm.reset()

            listProducts()
        }
    });
}




