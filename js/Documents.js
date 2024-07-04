// documents.js
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-storage.js";
import { db } from './firebase.js';

const auth = getAuth();
const storage = getStorage();
const logOutBtn = document.getElementById("logout-btn");
const UIuserEmail = document.getElementById("user-email");
const documentForm = document.getElementById("document-form");

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
// if user is not login takes direct to the login page 
onAuthStateChanged(auth, (user) => {
    if (user) {
        loadUserData(user);
    } else {
        window.location.href = '1Login.html';
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

documentForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    const document1 = document.getElementById("document1").files[0];
    const document2 = document.getElementById("document2").files[0];
    const document3 = document.getElementById("document3").files[0];
    const document4 = document.getElementById("document4").files[0];

    const urls = {};

    if (document1) urls.document1 = await uploadDocument(document1, user.uid, "document1");
    if (document2) urls.document2 = await uploadDocument(document2, user.uid, "document2");
    if (document3) urls.document3 = await uploadDocument(document3, user.uid, "document3");
    if (document4) urls.document4 = await uploadDocument(document4, user.uid, "document4");

    await saveDocumentURLs(user, urls);
    alert("Documents uploaded successfully!");
    // Redirige a la siguiente página o procesa según sea necesario
});

const logOutButtonPressed = async () => {
    try {
        const user = auth.currentUser;
        await signOut(auth);
        window.location.href = '1Login.html';
    } catch (error) {
        console.log(error);
    }
};

logOutBtn.addEventListener("click", logOutButtonPressed);
