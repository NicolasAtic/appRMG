import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
<<<<<<< HEAD
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-storage.js";
import { db } from './firebase';
=======
import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-storage.js";
import { db, storage } from './firebase.js';
>>>>>>> 26f7a1e5976d63b3ddf4eb308d7aae1bee7dcd7c

const auth = getAuth();
const logOutBtn = document.getElementById("logout-btn");
const UIuserEmail = document.getElementById("user-email");
const RdocumentForm = document.getElementById("document-form");

const loadUserData = async (user) => {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const userData = docSnap.data();
        UIuserEmail.innerHTML = userData.email;
    } else {
        console.log("No such document!");
    }
};

onAuthStateChanged(auth, (user) => {
    if (user) {
        loadUserData(user);
    } else {
        window.location.href = '3Login.html';
    }
});

const uploadDocument = async (file, userId, docName) => {
    const storageRef = ref(storage, `${userId}/${docName}`);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
};

const saveDocumentURLs = async (user, urls) => {
    await setDoc(doc(db, "users", user.uid), {
        documentURLs: urls
    }, { merge: true });
};

RdocumentForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    const DNIinquilino = document.getElementById("1.DNIinquilino").files[0];
    const DNIAval = document.getElementById("2.DNIAval").files[0];
    const Nominas = document.getElementById("3.Nominas").files[0];
    const Ucarta = document.getElementById("4.Cartauniversidad").files[0];

    const urls = {};

    if (DNIinquilino) urls.DNIinquilino = await uploadDocument(DNIinquilino, user.uid, "1.DNIinquilino");
    if (DNIAval) urls.DNIAval = await uploadDocument(DNIAval, user.uid, "2.DNIAval");
    if (Nominas) urls.Nominas = await uploadDocument(Nominas, user.uid, "3.Nominas");
    if (Ucarta) urls.UCarta = await uploadDocument(Ucarta, user.uid, "4.Cartauniversidad");

    await saveDocumentURLs(user, urls);
    alert("Documents uploaded successfully!");
    window.location.href = '7Final.html';
});

const logOutButtonPressed = async () => {
    try {
        await signOut(auth);
        window.location.href = '3Login.html';
    } catch (error) {
        console.log(error);
    }
};

logOutBtn.addEventListener("click", logOutButtonPressed);
