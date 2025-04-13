document.addEventListener("DOMContentLoaded", () => {

    const temas = [
        { nombre: "AGUASCALIENTES - $150.00", img: "https://64.media.tumblr.com/19dbce89d3e91131c4eaa3871d96d90f/67a62ff9321a0588-51/s540x810/98a0e87a48255c0db7ec646535b6725d15a54be1.jpg" },
        { nombre: "BAJA CALIFORNIA NORTE - $260.00", img: "https://64.media.tumblr.com/19dbce89d3e91131c4eaa3871d96d90f/67a62ff9321a0588-51/s540x810/98a0e87a48255c0db7ec646535b6725d15a54be1.jpg" },
        { nombre: "BAJA CALIFORNIA SUR - $240.00", img: "https://64.media.tumblr.com/19dbce89d3e91131c4eaa3871d96d90f/67a62ff9321a0588-51/s540x810/98a0e87a48255c0db7ec646535b6725d15a54be1.jpg" },
        { nombre: "CAMPECHE - $90.00", img: "https://64.media.tumblr.com/19dbce89d3e91131c4eaa3871d96d90f/67a62ff9321a0588-51/s540x810/98a0e87a48255c0db7ec646535b6725d15a54be1.jpg" },
        { nombre: "CDMX - $100.00", img: "https://64.media.tumblr.com/19dbce89d3e91131c4eaa3871d96d90f/67a62ff9321a0588-51/s540x810/98a0e87a48255c0db7ec646535b6725d15a54be1.jpg" },
        { nombre: "CHIAPAS - $180.00", img: "https://64.media.tumblr.com/19dbce89d3e91131c4eaa3871d96d90f/67a62ff9321a0588-51/s540x810/98a0e87a48255c0db7ec646535b6725d15a54be1.jpg" },
        { nombre: "CHIHUAHUA - $150.00", img: "https://64.media.tumblr.com/19dbce89d3e91131c4eaa3871d96d90f/67a62ff9321a0588-51/s540x810/98a0e87a48255c0db7ec646535b6725d15a54be1.jpg" },
        { nombre: "COAHUILA - $200.00", img: "https://64.media.tumblr.com/19dbce89d3e91131c4eaa3871d96d90f/67a62ff9321a0588-51/s540x810/98a0e87a48255c0db7ec646535b6725d15a54be1.jpg" },
        { nombre: "COLIMA - $120.00", img: "https://64.media.tumblr.com/19dbce89d3e91131c4eaa3871d96d90f/67a62ff9321a0588-51/s540x810/98a0e87a48255c0db7ec646535b6725d15a54be1.jpg" },
        { nombre: "DURANGO - $170.00", img: "https://64.media.tumblr.com/19dbce89d3e91131c4eaa3871d96d90f/67a62ff9321a0588-51/s540x810/98a0e87a48255c0db7ec646535b6725d15a54be1.jpg" },
        { nombre: "ESTADO DE MÉXICO - $90.00", img: "https://64.media.tumblr.com/19dbce89d3e91131c4eaa3871d96d90f/67a62ff9321a0588-51/s540x810/98a0e87a48255c0db7ec646535b6725d15a54be1.jpg" },
        { nombre: "GUANAJUATO - $120.00", img: "https://64.media.tumblr.com/19dbce89d3e91131c4eaa3871d96d90f/67a62ff9321a0588-51/s540x810/98a0e87a48255c0db7ec646535b6725d15a54be1.jpg" },
        { nombre: "GUERRERO - $130.00", img: "https://64.media.tumblr.com/19dbce89d3e91131c4eaa3871d96d90f/67a62ff9321a0588-51/s540x810/98a0e87a48255c0db7ec646535b6725d15a54be1.jpg" },
        { nombre: "HIDALGO - $150.00", img: "https://64.media.tumblr.com/19dbce89d3e91131c4eaa3871d96d90f/67a62ff9321a0588-51/s540x810/98a0e87a48255c0db7ec646535b6725d15a54be1.jpg" },
        { nombre: "JALISCO - $120.00", img: "https://64.media.tumblr.com/19dbce89d3e91131c4eaa3871d96d90f/67a62ff9321a0588-51/s540x810/98a0e87a48255c0db7ec646535b6725d15a54be1.jpg" },
        { nombre: "MICHOACÁN - $180.00", img: "https://64.media.tumblr.com/19dbce89d3e91131c4eaa3871d96d90f/67a62ff9321a0588-51/s540x810/98a0e87a48255c0db7ec646535b6725d15a54be1.jpg" },
        { nombre: "MORELOS - $120.00", img: "https://64.media.tumblr.com/19dbce89d3e91131c4eaa3871d96d90f/67a62ff9321a0588-51/s540x810/98a0e87a48255c0db7ec646535b6725d15a54be1.jpg" },
        { nombre: "NAYARIT - $90.00", img: "https://64.media.tumblr.com/19dbce89d3e91131c4eaa3871d96d90f/67a62ff9321a0588-51/s540x810/98a0e87a48255c0db7ec646535b6725d15a54be1.jpg" },
        { nombre: "NUEVO LEÓN - $90.00", img: "https://64.media.tumblr.com/19dbce89d3e91131c4eaa3871d96d90f/67a62ff9321a0588-51/s540x810/98a0e87a48255c0db7ec646535b6725d15a54be1.jpg" },
        { nombre: "OAXACA - $140.00", img: "https://64.media.tumblr.com/19dbce89d3e91131c4eaa3871d96d90f/67a62ff9321a0588-51/s540x810/98a0e87a48255c0db7ec646535b6725d15a54be1.jpg" },
        { nombre: "PUEBLA - $150.00", img: "https://64.media.tumblr.com/19dbce89d3e91131c4eaa3871d96d90f/67a62ff9321a0588-51/s540x810/98a0e87a48255c0db7ec646535b6725d15a54be1.jpg" },
        { nombre: "QUERÉTARO - $150.00", img: "https://64.media.tumblr.com/19dbce89d3e91131c4eaa3871d96d90f/67a62ff9321a0588-51/s540x810/98a0e87a48255c0db7ec646535b6725d15a54be1.jpg" },
        { nombre: "QUINTANA ROO - $90.00", img: "https://64.media.tumblr.com/19dbce89d3e91131c4eaa3871d96d90f/67a62ff9321a0588-51/s540x810/98a0e87a48255c0db7ec646535b6725d15a54be1.jpg" },
        { nombre: "SAN LUIS POTOSÍ - $140.00", img: "https://64.media.tumblr.com/19dbce89d3e91131c4eaa3871d96d90f/67a62ff9321a0588-51/s540x810/98a0e87a48255c0db7ec646535b6725d15a54be1.jpg" },
        { nombre: "SINALOA - $130.00", img: "https://64.media.tumblr.com/19dbce89d3e91131c4eaa3871d96d90f/67a62ff9321a0588-51/s540x810/98a0e87a48255c0db7ec646535b6725d15a54be1.jpg" },
        { nombre: "SONORA - $140.00", img: "https://64.media.tumblr.com/19dbce89d3e91131c4eaa3871d96d90f/67a62ff9321a0588-51/s540x810/98a0e87a48255c0db7ec646535b6725d15a54be1.jpg" },
        { nombre: "TABASCO - $120.00", img: "https://64.media.tumblr.com/19dbce89d3e91131c4eaa3871d96d90f/67a62ff9321a0588-51/s540x810/98a0e87a48255c0db7ec646535b6725d15a54be1.jpg" },
        { nombre: "TAMAULIPAS - $120.00", img: "https://64.media.tumblr.com/19dbce89d3e91131c4eaa3871d96d90f/67a62ff9321a0588-51/s540x810/98a0e87a48255c0db7ec646535b6725d15a54be1.jpg" },
        { nombre: "TLAXCALA - $180.00", img: "https://64.media.tumblr.com/19dbce89d3e91131c4eaa3871d96d90f/67a62ff9321a0588-51/s540x810/98a0e87a48255c0db7ec646535b6725d15a54be1.jpg" },
        { nombre: "VERACRUZ - $200.00", img: "https://64.media.tumblr.com/19dbce89d3e91131c4eaa3871d96d90f/67a62ff9321a0588-51/s540x810/98a0e87a48255c0db7ec646535b6725d15a54be1.jpg" },
        { nombre: "YUCATÁN - $250.00", img: "https://64.media.tumblr.com/19dbce89d3e91131c4eaa3871d96d90f/67a62ff9321a0588-51/s540x810/98a0e87a48255c0db7ec646535b6725d15a54be1.jpg" },
        { nombre: "ZACATECAS - $130.00", img: "https://64.media.tumblr.com/19dbce89d3e91131c4eaa3871d96d90f/67a62ff9321a0588-51/s540x810/98a0e87a48255c0db7ec646535b6725d15a54be1.jpg" },
        { nombre: "MATRIMONIO - $250.00", img: "https://imgv2-2-f.scribdassets.com/img/document/668770036/original/cdb6b5f04d/1?v=1" },
        { nombre: "DEFUNCIÓN - $250.00", img: "https://imgv2-1-f.scribdassets.com/img/document/581443357/original/e8ea0ad60f/1?v=1" },
        { nombre: "DIVORCIO - $250.00", img: "https://imgv2-2-f.scribdassets.com/img/document/621018093/original/3be732fdb2/1?v=1" },
        { nombre: "RFC - $250.00", img: "https://website-assets.studocu.com/img/document_thumbnails/fcd5da9a73559c3b14f800fb88fc37ea/thumb_1200_1553.png" },
        { nombre: "CURP A COLOR - $5.00", img: "https://imgv2-1-f.scribdassets.com/img/document/456155327/original/0aaba7623e/1?v=1" },
        { nombre: "CURP B/N - $3.00", img: "https://tvazteca.brightspotcdn.com/dims4/default/54c88a1/2147483647/strip/true/crop/1280x720+0+0/resize/928x522!/format/webp/quality/90/?url=http%3A%2F%2Ftv-azteca-brightspot.s3.amazonaws.com%2Fbc%2Fee%2Fa1dfc7734de1876803e82331a9ff%2Fse-cayo-el-sitio-la-forma-alternativa-de-descargar-tu-curp-en-linea-gratis.jpg" },
        { nombre: "COPIA DE INE NORMAL B/N - $2.00", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQqMDx0mPDBokoLAVnF9w34b-8nzprhfSOEA&s" },
        { nombre: "COPIA DE INE 200% B/N - $4.00", img: "https://imgv2-2-f.scribdassets.com/img/document/530710100/original/0bad3507fa/1?v=1" },
        { nombre: "COPIA DE INE NORMAL A COLOR - $6.00", img: "https://i.blogs.es/1394d1/ife/650_1200.jpg" },
        { nombre: "COPIA DE INE 200% A COLOR - $8.00", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9x9rpwLz6BoPQ7WZTEwEsSpID2vnJBBgQHuY26-uG3ggdFdv6v5fdxNOUx9c2eUscmjU&usqp=CAU" },
        { nombre: "FORMATO DE TENENCIA - $5.00", img: "https://s3.amazonaws.com/nexu-ghost-blog/2024/01/Page-1.jpg" },
        { nombre: "RECIBO DE LUZ - $5.00", img: "https://recibo-cfe.mx/wp-content/uploads/2021/06/Ejemplo-de-un-recibo-de-la-luz-de-la-Comision-Federal-de-la-Electricidad-CFE.jpg" },
        { nombre: "REDUCCIÓN TAMAÑO CARTA - $3.00", img: "https://i.printerdoc.net/HP%20Officejet%20Pro%208500/es/HP%20Officejet%20Pro%208500_es130.png" },
        { nombre: "AMPLIACIÓN - $5.00", img: "https://global.sharp/restricted/products/copier/downloads/manuals/bp70m90/es/img/copy_size_sp_1.png" },
        { nombre: "COPIA A COLOR - $3.00", img: "https://static.vecteezy.com/system/resources/previews/009/667/815/non_2x/copy-the-picture-and-color-cloud-complete-the-picture-finish-the-image-coloring-book-educational-drawing-exercise-game-for-children-vector.jpg" },
        { nombre: "COPIA B/N - $1.00", img: "https://st4.depositphotos.com/3827765/30854/v/950/depositphotos_308540424-stock-illustration-happy-schoolkids-with-a-copy.jpg" },
        { nombre: "IMPRESIÓN A COLOR - $3.00 - $10.00", img: "https://static.vecteezy.com/system/resources/previews/009/667/815/non_2x/copy-the-picture-and-color-cloud-complete-the-picture-finish-the-image-coloring-book-educational-drawing-exercise-game-for-children-vector.jpg" },
        { nombre: "IMPRESIÓN B/N - $1.00", img: "https://st4.depositphotos.com/3827765/30854/v/950/depositphotos_308540424-stock-illustration-happy-schoolkids-with-a-copy.jpg" },
        { nombre: "ESCANEO B/N - $1.00", img: "https://i.redd.it/scanning-quality-and-cost-v0-6boy5m45ashe1.jpg?width=1228&format=pjpg&auto=webp&s=4947a560555d778a26e68963b665df04f79b3098" },
        { nombre: "ESCANEO A COLOR - $3.00", img: "https://i.blogs.es/c3470a/pasaporte/450_1000.jpeg" },
        { nombre: "TALÓN DE PAGO - $4.00", img: "https://pensionjusta.com/wp-content/uploads/2021/10/talon-de-pago.jpg" },
        { nombre: "INSCRIPCIONES NIVEL BÁSICO - $30.00", img: "https://apocaliptic.com/wp-content/uploads/2025/02/Gi-JAGiX0AAbcE4.jpg" },
        { nombre: "INSCRIPCIONES NIVEL SUPERIOR - $35.00", img: "https://adnoticias.mx/wp-content/uploads/2025/02/convocatoria-prepa-edomex-759x1024.jpg" },
        { nombre: "BECAS EN GENERAL - $35.00", img: "https://almomento.mx/wp-content/uploads/2024/10/becas-edomex.jpg" },
        { nombre: "ANTECEDENTES NO PENALES - $10.00", img: "https://imgv2-2-f.scribdassets.com/img/document/605816875/original/90c14e3144/1?v=1" },
        { nombre: "ANTECEDENTES NO PENALES TRÁMITE COMPLETO - $35.00", img: "https://imgv2-2-f.scribdassets.com/img/document/605816875/original/90c14e3144/1?v=1" },
        { nombre: "NÚMERO DE SEGURO SOCIAL - $8.00", img: "https://www.record.com.mx/sites/default/files/inline-images/Proyecto%20nuevo%20%2816%29_2.jpg" },
        { nombre: "SEMANAS COTIZADAS DE IMSS - $8.00", img: "https://www.pensionaplus.mx/hs-fs/hubfs/blog/2022/Enero/constancia-semanas-cotizadas-pension.png?width=500&name=constancia-semanas-cotizadas-pension.png" },
        { nombre: "VIGENCIA DE IMSS - $8.00", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1BV5EcrJELCxjflJGjnavnHBDdBkOjdYtYQ&s" },
        { nombre: "ALTA EN CLÍNICA IMSS - $35.00", img: "https://www.dof.gob.mx/imagenes_diarios/2015/11/10/MAT/imss3a11_Cimg_1089178.png" },
        { nombre: "REEMPLACAMIENTO - $100.00", img: "https://imgv2-1-f.scribdassets.com/img/document/430791034/original/2772b52262/1?v=1" },
        { nombre: "BÚSQUEDA 10 IMÁGENES A COLOR EN UNA SOLA HOJA - $10.00", img: "https://cipher.dakiscdn.com/i/https://1410dd2bdd37e05ebf19-a2305060cc55ab8db83b1ef4b8835a6b.ssl.cf5.rackcdn.com/1079_pgg_fbb212d0-605b-012d-42a1-005056c00008?w=400&h=400&p=1&a=1&q=display" },
        { nombre: "BÚSQUEDA IMÁGENES A COLOR EN VARIAS HOJAS - $5.00", img: "https://i.ytimg.com/vi/8A_eeKDXoFY/maxresdefault.jpg" },
        { nombre: "BÚSQUEDA 20 IMÁGENES O MÁS A COLOR - $20.00", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Big_collage_of_history_of_Mexico.jpg/1200px-Big_collage_of_history_of_Mexico.jpg" },
        { nombre: "ACOMODAR IMÁGENES - $5.00", img: "https://i.ytimg.com/vi/8A_eeKDXoFY/maxresdefault.jpg" }
    ];


    const list = document.getElementById("list-six");

    temas.forEach((tema, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${tema.nombre}`;
        listItem.setAttribute("data-img", tema.img);
        list.appendChild(listItem);
    });

    // Modal
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".close");

    list.addEventListener("click", (event) => {
        if (event.target.tagName === "LI") {
            const imgSrc = event.target.getAttribute("data-img");
            modalImg.src = imgSrc;
            modal.style.display = "block";
        }
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
