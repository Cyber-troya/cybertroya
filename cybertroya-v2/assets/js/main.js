// Funcionalidad del menú desplegable
// Se selecciona el botón de menú y el menú desplegable utilizando querySelector
// Se agrega un evento de clic al botón de menú para alternar la clase "active" en el menú desplegable
// Se crea un array de los temas
// Se selecciona el elemento de lista en el DOM donde se agregarán los temas
// Se itera sobre el array de temas y se crean elementos de lista para cada tema
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    const temas = [
        "ANIMALES ACUATICOS", "ANIMALES DOMÉSTICOS", "ANIMALES SALVAJES", "ANIMALES DE ZOOLÓGICO", "LA FAMILIA",
        "CALENTAMIENTO DE LOS OCÉANOS", "DIA MUNDIAL DE LA SALUD", "INSTRUMENTOS DE LABORATORIO", "CIENCIA Y TECNOLOGÍA",
        "LAS ENFERMEDADES (BACTERIAS Y VIRUS)", "DONACIÓN Y TRASPLANTES DE ÓRGANOS", "HISTORIA DE LA MEDICINA",
        "HIGIENE BUCAL", "EL SIDA", "HIGIENE ESCOLAR", "DIA DEL MAESTRO", "DIA DEL NIÑO", "DERECHOS DE LOS NIÑOS",
        "LA PRIMAVERA", "REVOLUCIÓN MEXICANA", "NATALICIO DE BENITO JUÁREZ", "EXPROPIACIÓN PETROLERA",
        "ERECCIÓN DEL ESTADO DE MÉXICO", "NIÑOS HEROES", "TABLAS DE MULTIPLICAR", "ANIMALES INVERTEBRADOS",
        "ANIMALES EN PELIGRO DE EXTINCIÓN", "CULTURA MEXICA (AZTECAS - TENOCHTITLÁN)", "CULTURA OLMECA", "CULTURA ZAPOTECA",
        "FIGURAS GEOMÉTRICAS", "CULTURA TEOTIHUACANA", "MOVIMIENTO ESTUDIANTIL", "DESCUBRIMIENTO DE AMÉRICA",
        "EL AGUA Y SU CICLO", "PROFESIONES", "LA ALIMENTACIÓN", "LAS ADICCIONES", "DROGADICCIÓN Y DELINCUENCIA",
        "DIA DE MUERTOS", "APARATOS REPRODUCTORES", "HISTORIA DE LA BIOLOGÍA", "LA ONU", "INSTRUMENTOS MUSICALES",
        "EL CIRCO", "SOR JUANA INÉS DE LA CRUZ", "HISTORIA DEL CORREO", "SISTEMA NERVIOSO", "SISTEMA OSEO", "LAS AVES",
        "NAVIDAD, POSADAS Y REYES", "EL INVIERNO", "LOS DINOSAURIOS", "EL AIRE", "PLATO DEL BIEN COMER", "APARATO DIGESTIVO",
        "VALORES ÉTICOS, CÍVICOS Y MORALES", "INDEPENDENCIA DE MÉXICO", "LA EQUIDAD", "EL BULLYING", "EL MEDIO AMBIENTE",
        "LOS SÍMBOLOS PATRIOS", "LA JARRA DEL BUEN BEBER", "TRADICIONES MEXICANAS", "PRIMERA GUERRA MUNDIAL",
        "HIGIENE PERSONAL", "EL EMBARAZO", "PERSONAJES DE LA REVOLUCIÓN MÉXICANA", "LAS CUATRO ESTACIONES DEL AÑO",
        "LOS MAMÍFEROS", "PLANTAS MEDICINALES", "REPTILES Y ANFIBIOS", "ECOSISTEMAS (BIODIVERSIDAD)", "PRESIDENTES DE MÉXICO",
        "OVIPAROS Y VIVIPAROS", "DÍA MUNDIAL DEL MEDIO AMBIENTE", "PARTIDOS POLÍTICOS", "CULTURA CHICHIMECA",
        "EL RECICLAJE", "LEYES DE REFORMA", "CÁNCER DE SENO", "EL CÁNCER", "ENFERMEDADES DE TRANSMISIÓN SEXUAL",
        "DIA DEL AMOR Y LA AMISTAD", "LOS SENTIDOS", "LOS PLANETAS", "ARTES Y OFICIOS", "TIPOS DE ENERGÍA", "TIPOS DE SUELO",
        "LOS TRANSPORTES", "LAS BELLAS ARTES", "COMUNIDAD RURAL Y URBANA", "CULTURA MAYA", "SISTEMA MUSCULAR",
        "SISTEMA NERVIOSO", "APARATO CIRCULATORIO", "CUERPO HUMANO", "DERECHOS HUMANOS", "REVOLUCIÓN FRANCESA",
        "CULTURA MIXTECA", "TABAQUISMO", "CULTURA TOLTECA", "EL ALCOHOLISMO", "LA SEXUALIDAD", "LA CÉLULA",
        "LOS DEPORTES", "HIMNO NACIONAL MEXICANO", "EL ESCUDO NACIONAL", "DÍA DE LA BANDERA", "EL ESCUDO DEL ESTADO DE MÉXICO",
        "SERVIDORES PÚBLICOS", "LA ILUSTRACIÓN", "COVID-19", "LOS PUEBLOS INDÍGENAS", "EL APARATO RESPIRATORIO",
        "CRISTOBAL COLON", "BANDERAS DE AMÉRICA", "EL SISTEMA SOLAR", "EL APARATO LOCOMOTOR", "LA CONQUISTA DE MÉXICO",
        "EL MICROSCOPIO", "LAS 7 MARAVILLAS DEL MUNDO", "ACTIVIDADES ECONÓMICAS", "DESASTRES NATURALES", "LA NUEVA ESPAÑA",
        "COMUNICACIONES MODERNAS", "FORMAS DE LENGUAJE", "EVOLUCIÓN DEL HOMBRE", "HISTORIA DE LA COMPUTADORA",
        "DERECHO DE LOS NIÑOS", "CLIMAS DE MÉXICO Y EL MUNDO", "FRUTAS Y VERDURAS", "DIVERSIDAD CULTURAL EN MÉXICO",
        "INSECTOS", "ECOLOGÍA (ECOSISTEMA)", "LA EDAD MEDIA", "ANIMALES VERTEBRADOS", "CARNÍVOROS Y HERBÍVOROS",
        "EL VIRREINATO", "GRUPOS ÉTNICOS", "BATALLA DE PUEBLA - 5 DE MAYO", "DESORDEN ALIMENTICIO - COMIDA CHATARRA",
        "EL PORFIRIATO", "EL AGUA Y SU CONTAMINACIÓN", "MARIPOSA MONARCA", "CONTAMINACIÓN", "SEXUALIDAD (PUBERTAD)",
        "CULTURA ROMANA", "MESOAMÉRICA Y SUS CULTURAS PREHISPANICAS", "LOS ANTICONCEPTIVOS", "EQUIDAD DE GENERÓ E IGUALDAD",
        "LAS ESTRELLAS", "CUIDADO DEL AGUA", "RELLENAR", "RELLENAR", "RELLENAR", "RELLENAR", "RELLENAR", "RELLENAR",
        "RELLENAR", "RELLENAR", "RELLENAR", "RELLENAR"
    ];

    const list = document.getElementById("list");

    temas.forEach((tema, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${tema}`;
        list.appendChild(listItem);
    });
});

// Funcio botones
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".buttons button").forEach(button => {
        const text = button.textContent.toLowerCase(); // Obtener el texto del botón
        const anchor = document.createElement("a");

        // Definir las rutas de los archivos HTML
        const routes = {
            "precios": "precios.html",
            "faltantes": "faltantes.html",
            "volver": "index.html"
        };

        anchor.href = routes[text] || "#"; // Asignar la ruta correspondiente
        anchor.textContent = button.textContent; // Mantener el mismo texto
        anchor.style.textDecoration = "none";
        anchor.style.color = "inherit";

        // Aplicar estilos de botón al enlace
        anchor.style.display = "inline-block";
        anchor.style.padding = "10px 20px";
        anchor.style.fontFamily = "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";
        anchor.style.border = "none";
        anchor.style.backgroundColor = "var(--back-content)";
        anchor.style.color = "var(--background-secondary)";
        anchor.style.fontSize = "17px";
        anchor.style.borderRadius = "5px";
        anchor.style.cursor = "pointer";
        anchor.style.transition = "background-color 0.4s, transform 0.2s ease-in";
        anchor.style.textAlign = "center";
        anchor.style.fontWeight = "bold";

        // Efecto hover
        anchor.addEventListener("mouseover", function () {
            anchor.style.backgroundColor = "var(--hover)";
            anchor.style.transform = "translateY(3px)";
            anchor.style.boxShadow = "box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;";
        });

        anchor.addEventListener("mouseout", function () {
            anchor.style.backgroundColor = "var(--back-content)";
            anchor.style.transform = "translateY(0px)";
            anchor.style.boxShadow = "none";
        });

        button.replaceWith(anchor); // Reemplazar el botón con el enlace
    });
});

