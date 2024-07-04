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


// script del html con esto duncioa ba lo delos
    function UploadFile() {
        const files = ['fileInput1', 'fileInput2', 'fileInput3', 'fileInput4'];
        
        let fileCount = files.length;

        files.forEach((fileInputId, index) => {
            const fileInput = document.getElementById(fileInputId);
            const file = fileInput.files[0];
            const reader = new FileReader();
            
            reader.onload = function() {
                document.getElementById(`fileContent${index + 1}`).value = reader.result;
                document.getElementById(`filename${index + 1}`).value = file.name;
                
            fileCount--;
                if (fileCount === 0) {
                    // All files are processed, submit the form
                    fetch(document.getElementById('registrationForm').action, {
                        method: 'POST',
                        body: new FormData(document.getElementById('registrationForm'))
                    }).then(response => response.json())
                    .then(data => {
                        if (data.message) {
                              window.location.href = '5Final.html'; // Change 'nextPage.html' to your actual next page URL
                        } else {
                            document.getElementById('message').textContent = 'Error: ' + data.error;
                        }
                    }).catch(error => {
                        document.getElementById('message').textContent = 'Error: ' + error.message;
                    });
                }
            };
            
            if (file) {
                reader.readAsDataURL(file);
            }
        });
    }
    

