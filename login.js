document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const login = document.getElementById("login").value;
        const password = document.getElementById("password").value;
        const errorMessage = document.getElementById("errorMessage");

        // Retrieve user info from localStorage
        const userInfoJSON = localStorage.getItem('userInfo');
        if (!userInfoJSON) {
            errorMessage.textContent = "No se encontró información de usuario. Por favor, regístrese primero.";
            errorMessage.style.color = "red";
            return;
        }

        const userInfo = JSON.parse(userInfoJSON);
        const storedEmail = userInfo.email;
        const storedDni = userInfo.dni;

        // Simulate login using email as login and dni as password
        if (login === storedEmail && password === atob(storedDni)) { // Decode DNI from Base64
            errorMessage.textContent = "Inicio de sesión exitoso. Redirigiendo...";
            errorMessage.style.color = "green";
            setTimeout(() => {
                window.location.href = "2Register.html"; // Replace with your main page URL
            }, 2000);
        } else {
            errorMessage.textContent = "Credenciales incorrectas. Por favor, inténtelo de nuevo.";
            errorMessage.style.color = "red";
        }
    });
});
