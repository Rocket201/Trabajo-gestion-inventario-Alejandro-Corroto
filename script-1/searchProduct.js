import { fusiles } from "./products.js";

export function searchProduct(searchInput) {
    const table = document.getElementById("fusilesAsalto-table-events");
    const tbody = table.querySelector("tbody");

    tbody.innerHTML = "";

    // Filtra el arma basándose en la entrada del input
    const results = fusiles.filter(product => product.nombre.toLowerCase().includes(searchInput.toLowerCase()));

    if (results.length > 0) {
        // Si se encuentran resultados, itera a través de ellos creando filas
        results.forEach(product => {
            const row = table.insertRow();
            // Crea celdas para mostrar el nombre, balas y precio del arma
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

                // Obtiene la fila que contiene el botón "BORRAR"
                const deleteRow = deleteButton.closest('tr');
                const rowIndex = deleteRow.rowIndex - 1;
                // Pregunta al usuario si está seguro de borrar el arma
                if (confirm("¿Estás seguro de que deseas borrar esta arma?")) {
                    // Elimina el arma de la lista y la fila de la tabla
                    fusiles.splice(fusiles.indexOf(results[rowIndex]), 1);
                    deleteRow.remove();
                } else {
                    console.log("Arma no encontrado");
                }
            });

            // Creo una celda para los botones de "BORRAR"
            const cellActions = row.insertCell(3);
            cellActions.appendChild(deleteButton);
        });
    } else {

        // Si no se encontraron resultados, muestra un mensaje
        const noResultsRow = table.insertRow();
        const noResultsCell = noResultsRow.insertCell(0);
        noResultsCell.colSpan = 4;
        noResultsCell.textContent = "No tienes esta arma en tu inventario.";
    }
}
