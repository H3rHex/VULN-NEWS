document.addEventListener("DOMContentLoaded", () => {
    getTips();  // Llamamos a getTips cuando el DOM está listo
});

function getTips() {
    // OBTIENE EL CONTENIDO DEL JSON
    fetch('../JS/TIPS/tips.json')
        .then(response => response.json())
        .then(data => {
            createStructure(data);  // Creamos la estructura con los datos del JSON
            getTipTittleClick();    // Llamamos a getTipTittleClick después de crear los títulos
        })
        .catch(error => console.error('Error cargando datos:', error));
}

function createStructure(tipsData) {
    // Seleccionamos el contenedor usando el selector correcto
    const tipsContainer = document.querySelector('.tipsContainer'); 

    if (!tipsContainer) {
        console.error('No se encontró el contenedor de tips');
        return;
    }

    // Iteramos sobre los tips
    for (let i in tipsData) {
        const tip = tipsData[i]; 
        const tipNumber = i; 

        // Crear sección del tip
        const tipSection = document.createElement('section');
        tipSection.id = `tip-${tipNumber}`;
        tipSection.classList.add('selector');

        // Añadimos la sección al contenedor
        tipsContainer.appendChild(tipSection);

        // Crear título del tip
        const tipTitle = document.createElement('h3');
        tipTitle.innerHTML = tip['tip-title'];  
        tipTitle.classList.add('tipTitle');
        tipTitle.setAttribute('title', 'Haz click para mostrar el contenido'); // Personaliza el mensaje
        tipSection.appendChild(tipTitle);

        // Crear contenido del tip
        const tipContent = document.createElement('p');
        tipContent.innerHTML = tip['tip-body'];  
        tipContent.classList.add('tipContent');
        tipContent.style.display = "none";  // Ocultamos el contenido inicialmente
        tipSection.appendChild(tipContent);
    }
}

function getTipTittleClick() {
    // Seleccionamos todos los elementos con la clase 'tipTitle'
    document.querySelectorAll('.tipTitle').forEach(title => {
        // Añadimos un evento 'click' a cada título
        title.addEventListener('click', () => {
            // Seleccionamos el siguiente elemento hermano (el contenido del tip)
            const tipBody = title.nextElementSibling;

            // Verificamos el estado actual y alternamos entre 'block' y 'none'
            if (tipBody.style.display === "none") {
                tipBody.style.display = "block";
                tipBody.classList.add('tipContent-show');
            } else {
                tipBody.style.display = "none";
                tipBody.classList.add('tipContent-hide');
            }
        });
    });
}
