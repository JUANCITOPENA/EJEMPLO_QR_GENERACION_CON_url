// Lista de códigos y enlaces correspondientes
const codigosYEnlaces = [
    { codigo: "ADVT-C-0001-2001024", enlace: "https://res.cloudinary.com/jpvtutoriales/image/upload/v1705888137/CERTIFICADO_DE_ELIAN_ALEXANDER_PEREZ_CASTILLO.png" },
    { codigo: "ADVT-C-0002-2001024", enlace: "https://res.cloudinary.com/jpvtutoriales/image/upload/v1705889161/CERTIFICADO_DE_Lleury_Alexander_Heredia.png" },
    { codigo: "ADVT-C-0003-2001024", enlace: "https://res.cloudinary.com/jpvtutoriales/image/upload/v1705889212/CERTIFICADO_DE_Aris_Manuel_Paniagua_Guzman.png" },
    { codigo: "ADVT-C-0004-2001024", enlace: "https://res.cloudinary.com/jpvtutoriales/image/upload/v1705889199/CERTIFICADO_DE_Biandel_Jesus_De_la_Cruz_Beriguete.png" },
    { codigo: "ADVT-C-0005-2001024", enlace: "https://res.cloudinary.com/jpvtutoriales/image/upload/v1705889212/CERTIFICADO_DE_Edward_Adrian_Diaz_Ramirez.png" },
    { codigo: "ADVT-C-0006-2001024", enlace: "https://res.cloudinary.com/jpvtutoriales/image/upload/v1705889193/CERTIFICADO_DE_Johanni_Mejia_Reyes.png" },
    { codigo: "ADVT-C-0007-2001024", enlace: "https://res.cloudinary.com/jpvtutoriales/image/upload/v1705889174/CERTIFICADO_DE_Paola_Cruz_Rodriguez.png" },
    { codigo: "ADVT-C-0008-2001024", enlace: "https://res.cloudinary.com/jpvtutoriales/image/upload/v1705889160/CERTIFICADO_DE_Adamaris_S_Diaz_Gonzalez.png" },
    { codigo: "ADVT-C-0009-2001024", enlace: "https://res.cloudinary.com/jpvtutoriales/image/upload/v1705889172/CERTIFICADO_DE_Jose_Miguel_Baez.png" },
    { codigo: "ADVT-C-0010-2001024", enlace: "https://res.cloudinary.com/jpvtutoriales/image/upload/v1705889161/CERTIFICADO_DE_Lleury_Alexander_Heredia.png" },
    { codigo: "ADVT-C-0011-2001024", enlace: "https://res.cloudinary.com/jpvtutoriales/image/upload/v1705889153/CERTIFICADO_DE_Jose_Miguel_Ramirez_Montero.png" },
    { codigo: "ADVT-C-0012-2001024", enlace: "https://res.cloudinary.com/jpvtutoriales/image/upload/v1705889120/CERTIFICADO_DE_Johanna_Massiel_Martinez.png" },
    { codigo: "ADVT-C-0013-2001024", enlace: "https://res.cloudinary.com/jpvtutoriales/image/upload/v1705889162/CERTIFICADO_DE_Dariel_Pena_Adolfo_Vasquez.png" },
    { codigo: "ADVT-C-0014-2001024", enlace: "https://res.cloudinary.com/jpvtutoriales/image/upload/v1705889108/CERTIFICADO_DE_Ambiorys_Garcia.png" },
    { codigo: "ADVT-C-0015-2001024", enlace: "https://res.cloudinary.com/jpvtutoriales/image/upload/v1705893402/CERTIFICADO_DE_Riki_Rosario_Martinez.png" },
   
    // Agrega más códigos y enlaces según sea necesario
];

function generarCodigosQR() {
    const contenedorQR = document.getElementById("qrcodes");

    codigosYEnlaces.forEach(({ codigo, enlace }) => {
        // Extraer el nombre del certificado de la URL
        const nombreCertificado = enlace.match(/CERTIFICADO_DE_(.*?).png/)[1].replace(/_/g, " ");

        // Empaquetar la URL dentro del código QR
        const codigoEmpaquetado = "URL:" + enlace;

        // Crear el código QR con el texto empaquetado
        const qrContainer = document.createElement("div");
        qrContainer.classList.add("qr-code-container");
        const qr = new QRCode(qrContainer, {
            text: codigoEmpaquetado,
            width: 128,
            height: 128,
        });

        // Crear un elemento para mostrar el nombre del certificado
        const nombreCertificadoElement = document.createElement("p");
        nombreCertificadoElement.textContent = "Certificado: " + nombreCertificado;

        // Crear un enlace debajo del código QR
        const enlaceElement = document.createElement("a");
        enlaceElement.href = enlace;
        enlaceElement.target = "_blank";
        enlaceElement.textContent = "Abrir enlace";

        // Agregar elementos al contenedor QR
        qrContainer.appendChild(nombreCertificadoElement);
        qrContainer.appendChild(enlaceElement);
        contenedorQR.appendChild(qrContainer);
    });
}

// Llama a la función cuando la página se carga
window.onload = generarCodigosQR;