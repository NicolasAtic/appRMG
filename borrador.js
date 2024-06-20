/*document.addEventListener('DOMContentLoaded',
//document.getElementById('registrationForm').addEventListener('submit', function(event) {
 //   event.preventDefault();
//});
function validateRegister() {
    const formData = {
        fullName: document.getElementById('fullName').value,
        documentType: document.querySelector('#documentType input').value,
        documentNumber: document.getElementById('doc').value,
        nationality: document.querySelector('#nationality select').value,
        address: document.getElementById('address').value,
        phone: document.getElementById('phones').value,
        email: document.getElementById('email').value,
        accountNumber: document.getElementById('accountNumber').value,
        terms: document.getElementById('terms').checked
    };

    for (const key in formData) {
        if (formData.hasOwnProperty(key) && formData[key] === "") {
            alert(`Por favor, completa el campo: ${key}`);
            return false;
        }
    }
    if (!formData.terms) {
        alert('Debes aceptar los términos y condiciones.');
        return false;
    }//
// json try 1*/





/*links 
https://docs.google.com/spreadsheets/d/12rTT3O1Y44jpBDJ3Tw0k8Shsm6XH5v1y__Hr5syk42Y/edit?usp=sharing
app sheet
https://script.google.com/macros/s/AKfycbxEIisNzYedz6z9WUyvimxre-XnalPva1yQeWtW7m34wE3vcmJtRRJo1okW1AVJ9_8X/exec
id de implementacion 

AKfycbxEIisNzYedz6z9WUyvimxre-XnalPva1yQeWtW7m34wE3vcmJtRRJo1okW1AVJ9_8X


biblioteca
https://script.google.com/macros/library/d/1YKhxV_8OA5JGU9zbCXqw0dhO_Ar8Sw-rmvWeBv3HyekXbu1VNX5iDu2d/3

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Página Web</title>
    <!-- Configura las cabeceras CORS -->
    <script>
        // Configura las cabeceras CORS en la respuesta
        function setCorsHeaders(response) {
            response.headers.set('Access-Control-Allow-Origin', '*'); // Permite solicitudes desde cualquier origen (para fines de demostración)
            response.headers.set('Access-Control-Allow-Methods', 'GET'); // Permite solo solicitudes GET
            response.headers.set('Access-Control-Allow-Headers', 'Content-Type'); // Permite encabezados específicos
        }

        // Ejemplo de uso en una solicitud fetch
        fetch('https://api.example.com/data')
            .then(response => {
                setCorsHeaders(response); // Configura las cabeceras CORS
                return response.json();
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('Error al obtener los datos:', error);
            });
    </script>
</head>
*/ 
