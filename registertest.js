
const form = document.querySelector('#registrationForm')
/* funcion para extraer todos los datos del form y convertirlos en formato json*/
const processall= (event)=> {
/* para una accion predeterminada del evento*/ 
    event.preventDefault();
/*constructor que crea un objeto de tipo FormData*/
const datos = new FormData (event.target);

/* El método Object.fromEntries() transforma una lista de pares con [clave-valor] en un objeto.*/
const datosCompletos = Object.fromEntries(datos.entries());
console.log(JSON.stringify(datosCompletos));
}
form.addEventListener('submit', processall);
