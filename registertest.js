/*document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    function validateRegister() {
        const formData = {
            fullName: document.getElementById('fullName').value,
            documentType: document.getElementById('documentType').value,
            nationality: document.getElementById('nationality').value,
            address: document.getElementById('address').value,
            phone: document.getElementById('phone').value,
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

        // Convertir datos a XML
        let xmlData = '<registration>';
        for (const key in formData) {
            xmlData += `<${key}>${formData[key]}</${key}>`;
        }
        xmlData += '</registration>';
        console.log('Datos en formato XML:');
        console.log(xmlData);

        // Enviar el formulario (descomenta esta línea si deseas enviarlo realmente)
        // document.getElementById('registrationForm').submit();
    }

    validateRegister();
});*//
