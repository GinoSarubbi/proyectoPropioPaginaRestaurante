const eyes = document.querySelector("#iconeye");

eyes.addEventListener("click", function () {
  const icon = this.querySelector("i");

  if (this.nextElementSibling.type === "password") {
    this.nextElementSibling.type = "text";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  } else {
    this.nextElementSibling.type = "password";
    icon.classList.add("fa-eye-slash");
    icon.classList.remove("fa-eye");
  }
});

function esNumeroOSimbolo(c) {
  return c.length == 1 && c == c.toUpperCase() && c == c.toLowerCase();
}

function tieneNyS(s) {
  let i = 0;
  let hayNyS = false;
  const longitud = s.length;
  while (i < longitud) {
    const NyS = s.charAt(i);
    if (esNumeroOSimbolo(NyS)) {
      hayNyS = true;
      break;
    }
    i++;
  }
  return hayNyS;
}

function revisar() {
  const contra1 = document.querySelector("#input2").value;

  if (contra1.length < 8) {
    ponerErrorCorta();
  } else if (!tieneMayusculas(contra1)) {
    ponerErrorSinMayusculas();
  } else if (!tieneMinusculas(contra1)) {
    ponerErrorSinMinusculas();
  } else if (!tieneNyS(contra1)) {
    ponerErrorSinSyN();
  } else if (contra1 == contra1) {
    ponerOk();
  } else {
    ponerError();
  }
}

//

function esLetraMayuscula(c) {
  return c.length == 1 && c == c.toUpperCase() && c != c.toLowerCase();
}
function esLetraMinuscula(c) {
  return c.length == 1 && c != c.toUpperCase() && c == c.toLowerCase();
}
function esNumeroOSimbolo(c) {
  return c.length == 1 && c == c.toUpperCase() && c == c.toLowerCase();
}

function tieneMayusculas(s) {
  let i = 0;
  let hayMayusculas = false;
  const longitud = s.length;
  while (i < longitud) {
    const letra = s.charAt(i);
    if (esLetraMayuscula(letra)) {
      hayMayusculas = true;
      break;
    }
    i++;
  }
  return hayMayusculas;
}
function tieneMinusculas(s) {
  let i = 0;
  let hayMinusculas = false;
  const longitud = s.length;
  while (i < longitud) {
    const letra = s.charAt(i);
    if (esLetraMinuscula(letra)) {
      hayMinusculas = true;
      break;
    }
    i++;
  }
  return hayMinusculas;
}

function ponerOk() {
  const msj = document.querySelector("#msj-contra");
  msj.innerText = "Correcto";
  msj.className = "msj-ok";
}
//function ponerOk2() {
//const msj = document.querySelector("#msj-contra");
//msj.innerText = "CoincidenNNNNNNNNNNNN";
//msj.className = "msj-ok";
//}
//function ponerError() {
//const msj = document.querySelector("#msj-contra");
//msj.innerText = "No coinciden";
//msj.className = "msj-error";
//}
//function ponerErrorLarga() {
//const msj = document.querySelector("#msj-contra");
//msj.innerText = "No se permiten mas de 24 digitos";
//msj.className = "msj-error";
//}
function ponerErrorCorta() {
  const msj = document.querySelector("#msj-contra");
  msj.innerText = "Contraseña muy corta";
  msj.className = "msj-error";
}
function ponerErrorSinMayusculas() {
  const msj = document.querySelector("#msj-contra");
  msj.innerText = "Contraseña sin mayúsculas";
  msj.className = "msj-error";
}
function ponerErrorSinMinusculas() {
  const msj = document.querySelector("#msj-contra");
  msj.innerText = "Contraseña sin minúsculas";
  msj.className = "msj-error";
}
function ponerErrorSinSyN() {
  const msj = document.querySelector("#msj-contra");
  msj.innerText = "No tienen numeros ni simbolos";
  msj.className = "msj-error";
}

function contarMayusculas(s) {
  let i = 0;
  let mayusculas = 0;
  const longitud = s.length;
  while (i < longitud) {
    const letra = s.charAt(i);
    if (esLetraMayuscula(letra)) {
      mayusculas++;
    }
    i++;
  }
  return mayusculas;
}
function indiceMayuscula(s, inicio) {
  let i = inicio;
  let indiceMayuscula = -1;
  const longitud = s.length;
  while (i < longitud) {
    const letra = s.charAt(i);
    if (esLetraMayuscula(letra)) {
      indiceMayuscula = i;
      break;
    }
    i++;
  }
  return indiceMayuscula;
}
