import { listProducts } from "./listProduct-3.js";
import { armasCortas} from "./products-3.js";


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
                id: armasCortas.length + 1,
                nombre: productName,
                balas: productAmmo,
                precio: productPrice,
            }

            armasCortas.push(newWeapon);
            const clearTable = document.getElementById("clear-table")
            clearTable.innerHTML = "";
            armaForm.reset()

            listProducts()
        }
    });
}




