const title = "Costurero la Aguja de Oro";
const slogan = "Dale una segunda vida a tus prendas";
const email = "anaeyda.ruiz@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    `¡Hola! Estoy interesado en los servicios de ${title} y me gustaría recibir más información. ¡Espero su respuesta!`
);
const numeroWhatsApp = "3208989588";
const textos = {
    index: {
        title: title,
        slogan: slogan,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "*Costurero la Aguja de Oro* es tu mejor aliado en el cuidado y arreglo de prendas. Con años de experiencia en el arte de la costura, garantizamos que cada pieza sea reparada con precisión y esmero.",
        description2: "Nuestra misión es devolverle vida a tus prendas favoritas, asegurándonos de que queden como nuevas. En *Costurero la Aguja de Oro*, cada detalle cuenta para ofrecerte resultados de calidad.",
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email,
    },
    footer: {
        slogan: {
            p1: "Costurero la Aguja de Oro",
            p2: slogan,
        },
        address: email,
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/profile.php?id=61565527634366&mibextid=ZbWKwL",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
    },
};
export default textos;
