// JSON data
const userInfo = {
    username: "Mycityhome",
    password: btoa("welcome1") // Encrypt the password using Base64 encoding
};

// Log JSON data to console
console.log("User Information:", userInfo);

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Toggle password visibility script
    const toggle = document.querySelector(".toggle"),
        input = document.getElementById("password");

    if (toggle && input) {
        toggle.addEventListener("click", () => {
            if (input.type === "password") {
                input.type = "text";
                toggle.classList.replace("uil-eye-slash", "uil-eye");
            } else {
                input.type = "password";
                toggle.classList.replace("uil-eye", "uil-eye-slash");
            }
        });
    }

    // Validate login function
    window.validateLogin = function() {
        const login = document.getElementById("login").value;
        const password = document.getElementById("password").value;
        const errorMessage = document.getElementById("errorMessage");

        errorMessage.textContent = "";

        if (!login) {
            errorMessage.textContent = "Por favor escriba su nombre de usuario.";
            errorMessage.style.color = "red";
        } else if (login !== userInfo.username) { // Validate the username directly
            errorMessage.textContent = "Error: inicio de sesión incorrecto.";
            errorMessage.style.color = "red";
        } else if (password !== atob(userInfo.password)) { // Decrypt the password for validation
            errorMessage.textContent = "Error: Contraseña incorrecta.";
            errorMessage.style.color = "red";
        } else {
            window.location.href = "2Register.html"; // Redirect to success page
        }
    };
});
