import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
import { db } from './firebase.js';

const auth = getAuth();
const logOutBtn = document.getElementById("logout-btn");
const UIuserEmail = document.getElementById("user-email");
const mainForm = document.getElementById("main-form");

// se llama a la fata del usuario si existe pone la informacion
const loadUserData = async (user) => {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        // Carga los datos del usuario en el formulario principal
        const userData = docSnap.data();
        UIuserEmail.innerHTML = userData.email;
        // Rellenar formulario con userData.mainData
        for (const [key, value] of Object.entries(userData.mainData)) {
            const inputElement = document.querySelector(`#main-form [name=${key}]`);
            if (inputElement) {
                inputElement.value = value;
            }
        }
    } else {
        // si no encuentra data da lo siguiente la primera vez despues de crear
        console.log("No such document!");
    }
};
// autentifica que el usuario esta logeado sino redirige a login
onAuthStateChanged(auth, (user) => {
    if (user) {
        loadUserData(user);
    } else {
        window.location.href = '1Login.html'; // Redirige al login si no hay usuario autenticado
    }
});
// si se completa el formulario guarda la informacion para esto se creo un objeto formdata por si se cambian los campos a futuro
const saveUserData = async (user) => {
    const mainData = {};
    const formData = new FormData(mainForm);
    formData.forEach((value, key) => {
        mainData[key] = value;
    });

    await setDoc(doc(db, "users", user.uid), {
        mainData: mainData
    }, { merge: true }); // Merge mantiene los datos existentes y actualiza los nuevos
};
// al presionar siguiente esta informacion se guarda y te da una alerta de que se guardo bien y te dirigue a la siguiente
mainForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    await saveUserData(user);
    alert("Data saved successfully!");
    window.location.href = '3RAval.html';
});
// para salit con el boton hacerlo mas tarde igualmente guarda la info
const logOutButtonPressed = async () => {
    try {
        const user = auth.currentUser;
        await saveUserData(user); // Guarda los datos del usuario antes de cerrar sesión
        await signOut(auth);
        window.location.href = '1Login.html'; // Redirige al login después de cerrar sesión
    } catch (error) {
        console.log(error);
    }
};

logOutBtn.addEventListener("click", logOutButtonPressed);
