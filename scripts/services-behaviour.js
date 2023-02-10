import { encryptAluraCipher, decryptAluraCipher } from "./alura-cipher.js";
import { encryptionRots, decryptRots } from "./rot-ciphers.js";
import { encryptBaconCipher, decryptBaconCipher } from "./bacon-cipher.js";
import { encryptCeaserCipher, decryptCeaserCipher } from "./ceaser-cipher.js";
import { encryptVigenereCipher, decryptVigenereCipher } from "./vigenere-cipher.js";

// La función inputTextBehaviour se exporta y se verifica si el botón de encrypt o decrypt tiene la clase "active antes de ejecutar la función servicesBehaviour() con la acción correspondiente (encriptar o desencriptar) para pasarsela por parametro.
export const inputTextBehaviour = () => {
  let action;
  if (document.getElementById("encrypt").classList.contains("active")) {
    action = "encrypt";
  } else if (document.getElementById("decrypt").classList.contains("active")) {
    action = "decrypt";
  }
  if (action) {
    servicesBehaviour(action);
  }
};

// La función servicesBehaviour es exportado y ejecuta los diferentes algoritmos disponibles de tipos de encryptados o desencriptado, segun corresponda
export const servicesBehaviour = (action) => {
  // Se establece una variable "type" para obtener el tipo de cifrado seleccionado
  let type = document.getElementById("encryption-type-button-title").innerHTML;

  // Se utiliza una estructura de control de flujo "if-else" para verificar si la acción es "encrypt" o "decrypt".
  // En caso de que sea "encrypt":
  if (action === "encrypt") {
    // Se establecen condicionales "if-else" adicionales que verifican el valor de "type" para determinar qué tipo de encryptacion se debe ejecutar.
    if (type === "ROT Cipher") {
      // Se ejecutá la función importada de encriptado ROT correpsondiente
      encryptionRots();
      // Se ejecutá la función importada de encriptado Ceaser Cipher
    } else if (type === "Cifrado César") {
      // Se ejecutá la función importada de desencriptado Ceaser Cipher
      encryptCeaserCipher();
    } else if (type === "Bacon Cipher") {
      // Se ejecutá la función importada de encriptado Bacon Cipher
      encryptBaconCipher();
    } else if (type === "Vigenère Cipher") {
      // Se ejecutá la función importada de encriptado Vignere Cipher
      encryptVigenereCipher();
    } else if (type === "Alura Cipher") {
      // Se ejecutá la función importada de encriptado Alura Cipher
      encryptAluraCipher();
    }

    // En caso de que sea "decrypt"
  } else if (action === "decrypt") {
    // Se establecen condicionales "if-else" adicionales que verifican el valor de "type" para determinar qué tipo de desencriptacion se debe ejecutar.
    if (type === "ROT Cipher") {
      // Se ejecutá la función importada de desencriptado ROT correspondiente
      decryptRots();
    } else if (type === "Cifrado César") {
      // Se ejecutá la función importada de desencriptado Ceaser Cipher
      decryptCeaserCipher();
    } else if (type === "Bacon Cipher") {
      // Se ejecutá la función importada de desencriptado Bacon Cipher
      decryptBaconCipher();
    } else if (type === "Vigenère Cipher") {
      // Se ejecutá la función importada de desencriptado Vignere Cipher
      decryptVigenereCipher();
    } else if (type === "Alura Cipher") {
      // Se ejecutá la función importada de desencriptado Alura Cipher importado
      decryptAluraCipher();
    }
  }
};
