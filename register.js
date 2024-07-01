document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('registrationForm');
        
        const processAll = (event) => {
        event.preventDefault();
        const datos = new FormData(event.target);
        const datosCompletos = Object.fromEntries(datos.entries());
        console.log(JSON.stringify(datosCompletos));

 // Enviar datos a Google Apps Script
<<<<<<< HEAD
    fetch('https://script.google.com/macros/s/AKfycbyuM88QGhFkZFXp2tWvgODQsF-pxsQVmQgD1uKrLRhDYBpMKeADDDh1aG8OXQjHWEL1/exec', {
=======
    fetch('https://script.google.com/macros/s/AKfycbzB53_MUylQL06XHNzNovn2da-VnAYnXFkGsrEEffNDvkWWfL8XfdnodoJHBk7yHFTw/exec', {
>>>>>>> 6bf30207b654f8b605d32169232cf54d718a7584
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
            },
        body: JSON.stringify(datosCompletos)
    })
        .then(data => {
        console.log('Success:',data); // esta funcion no esta bien debo revisar sgit
                    // Redirige al usuario a la siguiente página
            setTimeout(() => {
            window.location.href = '3RAval.html';
            }, 100); // Retrasa la redirección para asegurarse de que el JSON se muestra en la consola
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

form.addEventListener('submit', processAll);
});