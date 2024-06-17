function openhtml1() {
    window.location.href = "index1.html";
}
function openhtml1(inputId, displayId) {
    const input = document.getElementById(inputId);
    const display = document.getElementById(displayId);
    display.textContent = input.files.length > 0 ? input.files[0].name : '';
}

document.getElementById('fileInput1').addEventListener('change', function() {
    var fileName = this.files[0].name;
    document.getElementById('fileName1').textContent = 'Selected file: ' + fileName;
});

document.getElementById('fileInput2').addEventListener('change', function() {
    var fileName = this.files[0].name;
    document.getElementById('fileName2').textContent = 'Selected file: ' + fileName;
});

document.getElementById('fileInput3').addEventListener('change', function() {
    var fileName = this.files[0].name;
    document.getElementById('fileName3').textContent = 'Selected file: ' + fileName;
});

document.getElementById('fileInput4').addEventListener('change', function() {
    var fileName = this.files[0].name;
    document.getElementById('fileName4').textContent = 'Selected file: ' + fileName;
});


const toggle = document.querySelector(".toggle"),
            input = document.querySelector("input");
            toggle.addEventListener("click", () =>{
                if(input.type ==="password"){
                    input.type = "text";
                    toggle.classList.replace("uil-eye-slash", "uil-eye");
                }else{
                    input.type = "password";
                }
            })