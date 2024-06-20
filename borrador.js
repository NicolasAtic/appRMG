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


*/ 