 /*document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
});*/

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
    }

    // Convertir datos a JSON
    const jsonData = JSON.stringify(formData);
    console.log('Datos en formato JSON:');
    console.log(jsonData);

    // Redirect to the next page
    window.location.href = '3RAval.html';
}

