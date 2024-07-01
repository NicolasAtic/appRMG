/*import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

const auth = getAuth();
const logOutBtn = document.getElementById("logout-btn");
const UIuserEmail = document.getElementById("user-email");

onAuthStateChanged(auth, (user) => {
    if (user) {
        UIuserEmail.innerHTML = user.email;
    } else {
        window.location.href = 'login.html'; // Redirige al login si no hay usuario autenticado
    }
});

const logOutButtonPressed = async () => {
    try {
        await signOut(auth);
        window.location.href = '1Login.html'; // Redirige al login después de cerrar sesión
    } catch (error) {
        console.log(error);
    }
};

logOutBtn.addEventListener("click", logOutButtonPressed);
*/
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
  } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
  import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
  import { initializeApp } from "firebase/app";
  
  const firebaseConfig = {
    apiKey: "AIzaSyC7GaxzdW9yyy3tu3FLMeCeaBWJNq6gOmM",
    authDomain: "apprmg-2f1f0.firebaseapp.com",
    projectId: "apprmg-2f1f0",
    storageBucket: "apprmg-2f1f0.appspot.com",
    messagingSenderId: "278461104758",
    appId: "1:278461104758:web:797c298a5ea6c5276e5557",
  };
  
  // Initialize Firebase app
  const app = initializeApp(firebaseConfig);
  
  // Get Firebase Auth and Firestore references
  const auth = getAuth(app);
  const db = getFirestore(app); // Assuming you've initialized Firestore
  
    const userProfileView = document.getElementById("user-profile");
    const UIuserEmail = document.getElementById("user-email");
    const logOutBtn = document.getElementById("logout-btn");
    const form = document.getElementById("registrationForm");
  
   

  let currentPage = "main"; // Track the current form page
  let userData = {}; // Accumulate user data across multiple forms
  
  form.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent default form submission
  
    const fullName = document.getElementById("fullName").value;
    const docType = document.getElementById("docType").value;
    const docNumber = document.getElementById("docNumber").value;
    const nationality = document.getElementById("nationality").value;
    const address = document.getElementById("address").value;
    const countryCode = document.getElementById("countryCode").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const accountNumber = document.getElementById("accountNumber").value;
    const accountCode = document.getElementById("accountCode").value;
    const terms = document.getElementById("terms").checked;
  
    if (!terms) {
      alert("Please accept the terms and conditions");
      return;
    }
  
    // Check if user is already signed in
    const currentUser = auth.currentUser;
  
    try {
      // Update userData object with current form data
      userData = {
        ...userData,
        fullName,
        docType,
        docNumber,
        nationality,
        address,
        countryCode,
        phone,
        email,
        accountNumber,
        accountCode,
      };
  
      // Determine action based on current page and login status
      if (currentPage === "registration") {
        if (currentUser) {
          // User logged in, update existing user data
          const userRef = doc(db, "users", currentUser.uid);
          await setDoc(userRef, userData);
          alert("User data updated successfully!");
        } else {
          // User not logged in, create new user and save data
          const createdUser = await createUserWithEmailAndPassword(auth, email, "yourPassword"); // Replace with a secure password generation logic
          const userRef = doc(db, "users", createdUser.user.uid);
          await setDoc(userRef, userData);
          alert("User created and data saved successfully!");
        }
        currentPage = "3RAval"; // Move to the next page
      } else if (currentPage === "3RAval" || currentPage === "4Documents") {
        // Subsequent pages, update existing user data
        if (!currentUser) {
          alert("Please login to continue");
          return;
        }
        const userRef = doc(db, "users", currentUser.uid);
        await setDoc(userRef, userData);
        console.log("User data for", currentPage, "updated successfully!");
  
        // If it's the last form submission (4Documents.js), show a success message
        if (currentPage === "4Documents") {
          alert("¡Toda la información se ha guardado correctamente en tu usuario!");
        } else {
          currentPage = currentPage === "3RAval" ? "4Documents" : "completed"; // Move to the next page or mark completion
        }
      } else {
        console.error("Unexpected form page:", currentPage);
      }
  
      // Handle page transitions (optional)
      if (currentPage !== "completed") {
        // Logic to navigate to the next page based on currentPage
        window.location.href = currentPage + ".html"; // Replace with your redirection logic
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error saving data. Please try again.");
    }
  });
  
