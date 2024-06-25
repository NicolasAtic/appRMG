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
