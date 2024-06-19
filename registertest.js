const processall = (event) => {
    event.preventDefault();
    const datos = new FormData(event.target);
    const datosCompletos = Object.fromEntries(datos.entries());
    console.log(JSON.stringify(datosCompletos));

    // Redirige al usuario a la siguiente página
    window.location.href = 'siguiente_pagina.html';
}
form.addEventListener('submit', processall);