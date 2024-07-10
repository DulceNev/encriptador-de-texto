const botonEncriptador = document.getElementById('button-encryptor')
const botonDesencriptador = document.getElementById('button-decrypt')

const botonParaCopiar = document.getElementById('botonCopiar')

const salidaEncriptacion = document.getElementById('salida__encriptacion')
salidaEncriptacion.style.display = 'none'

const encriptadorInput = document.getElementById('encriptador__texto')
const resultadoInput = document.getElementById('textoResultado')
const sinMensaje = document.getElementById('salida__encriptacion-no-message')


const existeCaracteresEspeciales = (testString) => {
    const regex = /[\p{Emoji}\u00C0-\u024F\u1E00-\u1EFF]/gu;
    return regex.test(testString.match(regex))
};

const copiarTextoClipboard = () => {

    if (resultadoInput.value === '') return alert('No hay nada que copiar...')

    resultadoInput.select()

    navigator.clipboard.writeText(resultadoInput.value);

    alert("Texto copiado: " + resultadoInput.value);

}

const encriptarTexto = () => {

    const encriptadorTexto = encriptadorInput.value;

    if (encriptadorTexto === '') {
        alert('Porfavor, ingresa el texto que quieras encriptar')
        sinMensaje.style.display = 'block'
        return salidaEncriptacion.style.display = 'none'
    }

    if (existeCaracteresEspeciales(encriptadorTexto)) return alert("El texto es invalido! No puedes usar caracteres especiales.")

    salidaEncriptacion.style.display = 'block'
    sinMensaje.style.display = 'none'

    let textArea = encriptadorTexto.toLowerCase()

    let textoEncriptado = ''

    for (let i = 0; i < textArea.length; i++) {

        if (textArea[i] === 'a') {
            textoEncriptado += 'ai'
        }
        else if (textArea[i] === 'e') {
            textoEncriptado += 'enter'
        }
        else if (textArea[i] === 'i') {
            textoEncriptado += 'imes'
        }
        else if (textArea[i] === 'o') {
            textoEncriptado += 'ober'
        }
        else if (textArea[i] === 'u') {
            textoEncriptado += 'ufat'
        } else {
            // Añade la letra actual sin cambios
            textoEncriptado += textArea[i];
        }
    }
    resultadoInput.innerHTML = textoEncriptado


}

const desencriptarTexto = () => {

    const encriptadorTexto = encriptadorInput.value;

    if (encriptadorTexto === '') {
        alert('Porfavor, ingresa el texto que quieras desencriptar')
        sinMensaje.style.display = 'block'
        return salidaEncriptacion.style.display = 'none'
    }
    if (existeCaracteresEspeciales(encriptadorTexto)) return alert("El texto es invalido! No puedes usar caracteres especiales.")


    salidaEncriptacion.style.display = 'block'
    sinMensaje.style.display = 'none'

    let textAreaDecrypt = encriptadorTexto.toLowerCase()
    let respuesta = textAreaDecrypt
        .replaceAll('ai', 'a')
        .replaceAll('enter', 'e')
        .replaceAll('imes', 'i')
        .replaceAll('ober', 'o')
        .replaceAll('ufat', 'u')
    resultadoInput.innerText = respuesta

}

botonEncriptador.addEventListener('click', encriptarTexto)
botonDesencriptador.addEventListener('click', desencriptarTexto)
botonParaCopiar.addEventListener('click', copiarTextoClipboard)


encriptadorInput.addEventListener("keyup", (event) => {
    if (event.code == "Enter") encriptarTexto()
})



