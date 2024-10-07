const popup = document.getElementById('popup');
const content = document.getElementById('content');

document.getElementById('closeBtn').addEventListener('click', function() {
    popup.style.display = 'none';
    content.classList.remove('blur'); // Quitar desenfoque
    document.body.style.overflow = 'auto'; // Restaurar el scroll
});

// Mostrar el popup y aplicar el desenfoque
function showPopup() {
    popup.style.display = 'flex'; // Mostrar el popup
    content.classList.add('blur'); // Aplicar desenfoque al contenido
    document.body.style.overflow = 'hidden'; // Evitar scroll
}

// Llama a showPopup() para mostrar el popup al cargar la página
window.onload = showPopup;
