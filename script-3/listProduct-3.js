import { armasCortas } from "./products-3.js";

export const listProducts = () => {
    console.log("lista de productos carga");

    const table = document.getElementById("fusilesAsalto-table-events");

    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    armasCortas.forEach(item => {
        const row = table.insertRow();

        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);

        cell1.innerHTML = item.nombre;
        cell2.innerHTML = item.balas;
        cell3.innerHTML = item.precio;

        const editButton = document.createElement("button");
        editButton.innerText = "EDITAR";
        editButton.classList.add("edit-button");
        editButton.addEventListener("click", () => {
            const rowIndex = row.rowIndex - 1;
        if (rowIndex >= 0 && rowIndex < armasCortas.length) {
        const productToEdit = armasCortas[rowIndex];

        
        const editedName = prompt("Editar nombre:", productToEdit.nombre);
        const editedAmmo = prompt("Editar balas:", productToEdit.balas);
        const editedPrice = prompt("Editar precio:", productToEdit.precio);

        if (editedName !== null && editedAmmo !== null && editedPrice !== null) {
            
            armasCortas[rowIndex] = {
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

        cell4.appendChild(editButton);

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "BORRAR";
        deleteButton.addEventListener("click", () => {
            console.log("Botón BORRAR presionado");
            const deleteRow = deleteButton.closest('tr');
            const rowIndex = deleteRow.rowIndex - 1; 
            if (rowIndex >= 0 && rowIndex < armasCortas.length) {
                
                armasCortas.splice(rowIndex, 1);
                deleteRow.remove();
            } else {
                console.log("Índice fuera de rango o producto no encontrado");
            }
        });
        
        cell4.appendChild(deleteButton);
        
    });
}