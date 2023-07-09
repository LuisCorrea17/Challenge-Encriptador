var botonEncriptar = document.querySelector(".boton-encriptar");
var botonDesencriptar = document.querySelector(".boton-desencriptar");
var contenedor = document.querySelector(".contenedor");
var seccionResultado = document.querySelector(".ocultar");
var botonCopiar = document.querySelector(".boton-copiar");
var copiaTexto;

botonDesencriptar.addEventListener("click", desencriptar);
botonEncriptar.addEventListener("click", encriptar);
botonCopiar.addEventListener("click", copiar);

function obtenerTexto() {
  var texto = document.querySelector(".textarea");
  return texto.value;
}

function copiar() {
  if (copiaTexto != null) {
    navigator.clipboard.writeText(copiaTexto);
  } else {
    alert("Aun no hay nada para copiar");
  }
}

function encriptar() {
  var texto = obtenerTexto();
  if (texto != "") {
    var arrayTexto = texto.split("");
    arrayTexto.forEach(function (caracter, pocision) {
      switch (caracter) {
        case "a":
          arrayTexto[pocision] = "ai";
          break;

        case "e":
          arrayTexto[pocision] = "enter";
          break;

        case "i":
          arrayTexto[pocision] = "imes";
          break;

        case "o":
          arrayTexto[pocision] = "ober";
          break;

        case "u":
          arrayTexto[pocision] = "ufat";
          break;
      }
    });
    var textoCodificado = arrayTexto.join("");
    copiaTexto = textoCodificado;
    contenedor.style.display = "none";
    seccionResultado.innerHTML = `<div class="resultado   "><p> ${textoCodificado} </p>`;
  } else {
    alert("Primero ingrese el texto.");
  }
}

function desencriptar() {
  var textoEncriptado = obtenerTexto();
  if (textoEncriptado != "") {
    var arrayTextoEncriptado = textoEncriptado.split("");
    var textoDesencriptado = "";
    for (var i = 0; i < arrayTextoEncriptado.length; i++) {
      switch (arrayTextoEncriptado[i]) {
        case "a":
          textoDesencriptado += arrayTextoEncriptado[i];
          i = i + 1;
          break;

        case "e":
          textoDesencriptado += arrayTextoEncriptado[i];
          i = i + 4;
          break;

        case "i":
          textoDesencriptado += arrayTextoEncriptado[i];
          i = i + 3;
          break;

        case "o":
          textoDesencriptado += arrayTextoEncriptado[i];
          i = i + 3;
          break;

        case "u":
          textoDesencriptado += arrayTextoEncriptado[i];
          i = i + 3;
          break;

        default:
          textoDesencriptado += arrayTextoEncriptado[i];
          break;
      }
    }
    copiaTexto = textoDesencriptado;
    contenedor.style.display = "none";
    seccionResultado.innerHTML = `<div class="resultado   "><p> ${textoDesencriptado} </p>`;
  } else {
    alert("Primero ingrese el texto.");
  }
}
