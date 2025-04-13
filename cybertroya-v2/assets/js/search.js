// Funcionalidad de búsqueda
// Se selecciona el botón de búsqueda y el campo de texto utilizando querySelector
// Se utiliza el método trim() para eliminar espacios en blanco al principio y al final del texto ingresado por el usuario
function search() {
    var query = document.getElementById("searchQuery").value.trim().toLowerCase();
    var listItems = document.querySelectorAll("li");

    if (query !== "") {
        let matches = [];

        listItems.forEach((item) => {
            var text = item.textContent.toLowerCase();
            if (text.includes(query)) {
                matches.push(item.textContent); // Solo se guarda el contenido del <li>
            }
        });

        if (matches.length > 0) {
            Swal.fire({
                title: "Resultados de la búsqueda",
                html: matches.join("<br>"),
                icon: "success",
                confirmButtonText: "Aceptar",
                confirmButtonColor: "#007bff",
                background: "#f8f9fa",
                color: "#333",
                iconColor: "#007bff"
            });
        } else {
            Swal.fire({
                title: "Sin resultados",
                text: "No se encontraron coincidencias.",
                icon: "warning",
                confirmButtonText: "Aceptar",
                confirmButtonColor: "#007bff",
                background: "#f8f9fa",
                color: "#333",
                iconColor: "#007bff"
            });
        }
    } else {
        Swal.fire({
            title: "Campo vacío",
            text: "Por favor, ingresa un término de búsqueda.",
            icon: "error",
            confirmButtonText: "Aceptar",
            confirmButtonColor: "#007bff",
            background: "#f8f9fa",
            color: "#333",
            iconColor: "#007bff"
        });
    }

    document.getElementById("searchQuery").value = ""; // Limpiar el campo de búsqueda
}

document.getElementById("searchQuery").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        search();
    }
});