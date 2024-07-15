import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-storage.js";
import { db } from './firebase.js';

const auth = getAuth();
const storage = getStorage(); // en esta carpeta se guardaran los archivos con el uid 
const logOutBtn = document.getElementById("logout-btn");
const UIuserEmail = document.getElementById("user-email");
const RdocumentForm = document.getElementById("document-form");

// this is for take it back data from user that was saved snap 
const loadUserData = async (user) => {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const userData = docSnap.data();
        UIuserEmail.innerHTML = userData.email; // i user has data comeback to user frontend
    } else {
        console.log("No such document!"); // if user do not have data come cabk this
    }
};
// if user is not login takes direct to the login page 
onAuthStateChanged(auth, (user) => {
    if (user) {
        loadUserData(user);
    } else {
        window.location.href = '3Login.html';
    }
});

// the documents go direct to firestorage with user id and docnamen 
const uploadDocument = async (file, userId, docName) => {
    const storageRef = ref(storage, `${userId}/${docName}`);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
};

// take url of documents and go to clous firestorage 
const saveDocumentURLs = async (user, urls) => {
    await setDoc(doc(db, "users", user.uid), {
        udocumentURLs: urls
    }, { merge: true });
};
//  now working  submit doc 
RdocumentForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    const DNIinquilino = document.getElementById("1.DNIinquilino").files[0];
    const DNIAval = document.getElementById("2.DNIAval").files[0];
    const Nominas = document.getElementById("3.Nominas").files[0];
    const Ucarta = document.getElementById("4.Cartauniversidad").files[0];
// takes url and save in good way
    const urls = {};

    if (DNIinquilino) urls.DNIinquilino = await uploadDocument(DNIinquilino, user.uid, "1.DNIinquilino");
    if (DNIAval) urls.DNIAval = await uploadDocument(DNIAval, user.uid, "2.DNIAval");
    if (Nominas) urls.Nominas = await uploadDocument(Nominas, user.uid, "3.Nominas");
    if (Ucarta) urls.UCarta = await uploadDocument(Ucarta, user.uid, "4.Cartauniversidad");

    await saveDocumentURLs(user, urls);
    alert("Documents uploaded successfully!");
    // fo next page if works
    window.location.href = '7Final.html';
});

// press log out data save to 
const logOutButtonPressed = async () => {
    try {
        const user = auth.currentUser;
        await signOut(auth);
        window.location.href = '3Login.html';
    } catch (error) {
        console.log(error);
    }
};

logOutBtn.addEventListener("click", logOutButtonPressed);
