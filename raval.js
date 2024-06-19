function validateRegister() {    
    const fullName = document.getElementById('fullName').value;
    const documentType = document.getElementById('documentType').value;
    const nationality = document.getElementById('nationality').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phones').value;
    const email = document.getElementById('email').value;
    const accountNumber = document.getElementById('accountNumber').value;
    const terms = document.getElementById('terms').checked;

if (!fullName 
    || !documentType 
    || !nationality 
    || !address 
    || !phone 
    || !email 
    || !accountNumber 
    || !terms){

}else {
window.location.href = "4Documents.html"; 
}
};