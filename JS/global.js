//SCRIPT GENERAL

//CUANDO CARGA EL SCRIPT
document.addEventListener("DOMContentLoaded", () =>{
    updateDay();
});

//FORMATEA Y ACTUALIZA LA HORA
function updateDay(){
    // Obtén el elemento con el id "fechaActual"
    let dateElement = document.getElementById("fechaActual");

    // Crea un nuevo objeto Date para obtener la fecha actual
    const fechaActual = new Date();
    
    // Formateamos la fecha para que se muestre de la siguiente manera: dia/mes/año
    const day = String(fechaActual.getDate()).padStart(2, '0');  // Asegura que tenga 2 dígitos
    const month = String(fechaActual.getMonth() + 1).padStart(2, '0');  // Suma 1 ya que los meses empiezan en 0
    const year = fechaActual.getFullYear();
    
    const formatedDate = `${day}/${month}/${year}`;
    
    // Asignamos la fecha formateada al contenido HTML del elemento
    dateElement.innerHTML = formatedDate;
    console.log(formatedDate);
}

