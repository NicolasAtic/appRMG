document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('fileInput1').addEventListener('change', function() {
        var fileName = this.files[0]?.name || '';
        document.getElementById('fileName1').textContent = fileName ? 'Archivo seleccionado: ' + fileName : '';
    });

    document.getElementById('fileInput2').addEventListener('change', function() {
        var fileName = this.files[0]?.name || '';
        document.getElementById('fileName2').textContent = fileName ? 'Archivo seleccionado: ' + fileName : '';
    });

    document.getElementById('fileInput3').addEventListener('change', function() {
        var fileName = this.files[0]?.name || '';
        document.getElementById('fileName3').textContent = fileName ? 'Archivo seleccionado: ' + fileName : '';
    });

    document.getElementById('fileInput4').addEventListener('change', function() {
        var fileName = this.files[0]?.name || '';
        document.getElementById('fileName4').textContent = fileName ? 'Archivo seleccionado: ' + fileName : '';
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