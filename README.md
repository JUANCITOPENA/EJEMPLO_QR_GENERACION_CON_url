# Generador de Códigos QR

Este proyecto consiste en un generador de códigos QR para certificados de participación en charlas sobre marca personal y creación de portafolio web. Cada código QR enlaza a un certificado único almacenado en la nube.

## Contenido del Repositorio

- **index.html:** El archivo principal que contiene la estructura HTML del generador de códigos QR.
- **style.css:** El archivo CSS que define los estilos y el diseño del generador.
- **script.js:** El archivo JavaScript que contiene la lógica para generar los códigos QR dinámicamente.
- **LICENSE:** Licencia del proyecto.

## Estructura del HTML

- **Head:** Contiene las metaetiquetas, el título de la página y la inclusión del script para generar códigos QR.
- **Body:** Incluye un encabezado `<h2>`, la sección donde se mostrarán los códigos QR y la lógica JavaScript.

## Estilos CSS

- Estilos aplicados para un diseño limpio y atractivo.
- Utilización de colores, márgenes y sombras para mejorar la presentación visual.
- Diseño responsive que se ajusta a diferentes tamaños de pantalla.

## JavaScript

- Creación dinámica de códigos QR a partir de una lista de códigos y enlaces correspondientes.
- Empaquetamiento de la URL dentro del código QR.
- Generación de contenedores para cada código QR con enlace correspondiente.

## Lista de Códigos y Enlaces

Cada código QR enlaza a un certificado de participación único almacenado en la nube. La lista de códigos y enlaces está definida en el archivo JavaScript (`script.js`).

```javascript
const codigosYEnlaces = [
    { codigo: "ADVT-C-0001-2001024", enlace: "https://res.cloudinary.com/jpvtutoriales/image/upload/v1705888137/CERTIFICADO_DE_ELIAN_ALEXANDER_PEREZ_CASTILLO.png" },
    // ... (otros códigos y enlaces)
];

## Colaboración y Compartir
Siéntete libre de colaborar y mejorar este proyecto. Puedes hacerlo de las siguientes maneras:

Clonando el repositorio y enviando pull requests.
Reportando problemas o sugiriendo mejoras mediante la sección de "Issues".
Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

## Redes Sociales
¡Síguenos en nuestras redes sociales para estar al tanto de las últimas actualizaciones y proyectos!

Twitter
Instagram
LinkedIn

## Agradecimientos

Queremos expresar nuestro agradecimiento a todos los colaboradores y usuarios que han contribuido y utilizado este generador de códigos QR. ¡Esperamos que les sea de utilidad!

## ¡Gracias por tu interés y apoyo!
