import {armasCortas } from "./products-3.js";


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

            const deleteButton = document.createElement("button");
            deleteButton.innerText = "BORRAR";
            deleteButton.addEventListener("click", () => {
                console.log("Botón BORRAR presionado");
                const deleteRow = deleteButton.closest('tr');
                const rowIndex = deleteRow.rowIndex - 1;
                if (confirm("¿Estás seguro de que deseas borrar esta arma?")) {
                    results.splice(rowIndex, 1);
                    deleteRow.remove();
                } else {
                    console.log("Índice fuera de rango o arma no encontrado");
                }
            });
            
            const cellActions = row.insertCell(3);
            
            cellActions.appendChild(deleteButton);
        });
    } else {
        const noResultsRow = table.insertRow();
        const noResultsCell = noResultsRow.insertCell(0);
        noResultsCell.colSpan = 4;
        noResultsCell.textContent = "No tienes esta arma en tu inventario.";
    }
}