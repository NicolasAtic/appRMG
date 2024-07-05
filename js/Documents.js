document.getElementById('registrationForm').addEventListener('submit', uploadFile);

function uploadFile(event) {
  event.preventDefault(); // Prevent default form submission

  const fileInputs = [
    document.getElementById('fileInput1').files[0],
    document.getElementById('fileInput2').files[0],
    document.getElementById('fileInput3').files[0],
    document.getElementById('fileInput4').files[0]
  ];

  if (fileInputs.some(file => !file)) {
    document.getElementById('message').textContent = 'Por favor, seleccione todos los archivos.';
    return; // maybe this is the problem 
  }

  const formData = new FormData();

  const processFile = (file, index) => {
    const reader = new FileReader();

    reader.onload = function() {
      formData.append(`fileContent${index + 1}`, reader.result);
      formData.append(`filename${index + 1}`, file.name);

      if (index === 3) {
        submitData(formData);
      }
    };

    reader.readAsDataURL(file);
  };

  fileInputs.forEach(processFile);
}

function submitData(formData) {
  fetch('https://script.google.com/macros/s/AKfycbykmNuGrzhIG9nkxonJQygGJ7WPpAG84-S44Ialml1ikBp7h4f-pbDhbbwLRf_PXFMKtQ/exec', { // Replace with your actual endpoint
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);

    if (data.result === 'success') {
      window.location.href = '5Final.html';
    } else {
      document.getElementById('message').textContent = 'Error al cargar los datos.';
    }
  })
  .catch((error) => {
    console.error('Error:', error);
    document.getElementById('message').textContent = 'Error al cargar los datos.';
  });
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('fileInput1').addEventListener('change', function() {
      var fileName = this.files[0].name;
      document.getElementById('fileName1').textContent = 'Selected file: ' + fileName;
  });

  document.getElementById('fileInput2').addEventListener('change', function() {
      var fileName = this.files[0].name;
      document.getElementById('fileName2').textContent = 'Selected file: ' + fileName;
  });

  document.getElementById('fileInput3').addEventListener('change', function() {
      var fileName = this.files[0].name;
      document.getElementById('fileName3').textContent = 'Selected file: ' + fileName;
  });

  document.getElementById('fileInput4').addEventListener('change', function() {
      var fileName = this.files[0].name;
      document.getElementById('fileName4').textContent = 'Selected file: ' + fileName;
  });
});
<<<<<<< Updated upstream
=======

// the documents go direct to firestorage 
const uploadDocument = async (file, userId, docName) => {
    const storageRef = ref(storage, `${userId}/${docName}`);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
};

// take url of documents 
const saveDocumentURLs = async (user, urls) => {
    await setDoc(doc(db, "users", user.uid), {
        documentURLs: urls
    }, { merge: true });
};
//  now working 
RdocumentForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    const DNIinquilino = document.getElementById("1.DNIinquilino").files[0];
    const DNIAval = document.getElementById("2.DNIAval").files[0];
    const Nóminas = document.getElementById("3.Nóminas").files[0];
    const Carta= document.getElementById("4.Carta universidad").files[0];

    const urls = {};

    if (DNIinquilino) urls.DNIinquilino = await uploadDocument(DNIinquilino, user.uid, "1.DNIinquilino");
    if (DNIAval) urls.DNIAval = await uploadDocument(DNIAval, user.uid, "2.DNIAval");
    if (Nóminas) urls.document3 = await uploadDocument(Nóminas, user.uid, "3.Nóminas");
    if (Carta) urls.document4 = await uploadDocument(Carta, user.uid, "4.Carta universidad");

    await saveDocumentURLs(user, urls);
    alert("Documents uploaded successfully!");
    // fo next page 
    window.location.href = '5Final.html';
});

// press log out 
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
// didara whyyyy its yur job gs 
>>>>>>> Stashed changes
