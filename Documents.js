document.addEventListener('DOMContentLoaded', function() {
    // Wrap your code inside DOMContentLoaded event to ensure all DOM elements are loaded
    const fileInput1 = document.getElementById('fileInput1');
    const fileInput2 = document.getElementById('fileInput2');
    const fileInput3 = document.getElementById('fileInput3');
    const fileInput4 = document.getElementById('fileInput4');

    if (fileInput1) {
        fileInput1.addEventListener('change', function() {
            var fileName = this.files[0]?.name || '';
            document.getElementById('fileName1').textContent = fileName ? 'Archivo seleccionado: ' + fileName : '';
        });
    }

    if (fileInput2) {
        fileInput2.addEventListener('change', function() {
            var fileName = this.files[0]?.name || '';
            document.getElementById('fileName2').textContent = fileName ? 'Archivo seleccionado: ' + fileName : '';
        });
    }

    if (fileInput3) {
        fileInput3.addEventListener('change', function() {
            var fileName = this.files[0]?.name || '';
            document.getElementById('fileName3').textContent = fileName ? 'Archivo seleccionado: ' + fileName : '';
        });
    }

    if (fileInput4) {
        fileInput4.addEventListener('change', function() {
            var fileName = this.files[0]?.name || '';
            document.getElementById('fileName4').textContent = fileName ? 'Archivo seleccionado: ' + fileName : '';
        });
    }
});


function validateForm() {
    const fileInputs = [
        document.getElementById('fileInput1'),
        document.getElementById('fileInput2'),
        document.getElementById('fileInput3'),
        document.getElementById('fileInput4')
    ];
    
    let allFilled = true;

    fileInputs.forEach(fileInput => {
        if (fileInput.files.length === 0) {
            allFilled = false;
        }
    });

    const message = document.getElementById('message');
    if (allFilled) {
        message.textContent = 'Todos los archivos están seleccionados.';
        message.style.color = 'green';
        // Redirect to the next page
        setTimeout(() => {
            document.location.href = '5Final.html';
        }, 1000);
    } else {
        message.textContent = 'Complete todas las entradas del archivo.';
        message.style.color = 'red';
    }
}

// JSON representation
let formData = {
    documents: [
        { label: "Adjuntar DNI Inquilino", id: "fileInput1", fileName: "" },
        { label: "Adjuntar DNI Aval", id: "fileInput2", fileName: "" },
        { label: "Adjuntar Nóminas", id: "fileInput3", fileName: "" },
        { label: "Adjuntar Carta Universidad", id: "fileInput4", fileName: "" }
    ]
};

// Counter to track number of file inputs changed
let filesChanged = 0;

// Event listener for file input changes
document.addEventListener('change', function(event) {
    formData.documents.forEach(doc => {
        if (event.target.id === doc.id) {
            doc.fileName = event.target.files[0]?.name || "";
        }
    });

    // Increment counter for each file input change
    filesChanged++;

    // Check if all file inputs have been changed
    if (filesChanged === formData.documents.length) {
        console.log(JSON.stringify(formData, null, 2));
        // Reset filesChanged counter if needed for subsequent changes
        filesChanged = 0;
    }
});