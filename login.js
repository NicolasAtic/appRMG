import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

const auth = getAuth();
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const loginBtn = document.getElementById("login-btn");
const loginErrorMessage = document.getElementById("login-error-message"); // Assuming this element exists in your HTML

const loginButtonPressed = async (e) => {
  e.preventDefault();

  try {
    await signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value);
    window.location.href = 'main.html'; // Redirects to the main form after successful login
  } catch (error) {
    console.error(error.code); // Log the error code for debugging

    // Handle login error messages based on error code
    loginErrorMessage.textContent = formatErrorMessage(error.code, "login"); // Set the error message content
    loginErrorMessage.classList.add("visible"); // Add a CSS class (e.g., "visible") to display the message visually
  }
};

loginBtn.addEventListener("click", loginButtonPressed);

const formatErrorMessage = (errorCode, action) => {
  let message = "";
  if (action === "login") {
    switch (errorCode) {
      case "auth/invalid-email":
      case "auth/user-not-found":
        message = "Email or Password is incorrect";
        break;
      case "auth/wrong-password":
        message = "Incorrect password. Please try again.";
        break;
      default:
        message = "An error occurred during login. Please try again later.";
    }
  }
  return message;
};
