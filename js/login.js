import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

const auth = getAuth();
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const loginBtn = document.getElementById("login-btn");
const loginErrorMessage = document.getElementById("login-error-message"); 

const loginButtonPressed = async (e) => {
  e.preventDefault();

  try {
    await signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value);
    window.location.href = 'main.html'; // Redirects to the main form after successful login
  } catch (error) {
    console.error(error.code); 
    loginErrorMessage.textContent = formatErrorMessage(error.code, "login"); // Set the error message content
    loginErrorMessage.classList.add("visible"); // Add a CSS class (e.g., "visible") to display the message visually
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

