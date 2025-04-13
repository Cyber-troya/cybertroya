document.addEventListener("DOMContentLoaded", () => {
    
    const temas = [
        "MANGO", "MANZANA", "FRESA", "MAIZ", "BETABEL (REMOLACHA)", "NOPAL", "AGUACATE", "LIMÓN", "TOMATE",
        "CAFE", "PIÑA", "COLIFLOR", "CALABAZA", "PAPAYA", "SANDIA", "CACAHUATE", "HONGOS", "HIERBABUENA", "CEREZA",
        "RÁBANO", "JITOMATE", "ZANAHORIA", "PEPINO", "CEBOLLA", "PAPA"
    ];        

    const list = document.getElementById("list-five");

    temas.forEach((tema, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${tema}`;
        list.appendChild(listItem);
    });
});