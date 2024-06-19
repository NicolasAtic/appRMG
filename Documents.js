document.addEventListener('DOMContentLoaded', function() {
    let savedFiles = JSON.parse(localStorage.getItem('formData')) || {
        documents: [
            { label: "Adjuntar DNI Inquilino", id: "fileInput1", fileName: "" },
            { label: "Adjuntar DNI Aval", id: "fileInput2", fileName: "" },
            { label: "Adjuntar Nóminas", id: "fileInput3", fileName: "" },
            { label: "Adjuntar Carta Universidad", id: "fileInput4", fileName: "" }
        ]
    };

    // Function to update file input display based on saved data
    function updateFileInputs() {
        savedFiles.documents.forEach(doc => {
            const input = document.getElementById(doc.id);
            const fileNameDisplay = input.nextElementSibling;
            if (doc.fileName) {
                fileNameDisplay.textContent = 'Selected file: ' + doc.fileName;
            } else {
                fileNameDisplay.textContent = ''; // Clear display if no file selected
            }
        });
    }

    // Update file input display on initial load
    updateFileInputs();

    // Add change event listeners to file inputs
    document.querySelectorAll('input[type="file"]').forEach(input => {
        input.addEventListener('change', function() {
            const fileName = this.files[0]?.name || '';
            const fileId = this.id;

            // Update saved files data
            savedFiles.documents.forEach(doc => {
                if (doc.id === fileId) {
                    doc.fileName = fileName;
                }
            });

            // Save updated files data to local storage
            localStorage.setItem('formData', JSON.stringify(savedFiles));

            // Update file input display
            updateFileInputs();
        });
    });

    // Clear local storage when leaving the page to reset the form state
    window.addEventListener('beforeunload', function() {
        localStorage.removeItem('formData');
    });
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
        message.textContent = 'All files are selected.';
        message.style.color = 'green';
        // Redirect to the next page
        setTimeout(() => {
            document.location.href = '5Final.html';
        }, 1000);
    } else {
        message.textContent = 'Please fill all file inputs.';
        message.style.color = 'red';
    }
}
