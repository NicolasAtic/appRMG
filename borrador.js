/*document.addEventListener('DOMContentLoaded',
//document.getElementById('registrationForm').addEventListener('submit', function(event) {
 //   event.preventDefault();
//});
function validateRegister() {
    const formData = {
        fullName: document.getElementById('fullName').value,
        documentType: document.querySelector('#documentType input').value,
        documentNumber: document.getElementById('doc').value,
        nationality: document.querySelector('#nationality select').value,
        address: document.getElementById('address').value,
        phone: document.getElementById('phones').value,
        email: document.getElementById('email').value,
        accountNumber: document.getElementById('accountNumber').value,
        terms: document.getElementById('terms').checked
    };

    for (const key in formData) {
        if (formData.hasOwnProperty(key) && formData[key] === "") {
            alert(`Por favor, completa el campo: ${key}`);
            return false;
        }
    }
    if (!formData.terms) {
        alert('Debes aceptar los términos y condiciones.');
        return false;
    }//
// json try 1*/





/*links 
https://docs.google.com/spreadsheets/d/12rTT3O1Y44jpBDJ3Tw0k8Shsm6XH5v1y__Hr5syk42Y/edit?usp=sharing
app sheet
https://script.google.com/macros/s/AKfycbxEIisNzYedz6z9WUyvimxre-XnalPva1yQeWtW7m34wE3vcmJtRRJo1okW1AVJ9_8X/exec
id de implementacion 

AKfycbxEIisNzYedz6z9WUyvimxre-XnalPva1yQeWtW7m34wE3vcmJtRRJo1okW1AVJ9_8X


biblioteca
https://script.google.com/macros/library/d/1YKhxV_8OA5JGU9zbCXqw0dhO_Ar8Sw-rmvWeBv3HyekXbu1VNX5iDu2d/3

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Página Web</title>
    <!-- Configura las cabeceras CORS -->
    <script>
        // Configura las cabeceras CORS en la respuesta
        function setCorsHeaders(response) {
            response.headers.set('Access-Control-Allow-Origin', '*'); // Permite solicitudes desde cualquier origen (para fines de demostración)
            response.headers.set('Access-Control-Allow-Methods', 'GET'); // Permite solo solicitudes GET
            response.headers.set('Access-Control-Allow-Headers', 'Content-Type'); // Permite encabezados específicos
        }

        // Ejemplo de uso en una solicitud fetch
        fetch('https://api.example.com/data')
            .then(response => {
                setCorsHeaders(response); // Configura las cabeceras CORS
                return response.json();
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('Error al obtener los datos:', error);
            });
    </script>
</head>
<label for="docType">Tipo</label>
    <select id="docType" name="docType" class="form-control">
        <option value="Dni">DNI</option>
        <option value="Pss">Pasaporte</option>
        <!-- ... otras opciones ... -->
    </select>
    <input type="text" class="form-control" id="docNumber" name="docNumber" placeholder="número de documento">

<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="11Register.css"> 
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <script>
        document.addEventListener('DOMContentLoaded', (event) => {
            const form = document.getElementById('registrationForm');

            const processAll = (event) => {
                event.preventDefault();
                const datos = new FormData(event.target);
                const datosCompletos = Object.fromEntries(datos.entries());
                console.log(JSON.stringify(datosCompletos));

                // Enviar datos a Google Apps Script
                fetch('https://script.google.com/macros/s/AKfycbyuXAiqXfFccOSzNC55pzsB0JTLOpuDtW25stV-2K2H0NPnKt1lGKPdI0HSjZxdA-U/exec', {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(datosCompletos)
                })
                .then(response => response.json())

                .then(data => {
                    console.log('Success:', data); // esta funcion no esta bien debo revisar sgit
                    // Redirige al usuario a la siguiente página
                    setTimeout(() => {
                        window.location.href = '4RAval.html';
                    }, 1000); // Retrasa la redirección para asegurarse de que el JSON se muestra en la consola
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            }

            form.addEventListener('submit', processAll);
        });
    </script>
</head>
<body>
    <div class="card">
        <div class="center">
            <button onclick="document.location='1Login.html'">
                <i class='bx bx-chevron-left'></i>
            </button>
            <h>Registro </h>
        </div>

        <form action="" id="registrationForm">
            <div class="center1">
                <input type="text" class="form-control" id="fullName" name="fullName" placeholder="Nombre completo">
                <i class='bx bxs-user'></i>
            </div>

            <div class="center1" id="docType">
                <label for="docType">Tipo</label>
                <select id="docType"name="docType"class="form-control">
                    <option value="Dni">DNI</option>
                    <option value="Pss">Pasaporte</option>
                    <option value="Nie">NIE</option>
                    <option value="Nif">NIF</option>
                    <option value="otros">otros</option>
                </select>
                <i class='bx bxs-user'></i>
            </div>

            <div class="center1" id="docNumber" name="docNumber">
                <input type="text" class="form-control" id="docNumber" name="docNumber" placeholder="número de documento">
                <i class='bx bxs-user'></i>
            </div>

            <div class="center1" id="nationality">
                <label for="nationality">Nacionalidad</label>
                <select id="nationality" name="nationality" class="form-control">
                        <option value="Afganistán">Afganistán</option>
                        <option value="Albania">Albania</option>
                        <option value="Alemania">Alemania</option>
                        <option value="Andorra">Andorra</option>
                        <option value="Angola">Angola</option>
                        <option value="Antigua y Barbuda">Antigua y Barbuda</option>
                        <option value="Arabia Saudita">Arabia Saudita</option>
                        <option value="Argelia">Argelia</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Armenia">Armenia</option>
                        <option value="Australia">Australia</option>
                        <option value="Austria">Austria</option>
                        <option value="Azerbaiyán">Azerbaiyán</option>
                        <option value="Bahamas">Bahamas</option>
                        <option value="Bangladés">Bangladés</option>
                        <option value="Barbados">Barbados</option>
                        <option value="Baréin">Baréin</option>
                        <option value="Bélgica">Bélgica</option>
                        <option value="Belice">Belice</option>
                        <option value="Benín">Benín</option>
                        <option value="Bielorrusia">Bielorrusia</option>
                        <option value="Birmania/Myanmar">Birmania/Myanmar</option>
                        <option value="Bolivia">Bolivia</option>
                        <option value="Bosnia y Herzegovina">Bosnia y Herzegovina</option>
                        <option value="Botsuana">Botsuana</option>
                        <option value="Brasil">Brasil</option>
                        <option value="Brunéi">Brunéi</option>
                        <option value="Bulgaria">Bulgaria</option>
                        <option value="Burkina Faso">Burkina Faso</option>
                        <option value="Burundi">Burundi</option>
                        <option value="Bután">Bután</option>
                        <option value="Cabo Verde">Cabo Verde</option>
                        <option value="Camboya">Camboya</option>
                        <option value="Camerún">Camerún</option>
                        <option value="Canadá">Canadá</option>
                        <option value="Catar">Catar</option>
                        <option value="Chad">Chad</option>
                        <option value="Chile">Chile</option>
                        <option value="China">China</option>
                        <option value="Chipre">Chipre</option>
                        <option value="Ciudad del Vaticano">Ciudad del Vaticano</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Comoras">Comoras</option>
                        <option value="Corea del Norte">Corea del Norte</option>
                        <option value="Corea del Sur">Corea del Sur</option>
                        <option value="Costa de Marfil">Costa de Marfil</option>
                        <option value="Costa Rica">Costa Rica</option>
                        <option value="Croacia">Croacia</option>
                        <option value="Cuba">Cuba</option>
                        <option value="Dinamarca">Dinamarca</option>
                        <option value="Dominica">Dominica</option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="Egipto">Egipto</option>
                        <option value="El Salvador">El Salvador</option>
                        <option value="Emiratos Árabes Unidos">Emiratos Árabes Unidos</option>
                        <option value="Eritrea">Eritrea</option>
                        <option value="Eslovaquia">Eslovaquia</option>
                        <option value="Eslovenia">Eslovenia</option>
                        <option value="España">España</option>
                        <option value="Estados Unidos">Estados Unidos</option>
                        <option value="Estonia">Estonia</option>
                        <option value="Etiopía">Etiopía</option>
                        <option value="Filipinas">Filipinas</option>
                        <option value="Finlandia">Finlandia</option>
                        <option value="Fiyi">Fiyi</option>
                        <option value="Francia">Francia</option>
                        <option value="Gabón">Gabón</option>
                        <option value="Gambia">Gambia</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Granada">Granada</option>
                        <option value="Grecia">Grecia</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Guyana">Guyana</option>
                        <option value="Guinea">Guinea</option>
                        <option value="Guinea ecuatorial">Guinea ecuatorial</option>
                        <option value="Guinea-Bisáu">Guinea-Bisáu</option>
                        <option value="Haití">Haití</option>
                        <option value="Honduras">Honduras</option>
                        <option value="Hungría">Hungría</option>
                        <option value="India">India</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Irak">Irak</option>
                        <option value="Irán">Irán</option>
                        <option value="Irlanda">Irlanda</option>
                        <option value="Islandia">Islandia</option>
                        <option value="Islas Marshall">Islas Marshall</option>
                        <option value="Islas Salomón">Islas Salomón</option>
                        <option value="Israel">Israel</option>
                        <option value="Italia">Italia</option>
                        <option value="Jamaica">Jamaica</option>
                        <option value="Japón">Japón</option>
                        <option value="Jordania">Jordania</option>
                        <option value="Kazajistán">Kazajistán</option>
                        <option value="Kenia">Kenia</option>
                        <option value="Kirguistán">Kirguistán</option>
                        <option value="Kiribati">Kiribati</option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Laos">Laos</option>
                        <option value="Lesoto">Lesoto</option>
                        <option value="Letonia">Letonia</option>
                        <option value="Líbano">Líbano</option>
                        <option value="Liberia">Liberia</option>
                        <option value="Libia">Libia</option>
                        <option value="Liechtenstein">Liechtenstein</option>
                        <option value="Lituania">Lituania</option>
                        <option value="Luxemburgo">Luxemburgo</option>
                        <option value="Macedonia del Norte">Macedonia del Norte</option>
                        <option value="Madagascar">Madagascar</option>
                        <option value="Malasia">Malasia</option>
                        <option value="Malaui">Malaui</option>
                        <option value="Maldivas">Maldivas</option>
                        <option value="Malí">Malí</option>
                        <option value="Malta">Malta</option>
                        <option value="Marruecos">Marruecos</option>
                        <option value="Mauricio">Mauricio</option>
                        <option value="Mauritania">Mauritania</option>
                        <option value="México">México</option>
                        <option value="Micronesia">Micronesia</option>
                        <option value="Moldavia">Moldavia</option>
                        <option value="Mónaco">Mónaco</option>
                        <option value="Mongolia">Mongolia</option>
                        <option value="Montenegro">Montenegro</option>
                        <option value="Mozambique">Mozambique</option>
                        <option value="Namibia">Namibia</option>
                        <option value="Nauru">Nauru</option>
                        <option value="Nepal">Nepal</option>
                        <option value="Nicaragua">Nicaragua</option>
                        <option value="Níger">Níger</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Noruega">Noruega</option>
                        <option value="Nueva Zelanda">Nueva Zelanda</option>
                        <option value="Omán">Omán</option>
                        <option value="Países Bajos">Países Bajos</option>
                        <option value="Pakistán">Pakistán</option>
                        <option value="Palaos">Palaos</option>
                        <option value="Panamá">Panamá</option>
                        <option value="Papúa Nueva Guinea">Papúa Nueva Guinea</option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Perú">Perú</option>
                        <option value="Polonia">Polonia</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Reino Unido">Reino Unido</option>
                        <option value="República Centroafricana">República Centroafricana</option>
                        <option value="República Checa">República Checa</option>
                        <option value="República del Congo">República del Congo</option>
                        <option value="República Democrática del Congo">República Democrática del Congo</option>
                        <option value="República Dominicana">República Dominicana</option>
                        <option value="República Sudafricana">República Sudafricana</option>
                        <option value="Ruanda">Ruanda</option>
                        <option value="Rumanía">Rumanía</option>
                        <option value="Rusia">Rusia</option>
                        <option value="Samoa">Samoa</option>
                        <option value="San Cristóbal y Nieves">San Cristóbal y Nieves</option>
                        <option value="San Marino">San Marino</option>
                        <option value="San Vicente y las Granadinas">San Vicente y las Granadinas</option>
                        <option value="Santa Lucía">Santa Lucía</option>
                        <option value="Santo Tomé y Príncipe">Santo Tomé y Príncipe</option>
                        <option value="Senegal">Senegal</option>
                        <option value="Serbia">Serbia</option>
                        <option value="Seychelles">Seychelles</option>
                        <option value="Sierra Leona">Sierra Leona</option>
                        <option value="Singapur">Singapur</option>
                        <option value="Siria">Siria</option>
                        <option value="Somalia">Somalia</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="Suazilandia">Suazilandia</option>
                        <option value="Sudán">Sudán</option>
                        <option value="Sudán del Sur">Sudán del Sur</option>
                        <option value="Suecia">Suecia</option>
                        <option value="Suiza">Suiza</option>
                        <option value="Surinam">Surinam</option>
                        <option value="Tailandia">Tailandia</option>
                        <option value="Tanzania">Tanzania</option>
                        <option value="Tayikistán">Tayikistán</option>
                        <option value="Timor Oriental">Timor Oriental</option>
                        <option value="Togo">Togo</option>
                        <option value="Tonga">Tonga</option>
                        <option value="Trinidad y Tobago">Trinidad y Tobago</option>
                        <option value="Túnez">Túnez</option>
                        <option value="Turkmenistán">Turkmenistán</option>
                        <option value="Turquía">Turquía</option>
                        <option value="Tuvalu">Tuvalu</option>
                        <option value="Ucrania">Ucrania</option>
                        <option value="Uganda">Uganda</option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="Uzbekistán">Uzbekistán</option>
                        <option value="Vanuatu">Vanuatu</option>
                        <option value="Venezuela">Venezuela</option>
                        <option value="Vietnam">Vietnam</option>
                        <option value="Yemen">Yemen</option>
                        <option value="Yibuti">Yibuti</option>
                        <option value="Zambia">Zambia</option>
                        <option value="Zimbabue">Zimbabue</option>
                   </select>
                <i class='bx bxs-user'></i>
            </div>

            <div class="center1"> 
                <input type="text" class="form-control" id="address" name="address" placeholder="Direccion">
                <i class='bx bxs-user'></i></div>

            <div class="center1" id="phone">
                <label for="phone">Teléfono</label>
                <select id="countryCode" name="countryCode" class="form-control">
                    <option data-countryCode="AF" value="93">Afganistán (+93)</option>
                    <option data-countryCode="AL" value="355">Albania (+355)</option>
                    <option data-countryCode="DE" value="49">Alemania (+49)</option>
                    <option data-countryCode="AD" value="376">Andorra (+376)</option>
                    <option data-countryCode="AO" value="244">Angola (+244)</option>
                    <option data-countryCode="AI" value="1264">Anguila (+1264)</option>
                    <option data-countryCode="AQ" value="672">Antártida (+672)</option>
                    <option data-countryCode="AG" value="1268">Antigua y Barbuda (+1268)</option>
                    <option data-countryCode="SA" value="966">Arabia Saudita (+966)</option>
                    <option data-countryCode="AR" value="54">Argentina (+54)</option>
                    <option data-countryCode="AM" value="374">Armenia (+374)</option>
                    <option data-countryCode="AW" value="297">Aruba (+297)</option>
                    <option data-countryCode="AU" value="61">Australia (+61)</option>
                    <option data-countryCode="AT" value="43">Austria (+43)</option>
                    <option data-countryCode="AZ" value="994">Azerbaiyán (+994)</option>
                    <option data-countryCode="BS" value="1242">Bahamas (+1242)</option>
                    <option data-countryCode="BH" value="973">Bahréin (+973)</option>
                    <option data-countryCode="BD" value="880">Bangladesh (+880)</option>
                    <option data-countryCode="BB" value="1246">Barbados (+1246)</option>
                    <option data-countryCode="BE" value="32">Bélgica (+32)</option>
                    <option data-countryCode="BZ" value="501">Belice (+501)</option>
                    <option data-countryCode="BJ" value="229">Benín (+229)</option>
                    <option data-countryCode="BM" value="1441">Bermudas (+1441)</option>
                    <option data-countryCode="BY" value="375">Bielorrusia (+375)</option>
                    <option data-countryCode="MM" value="95">Birmania (+95)</option>
                    <option data-countryCode="BO" value="591">Bolivia (+591)</option>
                    <option data-countryCode="BA" value="387">Bosnia y Herzegovina (+387)</option>
                    <option data-countryCode="BW" value="267">Botsuana (+267)</option>
                    <option data-countryCode="BR" value="55">Brasil (+55)</option>
                    <option data-countryCode="BN" value="673">Brunéi (+673)</option>
                    <option data-countryCode="BG" value="359">Bulgaria (+359)</option>
                    <option data-countryCode="BF" value="226">Burkina Faso (+226)</option>
                    <option data-countryCode="BI" value="257">Burundi (+257)</option>
                    <option data-countryCode="BT" value="975">Bután (+975)</option>
                    <option data-countryCode="CV" value="238">Cabo Verde (+238)</option>
                    <option data-countryCode="KH" value="855">Camboya (+855)</option>
                    <option data-countryCode="CM" value="237">Camerún (+237)</option>
                    <option data-countryCode="CA" value="1">Canadá (+1)</option>
                    <option data-countryCode="QA" value="974">Catar (+974)</option>
                    <option data-countryCode="TD" value="235">Chad (+235)</option>
                    <option data-countryCode="CL" value="56">Chile (+56)</option>
                    <option data-countryCode="CN" value="86">China (+86)</option>
                    <option data-countryCode="CY" value="357">Chipre (+357)</option>
                    <option data-countryCode="VA" value="379">Ciudad del Vaticano (+379)</option>
                    <option data-countryCode="CO" value="57">Colombia (+57)</option>
                    <option data-countryCode="KM" value="269">Comoras (+269)</option>
                    <option data-countryCode="CG" value="242">Congo (+242)</option>
                    <option data-countryCode="CD" value="243">Congo (RDC) (+243)</option>
                    <option data-countryCode="KP" value="850">Corea del Norte (+850)</option>
                    <option data-countryCode="KR" value="82">Corea del Sur (+82)</option>
                    <option data-countryCode="CI" value="225">Costa de Marfil (+225)</option>
                    <option data-countryCode="CR" value="506">Costa Rica (+506)</option>
                    <option data-countryCode="HR" value="385">Croacia (+385)</option>
                    <option data-countryCode="CU" value="53">Cuba (+53)</option>
                    <option data-countryCode="DK" value="45">Dinamarca (+45)</option>
                    <option data-countryCode="DM" value="1767">Dominica (+1767)</option>
                    <option data-countryCode="EC" value="593">Ecuador (+593)</option>
                    <option data-countryCode="EG" value="20">Egipto (+20)</option>
                    <option data-countryCode="SV" value="503">El Salvador (+503)</option>
                    <option data-countryCode="AE" value="971">Emiratos Árabes Unidos (+971)</option>
                    <option data-countryCode="ER" value="291">Eritrea (+291)</option>
                    <option data-countryCode="SK" value="421">Eslovaquia (+421)</option>
                    <option data-countryCode="SI" value="386">Eslovenia (+386)</option>
                    <option data-countryCode="ES" value="34" selected>España (+34)</option>
                    <option data-countryCode="US" value="1">Estados Unidos (+1)</option>
                    <option data-countryCode="EE" value="372">Estonia (+372)</option>
                    <option data-countryCode="ET" value="251">Etiopía (+251)</option>
                    <option data-countryCode="PH" value="63">Filipinas (+63)</option>
                    <option data-countryCode="FI" value="358">Finlandia (+358)</option>
                    <option data-countryCode="FJ" value="679">Fiyi (+679)</option>
                    <option data-countryCode="FR" value="33">Francia (+33)</option>
                    <option data-countryCode="GA" value="241">Gabón (+241)</option>
                    <option data-countryCode="GM" value="220">Gambia (+220)</option>
                    <option data-countryCode="GE" value="995">Georgia (+995)</option>
                    <option data-countryCode="GH" value="233">Ghana (+233)</option>
                    <option data-countryCode="GI" value="350">Gibraltar (+350)</option>
                    <option data-countryCode="GD" value="1473">Granada (+1473)</option>
                    <option data-countryCode="GR" value="30">Grecia (+30)</option>
                    <option data-countryCode="GL" value="299">Groenlandia (+299)</option>
                    <option data-countryCode="GP" value="590">Guadalupe (+590)</option>
                    <option data-countryCode="GU" value="1671">Guam (+1671)</option>
                    <option data-countryCode="GT" value="502">Guatemala (+502)</option>
                    <option data-countryCode="GY" value="592">Guayana (+592)</option>
                    <option data-countryCode="GF" value="594">Guayana Francesa (+594)</option>
                    <option data-countryCode="GN" value="224">Guinea (+224)</option>
                    <option data-countryCode="GQ" value="240">Guinea Ecuatorial (+240)</option>
                    <option data-countryCode="GW" value="245">Guinea-Bisáu (+245)</option>
                    <option data-countryCode="HT" value="509">Haití (+509)</option>
                    <option data-countryCode="HN" value="504">Honduras (+504)</option>
                    <option data-countryCode="HK" value="852">Hong Kong (+852)</option>
                    <option data-countryCode="HU" value="36">Hungría (+36)</option>
                    <option data-countryCode="IN" value="91">India (+91)</option>
                    <option data-countryCode="ID" value="62">Indonesia (+62)</option>
                    <option data-countryCode="IR" value="98">Irán (+98)</option>
                    <option data-countryCode="IQ" value="964">Iraq (+964)</option>
                    <option data-countryCode="IE" value="353">Irlanda (+353)</option>
                    <option data-countryCode="IS" value="354">Islandia (+354)</option>
                    <option data-countryCode="IL" value="972">Israel (+972)</option>
                    <option data-countryCode="IT" value="39">Italia (+39)</option>
                    <option data-countryCode="JM" value="1876">Jamaica (+1876)</option>
                    <option data-countryCode="JP" value="81">Japón (+81)</option>
                    <option data-countryCode="JO" value="962">Jordania (+962)</option>
                    <option data-countryCode="KZ" value="7">Kazajistán (+7)</option>
                    <option data-countryCode="KE" value="254">Kenia (+254)</option>
                    <option data-countryCode="KG" value="996">Kirguistán (+996)</option>
                    <option data-countryCode="KI" value="686">Kiribati (+686)</option>
                    <option data-countryCode="KW" value="965">Kuwait (+965)</option>
                    <option data-countryCode="LA" value="856">Laos (+856)</option>
                    <option data-countryCode="LS" value="266">Lesoto (+266)</option>
                    <option data-countryCode="LV" value="371">Letonia (+371)</option>
                    <option data-countryCode="LB" value="961">Líbano (+961)</option>
                    <option data-countryCode="LR" value="231">Liberia (+231)</option>
                    <option data-countryCode="LY" value="218">Libia (+218)</option>
                    <option data-countryCode="LI" value="423">Liechtenstein (+423)</option>
                    <option data-countryCode="LT" value="370">Lituania (+370)</option>
                    <option data-countryCode="LU" value="352">Luxemburgo (+352)</option>
                    <option data-countryCode="MO" value="853">Macao (+853)</option>
                    <option data-countryCode="MK" value="389">Macedonia (+389)</option>
                    <option data-countryCode="MG" value="261">Madagascar (+261)</option>
                    <option data-countryCode="MY" value="60">Malasia (+60)</option>
                    <option data-countryCode="MW" value="265">Malaui (+265)</option>
                    <option data-countryCode="MV" value="960">Maldivas (+960)</option>
                    <option data-countryCode="ML" value="223">Malí (+223)</option>
                    <option data-countryCode="MT" value="356">Malta (+356)</option>
                    <option data-countryCode="MA" value="212">Marruecos (+212)</option>
                    <option data-countryCode="MQ" value="596">Martinica (+596)</option>
                    <option data-countryCode="MR" value="222">Mauritania (+222)</option>
                    <option data-countryCode="MU" value="230">Mauricio (+230)</option>
                    <option data-countryCode="YT" value="262">Mayotte (+262)</option>
                    <option data-countryCode="MX" value="52">México (+52)</option>
                    <option data-countryCode="FM" value="691">Micronesia (+691)</option>
                    <option data-countryCode="MD" value="373">Moldavia (+373)</option>
                    <option data-countryCode="MC" value="377">Mónaco (+377)</option>
                    <option data-countryCode="MN" value="976">Mongolia (+976)</option>
                    <option data-countryCode="ME" value="382">Montenegro (+382)</option>
                    <option data-countryCode="MS" value="1664">Montserrat (+1664)</option>
                    <option data-countryCode="MZ" value="258">Mozambique (+258)</option>
                    <option data-countryCode="NA" value="264">Namibia (+264)</option>
                    <option data-countryCode="NR" value="674">Nauru (+674)</option>
                    <option data-countryCode="NP" value="977">Nepal (+977)</option>
                    <option data-countryCode="NI" value="505">Nicaragua (+505)</option>
                    <option data-countryCode="NE" value="227">Níger (+227)</option>
                    <option data-countryCode="NG" value="234">Nigeria (+234)</option>
                    <option data-countryCode="NU" value="683">Niue (+683)</option>
                    <option data-countryCode="NO" value="47">Noruega (+47)</option>
                    <option data-countryCode="NC" value="687">Nueva Caledonia (+687)</option>
                    <option data-countryCode="NZ" value="64">Nueva Zelanda (+64)</option>
                    <option data-countryCode="OM" value="968">Omán (+968)</option>
                    <option data-countryCode="NL" value="31">Países Bajos (+31)</option>
                    <option data-countryCode="PK" value="92">Pakistán (+92)</option>
                    <option data-countryCode="PW" value="680">Palaos (+680)</option>
                    <option data-countryCode="PA" value="507">Panamá (+507)</option>
                    <option data-countryCode="PG" value="675">Papúa Nueva Guinea (+675)</option>
                    <option data-countryCode="PY" value="595">Paraguay (+595)</option>
                    <option data-countryCode="PE" value="51">Perú (+51)</option>
                    <option data-countryCode="PN" value="64">Pitcairn (+64)</option>
                    <option data-countryCode="PF" value="689">Polinesia Francesa (+689)</option>
                    <option data-countryCode="PL" value="48">Polonia (+48)</option>
                    <option data-countryCode="PT" value="351">Portugal (+351)</option>
                    <option data-countryCode="PR" value="1787">Puerto Rico (+1787)</option>
                    <option data-countryCode="GB" value="44">Reino Unido (+44)</option>
                    <option data-countryCode="CF" value="236">República Centroafricana (+236)</option>
                    <option data-countryCode="CZ" value="420">República Checa (+420)</option>
                    <option data-countryCode="DO" value="1809">República Dominicana (+1809)</option>
                    <option data-countryCode="RE" value="262">Reunión (+262)</option>
                    <option data-countryCode="RW" value="250">Ruanda (+250)</option>
                    <option data-countryCode="RO" value="40">Rumania (+40)</option>
                    <option data-countryCode="RU" value="7">Rusia (+7)</option>
                    <option data-countryCode="EH" value="212">Sahara Occidental (+212)</option>
                    <option data-countryCode="WS" value="685">Samoa (+685)</option>
                    <option data-countryCode="AS" value="1684">Samoa Americana (+1684)</option>
                    <option data-countryCode="BL" value="590">San Bartolomé (+590)</option>
                    <option data-countryCode="KN" value="1869">San Cristóbal y Nieves (+1869)</option>
                    <option data-countryCode="SM" value="378">San Marino (+378)</option>
                    <option data-countryCode="MF" value="590">San Martín (+590)</option>
                    <option data-countryCode="PM" value="508">San Pedro y Miquelón (+508)</option>
                    <option data-countryCode="VC" value="1784">San Vicente y las Granadinas (+1784)</option>
                    <option data-countryCode="SH" value="290">Santa Elena (+290)</option>
                    <option data-countryCode="LC" value="1758">Santa Lucía (+1758)</option>
                    <option data-countryCode="ST" value="239">Santo Tomé y Príncipe (+239)</option>
                    <option data-countryCode="SN" value="221">Senegal (+221)</option>
                    <option data-countryCode="RS" value="381">Serbia (+381)</option>
                    <option data-countryCode="SC" value="248">Seychelles (+248)</option>
                    <option data-countryCode="SL" value="232">Sierra Leona (+232)</option>
                    <option data-countryCode="SG" value="65">Singapur (+65)</option>
                    <option data-countryCode="SX" value="1721">Sint Maarten (+1721)</option>
                    <option data-countryCode="SY" value="963">Siria (+963)</option>
                    <option data-countryCode="SO" value="252">Somalia (+252)</option>
                    <option data-countryCode="LK" value="94">Sri Lanka (+94)</option>
                    <option data-countryCode="SZ" value="268">Suazilandia (+268)</option>
                    <option data-countryCode="ZA" value="27">Sudáfrica (+27)</option>
                    <option data-countryCode="SD" value="249">Sudán (+249)</option>
                    <option data-countryCode="SS" value="211">Sudán del Sur (+211)</option>
                    <option data-countryCode="SE" value="46">Suecia (+46)</option>
                    <option data-countryCode="CH" value="41">Suiza (+41)</option>
                    <option data-countryCode="SR" value="597">Surinam (+597)</option>
                    <option data-countryCode="SJ" value="47">Svalbard y Jan Mayen (+47)</option>
                    <option data-countryCode="TH" value="66">Tailandia (+66)</option>
                    <option data-countryCode="TW" value="886">Taiwán (+886)</option>
                    <option data-countryCode="TZ" value="255">Tanzania (+255)</option>
                    <option data-countryCode="TJ" value="992">Tayikistán (+992)</option>
                    <option data-countryCode="IO" value="246">Territorio Británico del Océano Índico (+246)</option>
                    <option data-countryCode="PS" value="970">Territorios Palestinos (+970)</option>
                    <option data-countryCode="TL" value="670">Timor Oriental (+670)</option>
                    <option data-countryCode="TG" value="228">Togo (+228)</option>
                    <option data-countryCode="TK" value="690">Tokelau (+690)</option>
                    <option data-countryCode="TO" value="676">Tonga (+676)</option>
                    <option data-countryCode="TT" value="1868">Trinidad y Tobago (+1868)</option>
                    <option data-countryCode="TN" value="216">Túnez (+216)</option>
                    <option data-countryCode="TM" value="993">Turkmenistán (+993)</option>
                    <option data-countryCode="TR" value="90">Turquía (+90)</option>
                    <option data-countryCode="TV" value="688">Tuvalu (+688)</option>
                    <option data-countryCode="UA" value="380">Ucrania (+380)</option>
                    <option data-countryCode="UG" value="256">Uganda (+256)</option>
                    <option data-countryCode="UY" value="598">Uruguay (+598)</option>
                    <option data-countryCode="UZ" value="998">Uzbekistán (+998)</option>
                    <option data-countryCode="VU" value="678">Vanuatu (+678)</option>
                    <option data-countryCode="VA" value="379">Vaticano (Ciudad del Vaticano) (+379)</option>
                    <option data-countryCode="VE" value="58">Venezuela (+58)</option>
                    <option data-countryCode="VN" value="84">Vietnam (+84)</option>
                    <option data-countryCode="WF" value="681">Wallis y Futuna (+681)</option>
                    <option data-countryCode="YE" value="967">Yemen (+967)</option>
                    <option data-countryCode="DJ" value="253">Yibuti (+253)</option>
                    <option data-countryCode="ZM" value="260">Zambia (+260)</option>
                    <option data-countryCode="ZW" value="263">Zimbabue (+263)</option>
                </select>
                <input type="text" class="form-control" id="phone" name="phone" placeholder="Teléfono" pattern="[0-9]+" title="Please enter only digits">
                <i class='bx bxs-user'></i>
            </div>

            <div class="center1">
                <input type="email"class="form-control" id="email" name="email" placeholder="Email">
                <i class='bx bxs-user'></i>
            </div>

            <div class="center1">
                <input type="text" class="form-control" id="accountNumber" name="accountNumber" placeholder="Número de cuenta" required>
                <i class='bx bxs-user'></i>
            </div>

            <div>
                <input type="checkbox" class="form-control" id="terms" name="terms"> Acepto los términos y condiciones <br>
            </div>
            <a href="1Login.html" target="_blank">Hacerlo más tarde</a>

            <div class="register">
                <button type="submit">Siguiente</button>
            </div> 
            
        </form>
    </div>
    

</body>
</html>


// Escucha el evento de envío del formulario
const form = document.querySelector('#registrationForm');
form.addEventListener('submit', processall);

function processall(event) {
    event.preventDefault();

    // Obtén los datos del formulario
    const datos = new FormData(event.target);
    const datosCompletos = Object.fromEntries(datos.entries());

    // Convierte los datos a formato JSON
    const json_data = JSON.stringify(datosCompletos);

    // Almacena los datos en el almacenamiento local
    localStorage.setItem('form_data', json_data);

    // show data
    console.log('Datos guardados en formato JSON:');
    console.log(json_data);

    // brings the other page
    window.location.href = '3RAval.html';
}
/*function validateRegister() {    
        const fullName = document.getElementById('fullName').value;
        const documentType = document.getElementById('documentType').value;
        const nationality = document.getElementById('nationality').value;
        const address = document.getElementById('address').value;
        const phone = document.getElementById('phones').value;
        const email = document.getElementById('email').value;
        const accountNumber = document.getElementById('accountNumber').value;
        const terms = document.getElementById('terms').checked;

for (const key in !fullName  || !documentType || !nationality  || !address || !phone || !email || !accountNumber || !terms) {
    if (!fullName || !documentType || !nationality || !address || !phone || !email || !accountNumber || !terms.hasOwnProperty(key) 
        && !fullName || !documentType || !nationality || !address || !phone || !email || !accountNumber || !terms[key] === "") {
        alert(`Por favor, completa el campo: ${key}`);
        return false;
    }
else {
    window.location.href = "3RAval.html"; 
}
}
document.getElementById('registrationForm').submit();
validateRegister
};



// Convertir datos a XML
        //let xmlData = '<registration>';
       // for (const key in formData) {
       //     xmlData += `<${key}>${formData[key]}</${key}>`;
       // }
       // xmlData += '</registration>';
       //console.log('Datos en formato XML:');
// console.log(xmlData);

       // Enviar el formulario (descomenta esta línea si deseas enviarlo realmente);


       const processall = (event) => {
    event.preventDefault();
    const datos = new FormData(event.target);
    const datosCompletos = Object.fromEntries(datos.entries());
    console.log(JSON.stringify(datosCompletos));

    // Redirige al usuario a la siguiente página
    window.location.href = '3RAval.html';
}
form.addEventListener('submit', processall);

// Escucha el evento de envío del formulario
const form = document.querySelector('#registrationForm');
form.addEventListener('submit', processall);

function processall(event) {
    event.preventDefault();

    // Obtén los datos del formulario
    const datos = new FormData(event.target);
    const datosCompletos = Object.fromEntries(datos.entries());

    // Convierte los datos a formato JSON
    const json_data = JSON.stringify(datosCompletos);

    // Almacena los datos en el almacenamiento local
    localStorage.setItem('form_data', json_data);

    // Redirige al usuario a la siguiente página
    window.location.href = '3RAval.html';
}*/

