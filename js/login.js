import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

const auth = getAuth();
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const loginBtn = document.getElementById("login-btn");
const loginErrorMessage = document.getElementById("login-error-message"); 

// te logeas con su usuario y tu contraseña
const loginButtonPressed = async (e) => {
  e.preventDefault();
// busca los datos para auth the client
  try {
    await signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value);
    window.location.href = '2main.html'; // Redirects to the main form after successful login
  } catch (error) {
    console.error(error.code); 
    loginErrorMessage.textContent = formatErrorMessage(error.code, "login"); // da un mensaje de error
    loginErrorMessage.classList.add("visible");
  }
};

loginBtn.addEventListener("click", loginButtonPressed);

const formatErrorMessage = (errorCode, action) => {
  let message = "";
  if (action === "login") {
    if (errorCode === "auth/invalid-email" || errorCode === "auth/missing-password") {
      message = "Email or Password is incorrect";
  } else if (errorCode === "auth/user-not-found") {
      message = " Por favor crea un usuario";
  }
}
return message;
};

