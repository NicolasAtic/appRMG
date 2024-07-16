import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js';
import { getStorage } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-storage.js';

const firebaseConfig = {
  apiKey: "AIzaSyC7GaxzdW9yyy3tu3FLMeCeaBWJNq6gOmM",
  authDomain: "apprmg-2f1f0.firebaseapp.com",
  databaseURL: "https://apprmg-2f1f0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "apprmg-2f1f0",
  storageBucket: "apprmg-2f1f0.appspot.com",
  messagingSenderId: "278461104758",
  appId: "1:278461104758:web:797c298a5ea6c5276e5557"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
console.log("Conexión a Firebase establecida correctamente.");
