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
            
function validateLogin() {
    
    const login = document.getElementById("login").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    errorMessage.textContent = "";

    if (!login) {
        errorMessage.textContent = "Por favor escriba su nombre de usuario.";
        errorMessage.style.color = "red";
    } else if (login !== "Mycityhome") { // Replace "your_login_here" with the actual login name
        errorMessage.textContent = "Error: inicio de sesión incorrecto.";
        errorMessage.style.color = "red";
    } else if (password !== "welcome1") { // Replace "your_password_here" with the actual password
        errorMessage.textContent = "Error: Contraseña incorrecta.";
        errorMessage.style.color = "red";
    } else {
        window.location.href = "2Register.html"; // Redirect to success page
    }
}

