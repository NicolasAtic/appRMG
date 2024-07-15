import { getAuth, createUserWithEmailAndPassword }  from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
import { db } from './firebase.js';

const auth = getAuth();
const email = document.getElementById("email");
const password = document.getElementById("password");
const signUpBtn = document.getElementById("signup-btn");
const UIErrorMessage = document.getElementById("error-message");

//creates the user by pressing subp
const signUpButtonPressed = async (e) => {
    e.preventDefault();
// creates the user with email and password
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
        console.log(userCredential);
// user es la coleccion en la base de datos de firebase y se esta creacando un documento en firestore para los siguientes forms
        await setDoc(doc(db, "users", userCredential.user.uid),{
            email: userCredential.user.email,
            mainData: {},
            ravalData:{},
            udocumentURLs:{}
        });
        window.location.href = '../3Login.html'; // Redirige a la página de inicio de sesión después del registro exitoso
    } catch (error) {
        console.log(error.code);
        UIErrorMessage.innerHTML = formatErrorMessage(error.code, "signup");
        UIErrorMessage.classList.add("visible");
    }
};

signUpBtn.addEventListener("click", signUpButtonPressed);

const formatErrorMessage = (errorCode, action) => {
    let message = "";
    if (action === "signup") {
        if (errorCode === "auth/invalid-email" || errorCode === "auth/missing-email") {
            message = "Please enter a valid email";
        } else if (errorCode === "auth/missing-password" || errorCode === "auth/weak-password") {
            message = "Password must be at least 6 characters long";
        } else if (errorCode === "auth/email-already-in-use") {
            message = "Email is already taken";
        }
    }
    return message;
};

