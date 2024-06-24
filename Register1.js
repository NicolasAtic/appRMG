document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("registerForm");

    registerForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const dni = document.getElementById("dni").value;
        const registerMessage = document.getElementById("registerMessage");

        const userInfo = {
            email: email,
            dni: btoa(dni) // Encrypt the DNI using Base64 encoding
        };

        localStorage.setItem('userInfo', JSON.stringify(userInfo));

        registerMessage.textContent = "Registro exitoso. Redirigiendo a la página de inicio de sesión...";
        registerMessage.style.color = "green";

        setTimeout(() => {
            window.location.href = "1Login.html"; // Redirect to login page
        }, 2000);
    });
});
