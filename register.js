//Register
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Capture form data
    let formData = {
        fullName: document.getElementById('fullName').value,
        documentType: document.getElementById('documentType').value,
        documentNumber: document.getElementById('documentNumber').value,
        nationality: document.getElementById('nationality').value,
        address: document.getElementById('address').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        accountNumber: document.getElementById('accountNumber').value,
        terms: document.getElementById('terms').checked
    };

    // Convert to JSON
    let jsonData = JSON.stringify(formData);
    console.log("Form Data as JSON:", jsonData);

    // Convert JSON to XML
    let xmlData = jsonToXml(formData);
    console.log("Form Data as XML:", xmlData);

    // Here you would typically send the XML data to a server for storage
    // For this example, we just log it to the console

    // Function to convert JSON to XML
    function jsonToXml(json) {
        let xml = '<root>';
        for (let key in json) {
            if (json.hasOwnProperty(key)) {
                xml += `<${key}>${json[key]}</${key}>`;
            }
        }
        xml += '</root>';
        return xml;
    }

    // Redirect to the next page
    window.location.href = '3RAval.html';
});

