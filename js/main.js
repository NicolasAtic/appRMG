
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
import { db } from './firebase.js';

// Obtén las referencias de Firebase Auth y Firestore
const auth = getAuth();
const UIuserEmail = document.getElementById("user-email");
const logOutBtn = document.getElementById("logout-btn");
const mainForm = document.getElementById("registrationForm");

const loadUserData = async (user) => {
    try {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);  
       
        if (docSnap.exists()) {
            // Carga los datos del usuario en el formulario principal
            const userData = docSnap.data();
            UIuserEmail.innerHTML = userData.email;
            // Rellena el formulario con userData.mainData
        } else {
            console.log("No existe ese documento.");
        }
    } catch (error) {
        console.error("Error al cargar los datos del usuario:", error);
      }
};

onAuthStateChanged(auth, (user) => {
    if (user) {
        loadUserData(user);
    } else {
        window.location.href = '../1Login.html'; // Redirige al inicio de sesión si no hay usuario autenticado
    }
});

const saveUserData = async (user) => {
    try {
        const mainData = {
          fullName: mainForm.fullName.value,
          docType: mainForm.docType.value,
          docNumber: mainForm.docNumber.value,
          nationality: mainForm.nationality.value,
          address: mainForm.address.value,
          countryCode: mainForm.countryCode.fullName.value,
          phone: mainForm.phone.value,
          email: mainForm.email.value,
          accountNumber: mainForm.accountNumber.value,
          accountCode: mainForm.accountCode.value,
          terms: mainForm.terms.checked
        }; // Recopila los datos del formulario principal
        console.log(mainData)

        await setDoc(doc(db, "users", user.uid), {
            mainData: mainData
        }, { merge: true }); // Merge mantiene los datos existentes y actualiza los nuevos
        console.log ("datos guardados correctamente ");
    } 
      
      catch (error) {
        console.error("Error al guardar los datos del usuario:", error);
      }
};

// Evento de envío del formulario
mainForm.addEventListener("submit", async (event) => {
  event.preventDefault(); // Evita la recarga de la página
  const user = auth.currentUser;
  await saveUserData(user);
  // Opcionalmente, redirige al usuario a otra página o muestra un mensaje de éxito
  window.location.href = '3RAval.html';
});
const logOutButtonPressed = async () => {
    try {
        const user = auth.currentUser;
        await saveUserData(user); // Guarda los datos del usuario antes de cerrar sesión
        await signOut(auth);
        window.location.href = '../1Login.html'; // Redirige al inicio de sesión después de cerrar sesión
    } catch (error) {
        console.error("Error al cerrar sesión:", error);
    }
};
logOutBtn.addEventListener("click", logOutButtonPressed);

// hay que autenticar jaqui al usuario asi funcionara ya que con singin 