const popup = document.getElementById('popup');
const mensaje = document.getElementById('mensajeBienvenida');
const content = document.getElementById('content');

document.getElementById('closeBtn').addEventListener('click', function() {
    popup.style.display = 'none';
    content.classList.remove('blur'); // Quitar desenfoque
    document.body.style.overflow = 'auto'; // Restaurar el scroll
});

// Mostrar el popup y aplicar el desenfoque
function showPopup() {
    popup.style.display = 'flex'; // Mostrar el popup
    const mensajeAleatorio = listaMensajes[Math.floor(Math.random() * listaMensajes.length)];
    mensaje.innerHTML =  mensajeAleatorio;
    content.classList.add('blur'); // Aplicar desenfoque al contenido
    document.body.style.overflow = 'hidden'; // Evitar scroll
}

listaMensajes = [
    "Nos alegra tenerte aquí. Explora y disfruta de nuestra página.",
    "Bienvenido a Vuln News.",
    "Mantente informado con las últimas novedades del mundo.",
    "Tu fuente confiable para noticias relevantes y actualizaciones.",
    "Descubre análisis profundos y reportajes exclusivos.",
    "Explora nuestras categorías y encuentra lo que más te interesa.",
    "Gracias por ser parte de nuestra comunidad de lectores.",
    "Siempre estamos aquí para traerte la información más actual.",
    "Aquí encontrarás noticias que importan y generan impacto.",
    "¡Hola! Nos alegra verte. Prepárate para informarte.",
    "Te damos la bienvenida a un espacio lleno de información valiosa.",
    "Esperamos que disfrutes de tu visita y encuentres contenido interesante.",
    "Gracias por unirte a nosotros. Tu opinión es importante.",
    "¡Bienvenido de nuevo! No te pierdas nuestras actualizaciones diarias.",
    "Tu curiosidad es bienvenida aquí. ¡Explora y aprende con nosotros!",
    "Disfruta de nuestra selección de noticias, pensada para ti.",
    "Cada visita es una oportunidad para descubrir algo nuevo. ¡Bienvenido!",
    "Aquí estamos para mantenerte informado y entretenido. ¡Explora!"
];


// Llama a showPopup() para mostrar el popup al cargar la página
window.onload = showPopup;
