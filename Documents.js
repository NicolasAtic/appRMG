document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('fileInput1').addEventListener('change', function() {
        var fileName = this.files[0]?.name || '';
        document.getElementById('fileName1').textContent = fileName ? 'Selected file: ' + fileName : '';
    });

    document.getElementById('fileInput2').addEventListener('change', function() {
        var fileName = this.files[0]?.name || '';
        document.getElementById('fileName2').textContent = fileName ? 'Selected file: ' + fileName : '';
    });

    document.getElementById('fileInput3').addEventListener('change', function() {
        var fileName = this.files[0]?.name || '';
        document.getElementById('fileName3').textContent = fileName ? 'Selected file: ' + fileName : '';
    });

    document.getElementById('fileInput4').addEventListener('change', function() {
        var fileName = this.files[0]?.name || '';
        document.getElementById('fileName4').textContent = fileName ? 'Selected file: ' + fileName : '';
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


// JSON representation
let formData = {
    documents: [
        { label: "Adjuntar DNI Inquilino", id: "fileInput1", fileName: "" },
        { label: "Adjuntar DNI Aval", id: "fileInput2", fileName: "" },
        { label: "Adjuntar Nóminas", id: "fileInput3", fileName: "" },
        { label: "Adjuntar Carta Universidad", id: "fileInput4", fileName: "" }
    ]
};

document.addEventListener('change', function(event) {
    formData.documents.forEach(doc => {
        if (event.target.id === doc.id) {
            doc.fileName = event.target.files[0]?.name || "";
        }
    });

    console.log(JSON.stringify(formData, null, 2));
});


// XML representation
document.addEventListener('change', function(event) {
    const parser = new DOMParser();
    const xmlString = `
        <documents>
            <document>
                <label>Adjuntar DNI Inquilino</label>
                <id>fileInput1</id>
                <fileName></fileName>
            </document>
            <document>
                <label>Adjuntar DNI Aval</label>
                <id>fileInput2</id>
                <fileName></fileName>
            </document>
            <document>
                <label>Adjuntar Nóminas</label>
                <id>fileInput3</id>
                <fileName></fileName>
            </document>
            <document>
                <label>Adjuntar Carta Universidad</label>
                <id>fileInput4</id>
                <fileName></fileName>
            </document>
        </documents>`;
    const xmlDoc = parser.parseFromString(xmlString, "application/xml");

    const documents = xmlDoc.getElementsByTagName('document');
    for (let doc of documents) {
        if (doc.getElementsByTagName('id')[0].textContent === event.target.id) {
            doc.getElementsByTagName('fileName')[0].textContent = event.target.files[0]?.name || "";
        }
    }

    const serializer = new XMLSerializer();
    const updatedXMLString = serializer.serializeToString(xmlDoc);
    console.log(updatedXMLString);
});
