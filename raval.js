document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('registrationForm');
        
        const processAll = (event) => {
        event.preventDefault();
        const datos = new FormData(event.target);
        const datosCompletos = Object.fromEntries(datos.entries());
        console.log(JSON.stringify(datosCompletos));

 // Enviar datos a Google Apps Script
    fetch('https://script.google.com/macros/s/AKfycbxLgNyA7BQGCguNejclwB38oBnfLnpQKFAlQKqjAAZURR-fjCOks42FahoPW2nvEd4L/exec', {
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
             window.location.href = '4Documents.html';
            }, 1000); // Retrasa la redirección para asegurarse de que el JSON se muestra en la consola
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

form.addEventListener('submit', processAll);
});