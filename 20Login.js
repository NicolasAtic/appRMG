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
        errorMessage.textContent = "Didara";
        errorMessage.style.color = "red";
    } else if (password !== "D1234") { // Replace "your_password_here" with the actual password you want to use
        errorMessage.textContent = "Error: Incorrect password.";
        errorMessage.style.color = "red";
    } else {
        window.location.href = "2Register.html"; // Redirect to success page
    }
}
