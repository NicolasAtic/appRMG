// Escucha el evento de envío del formulario
const form = document.querySelector('#registrationForm');
form.addEventListener('submit', processall);

function processall(event) {
    event.preventDefault();

    // Obtén los datos del formulario
    const datos = new FormData(event.target);
    const datosCompletos = Object.fromEntries(datos.entries());

    // Convierte los datos a formato JSON
    const json_data = JSON.stringify(datosCompletos);

    // Almacena los datos en el almacenamiento local
    localStorage.setItem('form_data', json_data);

    // Muestra los datos en la consola
    console.log('Datos guardados en formato JSON:');
    console.log(json_data);

    // Redirige al usuario a la siguiente página
   
    window.location.href = '4documents.html';
}