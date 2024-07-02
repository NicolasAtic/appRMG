import { db, storage, auth,state } from '/firebase.js';


const firebaseConfig = {
  apiKey: "AIzaSyC7GaxzdW9yyy3tu3FLMeCeaBWJNq6gOmM",
  authDomain: "apprmg-2f1f0.firebaseapp.com",
  databaseURL: "https://apprmg-2f1f0-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "apprmg-2f1f0",
  storageBucket: "apprmg-2f1f0.appspot.com",
  messagingSenderId: "278461104758",
  appId: "1:278461104758:web:797c298a5ea6c5276e5557"
};
const app = initializeApp(firebaseConfig);

// Get Firebase Auth and Firestore references
const auth = getAuth(app);
const db = getFirestore(app);

// User data object to accumulate data across pages
let userData = {};

// Track the current form page
let currentPage = "main";

// UI elements
const userProfileView = document.getElementById("user-profile");
const UIuserEmail = document.getElementById("user-email");
const logOutBtn = document.getElementById("logout-btn");
const form = document.getElementById("registrationForm");

// Handle logout
logOutBtn.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      console.log("User logged out successfully!");
      // Optionally, redirect to login page or update UI
      window.location.href = '1Login.html';
    })
    .catch((error) => {
      console.error("Error logging out:", error);
      // Handle logout error
    });
});

// Load user data when logged in
state(auth, (user) => {
  if (user) {
    // User is logged in, display user profile info
    userProfileView.textContent = `User: ${user.email}`;
    UIuserEmail.textContent = user.email;

    // Load user data from Firestore
    const userRef = doc(db, "users", user.uid);
    userRef.get()
      .then((doc) => {
        if (doc.exists) {
          // Load data from document fields and populate input fields (if needed)
          const data = doc.data();
          userData = data; // Update accumulated user data
          // ... populate input fields with data
        }
      })
      .catch((error) => {
        console.error("Error loading user data:", error);
      });
  } else {
    // User is logged out, hide profile info and clear form
    userProfileView.textContent = "";
    UIuserEmail.textContent = "";
    form.reset();
  }
});

// Form submission handler
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  // Collect data from input fields
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
try {
  if (currentPage === "main") {
    if (auth.currentUser) {
      // User logged in, update existing user data
      const userRef = doc(db, "users", auth.currentUser.uid);
      await setDoc(userRef, userData);
      alert("User data updated successfully!");
    } else {
      // User not logged in, create new user and save data
      const createdUser = await createUserWithEmailAndPassword(auth, email, "yourPassword"); // Replace with a secure password generation logic
      const userRef = doc(db, "users", createdUser.user.uid);
      await setDoc(userRef, userData);
      alert("User created and data saved successfully!");
    }
    currentPage = "3RAval"; // Move to the next page (optional, handle navigation based on your logic)
  } else if (currentPage === "3RAval" || currentPage === "4Documents") {
    // Subsequent pages (3RAval, 4Documents), update existing user data
    if (!auth.currentUser) {
      alert("Please login to continue");
    } else {
      // User logged in on subsequent pages, update existing user data
      const userRef = doc(db, "users", auth.currentUser.uid);
      await setDoc(userRef, userData);
      alert("User data updated successfully!");
      // Optional: Handle successful update on subsequent pages (e.g., redirect)
    }
  } else {
    // Handle other potential page values (optional)
    console.warn("Unknown page:", currentPage);
  }
} catch (error) {
  console.error("Error:", error);
  alert("An error occurred. Please try again.");
}
});