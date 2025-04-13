document.addEventListener("DOMContentLoaded", () => {
    
    const temas = [
        "ABEJA", "AGUILA", "ALACRÁN", "ANGUILA", "ARMADILLO", "BALLENA AZUL", "BORREGO", "BUEY DOMESTICO (TORO)",
        "BURRO", "CABALLO", "CACHALOTE", "CAMARON", "CAMELLO", "CANGREJO", "CARACOL", "CARPA (PESCADO)", "GALLINA",
        "CATARINA", "GORILLA", "CERDO", "COYOTE", "ELEFANTE", "LEÓN", "POLLO", "RATA", "PÁJARO CARPINTERO", "PATO",
        "PERRO", "TUCAN", "LA VACA", "ZOPILOTE", "TIBURON", "PULPO", "GORRION", "PUNGUINO", "TARANTULA", "TORTUGA",
        "LOBO", "CASTOR", "VIBORA (SERPIENTE)", "GATO", "LECHUZA", "LORO", "FOCA", "GRILLO", "MOSCA", "CISNE",
        "MONO ARAÑA", "JABALÍ", "IGUANA", "MULA", "TIGRE", "AJOLOTE"
    ];     

    const list = document.getElementById("list-three");

    temas.forEach((tema, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${tema}`;
        list.appendChild(listItem);
    });
});