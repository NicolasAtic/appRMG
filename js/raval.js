import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
import { db } from './firebase.js';

const auth = getAuth();
const logOutBtn = document.getElementById("logout-btn");
const UIuserEmail = document.getElementById("user-email");
const RavalForm = document.getElementById("2aval-form");



// load data from  user
const loadAvalData = async (user) => {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

// process
    if (docSnap.exists()) {
        const userData = docSnap.data();
        UIuserEmail.innerHTML = userData.email;
        for (const [key, value] of Object.entries(userData.avalData || {})) {
            const inputElement = document.querySelector(`#2aval-form [name=${key}]`);
            if (inputElement) {
                inputElement.value = value;
            }
        }
    } else {
        console.log("No such document!");
    }
};

// if user is login authenificate
onAuthStateChanged(auth, (user) => {
    if (user) {
        loadAvalData(user);
    } else {
        window.location.href = '1Login.html';
    }
});

// save data
const saveAvalData = async (user) => {
    const avalData = {};
    const formData = new FormData(RavalForm);
    formData.forEach((value, key) => {
        avalData[key] = value;
    });

    await setDoc(doc(db, "users", user.uid), {
        avalData: avalData
    }, { merge: true });
};
// submit
RavalForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    await saveAvalData(user);
    alert("Aval data saved successfully!");
    
    window.location.href = '4Documents.html';
});
 //log out button
const logOutButtonPressed = async () => {
    try {
        const user = auth.currentUser;
        await saveAvalData(user);
        await signOut(auth);
        window.location.href = '1Login.html';
    } catch (error) {
        console.log(error);
    }
};

logOutBtn.addEventListener("click", logOutButtonPressed);
