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