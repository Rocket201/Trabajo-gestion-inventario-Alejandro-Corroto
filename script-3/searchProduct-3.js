import {armasCortas } from "./products-3.js";
import { listProducts } from "./listProduct-3.js";

export function searchProduct(searchInput) {
    const table = document.getElementById("fusilesAsalto-table-events");
    const tbody = table.querySelector("tbody");
    tbody.innerHTML = ""; 

    const results =armasCortas.filter(product => product.nombre.toLowerCase().includes(searchInput.toLowerCase()));

    if (results.length > 0) {
        results.forEach( product => {
            const row = table.insertRow();
            
            const cellName = row.insertCell(0);
            cellName.innerHTML = product.nombre;

            const cellAmmo = row.insertCell(1);
            cellAmmo.innerHTML = product.balas;

            const cellPrice = row.insertCell(2);
            cellPrice.innerHTML = product.precio;

            const editButton = document.createElement("button");
            editButton.innerText = "EDITAR";
            editButton.classList.add("edit-button");
            editButton.addEventListener("click", () => {
                const rowIndex = row.rowIndex - 1;
                if (rowIndex >= 0 && rowIndex < results.length) {
                    const productToEdit = results[rowIndex];

                    const editedName = prompt("Editar nombre:", productToEdit.nombre);
                    const editedAmmo = prompt("Editar balas:", productToEdit.balas);
                    const editedPrice = prompt("Editar precio:", productToEdit.precio);

                    if (editedName !== null && editedAmmo !== null && editedPrice !== null) {
                        results[rowIndex] = {
                            ...productToEdit,
                            nombre: editedName,
                            balas: parseInt(editedAmmo),
                            precio: parseFloat(editedPrice)
                        };
                        listProducts();
                    }
                } else {
                    console.log("Índice fuera de rango o producto no encontrado");
                }
            });

            const deleteButton = document.createElement("button");
            deleteButton.innerText = "BORRAR";
            deleteButton.addEventListener("click", () => {
                console.log("Botón BORRAR presionado");
                const deleteRow = deleteButton.closest('tr');
                const rowIndex = deleteRow.rowIndex - 1;
                if (confirm("¿Estás seguro de que deseas borrar este producto?")) {
                    results.splice(rowIndex, 1);
                    deleteRow.remove();
                } else {
                    console.log("Índice fuera de rango o producto no encontrado");
                }
            });
            
            const cellActions = row.insertCell(3);
            cellActions.appendChild(editButton);
            cellActions.appendChild(deleteButton);
        });
    } else {
        const noResultsRow = table.insertRow();
        const noResultsCell = noResultsRow.insertCell(0);
        noResultsCell.colSpan = 4;
        noResultsCell.textContent = "No se encontraron resultados.";
    }
}