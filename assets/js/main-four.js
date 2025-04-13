document.addEventListener("DOMContentLoaded", () => {

    const temas = [
        "GIRASOL", "CLAVEL", "BUGAMBILIA", "ALCATRAZ", "AZUCENA", "AMAPOLA", "DALIA", "MANZANILLA", "AHUEHUETE",
        "ROBLE", "FRESNO", "CEDRO", "PINO", "MAGUEY", "ALBAHACA", "CAMELIA", "BEGONIA", "ROMERO", "DIENTE DE LEÓN"
    ];
       
    const list = document.getElementById("list-four");

    temas.forEach((tema, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${tema}`;
        list.appendChild(listItem);
    });
});