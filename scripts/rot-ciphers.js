const findActiveVariant = () => {
  let activeRotVariant;
  const rotVariants = document.querySelectorAll(".rot");
  // Corroboramos que exista
  if (rotVariants) {
    // Iterar sobre todos los botones con la clase "rot"
    rotVariants.forEach((btn) => {
      // Verificar si el botón actual tiene la clase "active"
      if (btn.classList.contains("active")) {
        // Asignar el valor correspondiente a la variable
        activeRotVariant = btn.querySelector(".rot-name").textContent;
      }
    });
  }
  return activeRotVariant;
};

export const encryptionRots = () => {
  findActiveVariant();
  let activeRotVariant = findActiveVariant();
  let $text = document.getElementById("input-text").value;
  let $outputText = document.getElementById("output-text");
  // Sentencia if ... else if ... else
  if (activeRotVariant === "ROT5") {
    // Código para ejecutar el algoritmo correspondiente a ROT5
    let encrypt = "";
    for (let i = 0; i < $text.length; i++) {
      let charCode = $text.charCodeAt(i);
      // Sólo cifrar caracteres numéricos
      if (charCode >= 48 && charCode <= 57) {
        charCode = ((charCode - 48 + 5) % 10) + 48;
      }
      encrypt += String.fromCharCode(charCode);
    }
    $outputText.value = encrypt;
  } else if (activeRotVariant === "ROT13") {
    // Código para ejecutar el algoritmo correspondiente a ROT13
    let encrypted = "";
    for (let i = 0; i < $text.length; i++) {
      let charCode = $text.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        charCode = ((charCode - 65 + 13) % 26) + 65;
      } else if (charCode >= 97 && charCode <= 122) {
        charCode = ((charCode - 97 + 13) % 26) + 97;
      }
      encrypted += String.fromCharCode(charCode);
    }
    $outputText.value = encrypted;
  } else if (activeRotVariant === "ROT18") {
    // Código para ejecutar el algoritmo correspondiente a ROT18

    let encrypted = "";
    for (let i = 0; i < $text.length; i++) {
      let charCode = $text.charCodeAt(i);
      if (charCode >= 48 && charCode <= 57) {
        charCode = ((charCode - 48 + 5) % 10) + 48;
      } else if (charCode >= 65 && charCode <= 90) {
        charCode = ((charCode - 65 + 13) % 26) + 65;
      } else if (charCode >= 97 && charCode <= 122) {
        charCode = ((charCode - 97 + 13) % 26) + 97;
      }
      encrypted += String.fromCharCode(charCode);
    }
    $outputText.value = encrypted;
  } else if (activeRotVariant === "ROT47") {
    // Código para ejecutar el algoritmo correspondiente a ROT47
    let encrypted = "";
    for (let i = 0; i < $text.length; i++) {
      let charCode = $text.charCodeAt(i);
      if (charCode >= 33 && charCode <= 126) {
        charCode = ((charCode - 33 + 47) % 94) + 33;
      }
      encrypted += String.fromCharCode(charCode);
    }
    $outputText.value = encrypted;
  }
};

//!-----------------------------------------------------

export const decryptRots = () => {
  findActiveVariant();
  let activeRotVariant = findActiveVariant();
  let $text = document.getElementById("input-text").value;
  let $outputText = document.getElementById("output-text");

  // Sentencia if ... else if ... else
  if (activeRotVariant === "ROT5") {
    // Código para ejecutar el algoritmo correspondiente a ROT5
    let decrypted = "";
    for (let i = 0; i < $text.length; i++) {
      let charCode = $text.charCodeAt(i);
      // Sólo descifrar caracteres numéricos
      if (charCode >= 48 && charCode <= 57) {
        charCode = ((charCode - 48 + 5) % 10) + 48;
      }
      decrypted += String.fromCharCode(charCode);
    }
    $outputText.value = decrypted;
  } else if (activeRotVariant === "ROT13") {
    // Código para ejecutar el algoritmo correspondiente a ROT13
    let decrypted = "";
    for (let i = 0; i < $text.length; i++) {
      let charCode = $text.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        charCode = ((charCode - 65 + 26 - 13) % 26) + 65;
      } else if (charCode >= 97 && charCode <= 122) {
        charCode = ((charCode - 97 + 26 - 13) % 26) + 97;
      }
      decrypted += String.fromCharCode(charCode);
    }
    $outputText.value = decrypted;
  } else if (activeRotVariant === "ROT18") {
    // Código para ejecutar el algoritmo correspondiente a ROT18
    let decrypted = "";
    for (let i = 0; i < $text.length; i++) {
      let charCode = $text.charCodeAt(i);
      if (charCode >= 48 && charCode <= 57) {
        charCode = ((charCode - 48 + 10 - 5) % 10) + 48;
      } else if (charCode >= 65 && charCode <= 90) {
        charCode = ((charCode - 65 + 26 - 13) % 26) + 65;
      } else if (charCode >= 97 && charCode <= 122) {
        charCode = ((charCode - 97 + 26 - 13) % 26) + 97;
      }
      decrypted += String.fromCharCode(charCode);
    }
    $outputText.value = decrypted;
  } else if (activeRotVariant === "ROT47") {
    // Código para ejecutar el algoritmo correspondiente a ROT47
    let decrypted = "";
    for (let i = 0; i < text.length; i++) {
      let charCode = text.charCodeAt(i);
      if (charCode >= 33 && charCode <= 126) {
        charCode = ((charCode - 33 + 94 - 47) % 94) + 33;
      }
      decrypted += String.fromCharCode(charCode);
    }
    $outputText.value = decrypted;
  }
};
