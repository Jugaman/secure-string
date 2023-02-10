export const encryptVigenereCipher = () => {
  //Se almacenan los elementos necesarios en variables
  let text = document.getElementById("input-text").value;
  let key = document.getElementById("vigenere-key-input").value;
  let alphabet = document.getElementById("vigenere-alphabet").value;
  let specialChars = document.getElementById("caracteres").value;
  let caseSensitive = document.getElementById("case-sensitive").value;
  let keyMode = document.getElementById("vigenere-key-modes").value;
  let vigenereVariants = document.getElementById("vigenere-variants").value;

  if (vigenereVariants === "standard") {
    // Si la variante de Vigenère es "standard", se muestra el contenedor de la clave y el contenedor del modo de clave
    document.querySelector(".vigenere-key__container").style.display = "block";
    document.querySelector(".vigenere-key-mode__container").style.display =
      "block";
    if (caseSensitive === "mantener" || caseSensitive === "ignorar") {
      let output = "";
      let keyIndex = 0;

      // Recorre cada carácter en el texto de entrada
      for (let i = 0; i < text.length; i++) {
        let char = text[i];
        let alphabetIndex = alphabet.indexOf(char.toLowerCase());
        // Si el carácter no se encuentra en el alfabeto, se agrega al resultado sin cambios
        if (alphabetIndex === -1) {
          // No se encontró el carácter en el alfabeto
          output += caseSensitive === "mantener" ? char : char.toLowerCase();
          continue;
        }

        // Si se encontró el carácter en el alfabeto, se aplica el desplazamiento con la clave
        let shift = alphabet.indexOf(key[keyIndex].toLowerCase());
        keyIndex++;
        // Si el modo de clave es "autokey", se agrega la letra cifrada a la clave
        if (keyMode === "autokey") {
          // Si es autokey, se agrega la letra cifrada a la clave
          key += char;
        }

        // Si se llegó al final de la clave, se reinicia el índice
        if (keyIndex >= key.length) {
          keyIndex = 0;
        }

        // Se aplica el desplazamiento
        let cipheredIndex = (alphabetIndex + shift) % alphabet.length;
        let cipheredChar = alphabet[cipheredIndex];
        output +=
          caseSensitive === "mantener"
            ? char.toUpperCase() === char
              ? cipheredChar.toUpperCase()
              : cipheredChar
            : cipheredChar.toLowerCase();
      }
      // Si los caracteres especiales se deben ignorar, se eliminan
      if (specialChars === "ignorar") {
        // Se eliminan los caracteres especiales
        output = output.replace(/[^A-Za-z0-9]+/g, "");
      }

      // Se imprime el resultado
      document.getElementById("output-text").value = output;
    } else {
      // Si el caseSensitive === "estricto", se realiza un procesamiento diferente
      let output = "";
      // Se inicializa un objeto alphabetIndex para almacenar el índice de cada carácter en el alfabeto.
      let alphabetIndex = {};
      for (let i = 0; i < alphabet.length; i++) {
        alphabetIndex[alphabet[i]] = i;
      }
      // Se itera sobre cada carácter del texto de entrada.
      for (let i = 0, j = 0; i < text.length; i++) {
        let char = text[i];
        // Si el carácter se encuentra en el alfabeto, se realiza el procesamiento de cifrado.
        if (alphabetIndex.hasOwnProperty(char)) {
          let shift = alphabetIndex[key[j % key.length]];
          let newIndex = (alphabetIndex[char] + shift) % alphabet.length;
          output += alphabet[newIndex];
          // Si el modo de clave es "autokey", se agrega el carácter original al final de la clave.
          if (keyMode === "autokey") {
            key += char;
          }
          j++;
        } else {
          // Si el carácter no se encuentra en el alfabeto, se agrega tal cual al resultado.
          output += char;
          output += char;
        }
      }
      if (specialChars === "ignorar") {
        // Se eliminan los caracteres especiales
        output = output.replace(/[^A-Za-z0-9]+/g, "");
      }
      // Se asigna el resultado del procesamiento a un elemento de la página con id "output-text".
      document.getElementById("output-text").value = output;
    }
  } else if (vigenereVariants === "beaufort") {
    // Muestra los controles para la clave y el modo de clave si la variante es Beaufort
    document.querySelector(".vigenere-key__container").style.display = "block";
    document.querySelector(".vigenere-key-mode__container").style.display =
      "block";
    if (caseSensitive === "mantener" || caseSensitive === "ignorar") {
      let output = "";
      let keyIndex = 0;
      // Itera sobre cada carácter en el texto de entrada
      for (let i = 0; i < text.length; i++) {
        let char = text[i];
        let alphabetIndex = alphabet.indexOf(char.toLowerCase());

        if (alphabetIndex === -1) {
          // Si no se encuentra el carácter en el alfabeto, se agrega tal cual al resultado
          output += caseSensitive === "mantener" ? char : char.toLowerCase();
          continue;
        }

        // Si el carácter está en el alfabeto, se aplica el cifrado Beaufort
        let shift = alphabet.indexOf(key[keyIndex].toLowerCase());
        keyIndex++;

        // Si el modo de clave es autokey, se agrega la letra cifrada a la clave
        if (keyMode === "autokey") {
          key += char;
        }
        // Si se ha llegado al final de la clave, se reinicia el índice
        if (keyIndex >= key.length) {
          keyIndex = 0;
        }

        // Se aplica el desplazamiento
        let cipheredIndex =
          (alphabet.length + shift - alphabetIndex) % alphabet.length;
        let cipheredChar = alphabet[cipheredIndex];
        output +=
          caseSensitive === "mantener"
            ? char.toUpperCase() === char
              ? cipheredChar.toUpperCase()
              : cipheredChar
            : cipheredChar.toLowerCase();
      }
      // Se eliminan los caracteres especiales
      if (specialChars === "ignorar") {
        // Se eliminan los caracteres especiales
        output = output.replace(/[^A-Za-z0-9]+/g, "");
      }

      // Se imprime el resultado
      document.getElementById("output-text").value = output;
    } else {
      // Si caseSensitive ==="estricto".
      let output = "";
      // Crea un objeto que mapea cada letra del alfabeto a su índice.
      let alphabetIndex = {};
      for (let i = 0; i < alphabet.length; i++) {
        alphabetIndex[alphabet[i]] = i;
      }

      for (let i = 0, j = 0; i < text.length; i++) {
        let char = text[i];
        // Si el carácter se encuentra en el alfabeto, se procede a cifrarlo.
        if (alphabetIndex.hasOwnProperty(char)) {
          let shift = alphabetIndex[key[j % key.length]];
          // El desplazamiento se basa en la letra correspondiente de la clave.
          let newIndex =
            (alphabet.length + shift - alphabetIndex[char]) % alphabet.length;
          // Se obtiene la letra cifrada usando el desplazamiento.
          output += alphabet[newIndex];
          // Si el modo de clave es autokey, se agrega la letra cifrada a la clave.
          if (keyMode === "autokey") {
            key += char;
          }
          j++;
        } else {
          // Si el carácter no se encuentra en el alfabeto, se agrega sin cifrar.
          output += char;
        }
      }
      // Se eliminan los caracteres especiales si es especificado.
      if (specialChars === "ignorar") {
        output = output.replace(/[^A-Za-z0-9]+/g, "");
      }
      // Se imprime el resultado en el textarea
      document.getElementById("output-text").value = output;
    }
  } else if (vigenereVariants === "german-variant") {
    // Muestra los controles para la clave y el modo de clave si la variante es "german-variant"
    document.querySelector(".vigenere-key__container").style.display = "block";
    document.querySelector(".vigenere-key-mode__container").style.display =
      "block";
    if (caseSensitive === "mantener" || caseSensitive === "ignorar") {
      let output = "";
      let keyIndex = 0;

      // Cifrado del texto
      for (let i = 0; i < text.length; i++) {
        let char = text[i];
        let alphabetIndex = alphabet.indexOf(char.toLowerCase());

        // Verificación si el carácter se encuentra en el alfabeto
        if (alphabetIndex === -1) {
          // Si el carácter no se encuentra en el alfabeto, se añade tal cual al resultado
          output += caseSensitive === "mantener" ? char : char.toLowerCase();
          continue;
        }

        // Si se llegó aquí, significa que el carácter se encontró en el alfabeto
        let shift = alphabet.indexOf(key[keyIndex].toLowerCase());
        keyIndex++;

        // SI el modo de clave es autokey, se agrega la letra cifrada a la clave
        if (keyMode === "autokey") {
          key += char;
        }

        // Si se llegó al final de la clave, se reinicia el índice
        if (keyIndex >= key.length) {
          keyIndex = 0;
        }

        // Se aplica el desplazamiento
        let cipheredIndex =
          (alphabet.length + alphabetIndex - shift) % alphabet.length;
        let cipheredChar = alphabet[cipheredIndex];
        output +=
          caseSensitive === "mantener"
            ? char.toUpperCase() === char
              ? cipheredChar.toUpperCase()
              : cipheredChar
            : cipheredChar.toLowerCase();
      }

      // Verificación si se deben ignorar los caracteres especiales
      if (specialChars === "ignorar") {
        output = output.replace(/[^A-Za-z0-9]+/g, "");
      }

      // Se imprime el resultado
      document.getElementById("output-text").value = output;
    } else {
      let output = "";
      // Crea un objeto con la posición de cada letra en el alfabeto
      let alphabetIndex = {};
      for (let i = 0; i < alphabet.length; i++) {
        alphabetIndex[alphabet[i]] = i;
      }

      // Recorre cada carácter en el texto de entrada
      for (let i = 0, j = 0; i < text.length; i++) {
        let char = text[i];

        // Si el carácter está en el alfabeto, se aplica el desplazamiento
        if (alphabetIndex.hasOwnProperty(char)) {
          let shift = alphabetIndex[key[j % key.length]];
          let newIndex =
            (alphabet.length + alphabetIndex[char] - shift) % alphabet.length;
          output += alphabet[newIndex];

          // Si el modo es "autokey", se agrega el carácter
          if (keyMode === "autokey") {
            key += char;
          }
          j++;
        } else {
          // Si el carácter no está en el alfabeto, se agrega sin cambios a la salida
          output += char;
        }
      }

      // Si se eligió ignorar caracteres especiales, se eliminan de la salida
      if (specialChars === "ignorar") {
        output = output.replace(/[^A-Za-z0-9]+/g, "");
      }

      // Se imprime el resultado
      document.getElementById("output-text").value = output;
    }
  } else if (vigenereVariants === "trithemius") {
    // Esconde los controles para la clave y el modo de clave si la variante es "german-variant"
    document.querySelector(".vigenere-key__container").style.display = "none";
    document.querySelector(".vigenere-key-mode__container").style.display =
      "none";

    // Eliminar caracteres especiales si specialChars === "ignorar"
    if (specialChars === "ignorar") {
      text = text.replace(/[^a-zA-Z0-9]+/g, "");
    }

    // Encriptar el texto
    let result = "";
    let shift = 0;
    for (let i = 0; i < text.length; i++) {
      let char = text[i];

      // Buscar la posición del carácter en el alfabeto
      let index = -1;
      if (caseSensitive === "estricto") {
        index = alphabet.indexOf(char);
      } else {
        index = alphabet.indexOf(char.toLowerCase());
      }

      // Si el carácter no está en el alfabeto, continuar con el siguiente carácter
      if (index === -1) {
        result += char;
        continue;
      }

      // Encriptar el carácter
      let encryptedChar = alphabet[(index + shift) % alphabet.length];

      // Verificar si caseSensitive === "mantener" o "ignorar"
      if (caseSensitive === "mantener") {
        // Verificar si el carácter original era mayúscula
        if (char === char.toUpperCase()) {
          encryptedChar = encryptedChar.toUpperCase();
        }
      } else if (caseSensitive === "ignorar") {
        encryptedChar = encryptedChar.toLowerCase();
      }

      result += encryptedChar;
      shift++;
    }

    // Mostrar el resultado en el textarea con el id "output-text"
    document.getElementById("output-text").value = result;
  }
};

export const decryptVigenereCipher = () => {
  let text = document.getElementById("input-text").value;
  let key = document.getElementById("vigenere-key-input").value;
  let alphabet = document.getElementById("vigenere-alphabet").value;
  let specialChars = document.getElementById("caracteres").value;
  let caseSensitive = document.getElementById("case-sensitive").value;
  let keyMode = document.getElementById("vigenere-key-modes").value;
  let vigenereVariants = document.getElementById("vigenere-variants").value;
  if (vigenereVariants === "standard") {
    // Mostrar los elementos de entrada para la clave y el modo de clave
    document.querySelector(".vigenere-key__container").style.display = "block";
    document.querySelector(".vigenere-key-mode__container").style.display =
      "block";

    // Verificar si se desea mantener o ignorar la sensibilidad a mayúsculas y minúsculas
    if (caseSensitive === "mantener" || caseSensitive === "ignorar") {
      let output = "";
      let keyIndex = 0;

      // Recorrer cada carácter en el texto de entrada
      for (let i = 0; i < text.length; i++) {
        let char = text[i];

        // Obtener el índice del alfabeto para el carácter actual
        let alphabetIndex = alphabet.indexOf(char.toLowerCase());

        // Si el carácter no está en el alfabeto, agregarlo directamente a la salida
        if (alphabetIndex === -1) {
          output += caseSensitive === "mantener" ? char : char.toLowerCase();
          continue;
        }

        // Obtener el desplazamiento para la letra actual
        let shift = alphabet.indexOf(key[keyIndex].toLowerCase());
        keyIndex++;

        // Aplicar el desplazamiento y calcular el índice del carácter descifrado
        let decipheredIndex =
          (alphabetIndex - shift + alphabet.length) % alphabet.length;
        let decipheredChar = alphabet[decipheredIndex];

        // Agregar el carácter descifrado a la salida, respetando la sensibilidad a mayúsculas y minúsculas
        output +=
          caseSensitive === "mantener"
            ? char.toUpperCase() === char
              ? decipheredChar.toUpperCase()
              : decipheredChar
            : decipheredChar.toLowerCase();

        // Si el modo de clave es autokey, agregar el carácter descifrado a la clave
        if (keyMode === "autokey") {
          key += decipheredChar;
        }

        // Reiniciar el índice de la clave si se ha alcanzado su longitud
        if (keyIndex >= key.length) {
          keyIndex = 0;
        }
      }

      // Si se desea ignorar los caracteres especiales, eliminarlos de la salida
      if (specialChars === "ignorar") {
        output = output.replace(/[^A-Za-z0-9]+/g, "");
      }

      // Se imprime el resultado
      document.getElementById("output-text").value = output;
    } else {
      let output = "";

      // Crear un objeto para almacenar la posición de cada carácter en el alfabeto
      let alphabetIndex = {};
      for (let i = 0; i < alphabet.length; i++) {
        alphabetIndex[alphabet[i]] = i;
      }

      // Iterar sobre cada carácter del texto de entrada
      for (let i = 0, j = 0; i < text.length; i++) {
        let char = text[i];

        // Si el carácter actual se encuentra en el alfabeto, se aplica el desplazamiento
        if (alphabetIndex.hasOwnProperty(char)) {
          let shift = alphabetIndex[key[j % key.length]];
          let newIndex =
            (alphabetIndex[char] - shift + alphabet.length) % alphabet.length;
          output += alphabet[newIndex];

          // Si se utiliza el modo autoclave, agregar el carácter desencriptado a la clave
          if (keyMode === "autokey") {
            key += output[i];
          }
          j++;
        } else {
          // Si el carácter actual no está en el alfabeto, agregarlo sin modificaciones
          output += char;
        }
      }
      // Si se selecciona "ignorar" para los caracteres especiales, eliminarlos de la salida
      if (specialChars === "ignorar") {
        output = output.replace(/[^A-Za-z0-9]+/g, "");
      }

      // Se imprime el resultado
      document.getElementById("output-text").value = output;
    }
  } else if (vigenereVariants === "beaufort") {
    // Muestra los contenedores de clave y modo de clave
    document.querySelector(".vigenere-key__container").style.display = "block";
    document.querySelector(".vigenere-key-mode__container").style.display =
      "block";
    // Verifica si el caso sensitivo es "mantener" o "ignorar"
    if (caseSensitive === "mantener" || caseSensitive === "ignorar") {
      let output = "";
      let keyIndex = 0;

      // Itera sobre cada carácter del texto de entrada
      for (let i = 0; i < text.length; i++) {
        let char = text[i];
        let alphabetIndex = alphabet.indexOf(char.toLowerCase());

        // Si el carácter no se encuentra en el alfabeto, se agrega al texto cifrado sin modificación
        if (alphabetIndex === -1) {
          // No se encontró el carácter en el alfabeto
          output += caseSensitive === "mantener" ? char : char.toLowerCase();
          continue;
        }

        // Si el carácter está en el alfabeto, se aplica el desplazamiento
        let shift = alphabet.indexOf(key[keyIndex].toLowerCase());
        keyIndex++;

        // Cálculo del índice cifrado
        let cipheredIndex =
          (alphabet.length + shift - alphabetIndex) % alphabet.length;
        let cipheredChar = alphabet[cipheredIndex];

        // Se agrega el carácter cifrado al texto cifrado
        output +=
          caseSensitive === "mantener"
            ? char.toUpperCase() === char
              ? cipheredChar.toUpperCase()
              : cipheredChar
            : cipheredChar.toLowerCase();

        // Si es autokey, se agrega el carácter cifrado a la clave
        if (keyMode === "autokey") {
          key += cipheredChar;
        }

        // Si se llegó al final de la clave, se reinicia el índice
        if (keyIndex >= key.length) {
          keyIndex = 0;
        }
      }

      if (specialChars === "ignorar") {
        // Se eliminan los caracteres especiales
        output = output.replace(/[^A-Za-z0-9]+/g, "");
      }

      // Se imprime el resultado
      document.getElementById("output-text").value = output;
    } else {
      let output = "";
      let alphabetIndex = {};
      for (let i = 0; i < alphabet.length; i++) {
        alphabetIndex[alphabet[i]] = i;
      }

      for (let i = 0, j = 0; i < text.length; i++) {
        let char = text[i];
        if (alphabetIndex.hasOwnProperty(char)) {
          let shift = alphabetIndex[key[j % key.length]];
          let newIndex =
            (alphabet.length + shift - alphabetIndex[char]) % alphabet.length;
          output += alphabet[newIndex];
          if (keyMode === "autokey") {
            key += output[i];
          }
          j++;
        } else {
          output += char;
        }
      }
      if (specialChars === "ignorar") {
        // Se eliminan los caracteres especiales
        output = output.replace(/[^A-Za-z0-9]+/g, "");
      }
      document.getElementById("output-text").value = output;
    }
  }
  if (vigenereVariants === "german-variant") {
    // Muestra los contenedores de clave y modo de clave
    document.querySelector(".vigenere-key__container").style.display = "block";
    document.querySelector(".vigenere-key-mode__container").style.display =
      "block";
    if (caseSensitive === "mantener" || caseSensitive === "ignorar") {
      let output = "";
      let keyIndex = 0;

      for (let i = 0; i < text.length; i++) {
        let char = text[i];
        let alphabetIndex = alphabet.indexOf(char.toLowerCase());

        if (alphabetIndex === -1) {
          // No se encontró el carácter en el alfabeto
          output += caseSensitive === "mantener" ? char : char.toLowerCase();
          continue;
        }

        // Si se llegó aquí, significa que el carácter se encontró en el alfabeto
        let shift = alphabet.indexOf(key[keyIndex].toLowerCase());
        keyIndex++;

        // Se aplica el desplazamiento
        let decipheredIndex = (alphabetIndex + shift) % alphabet.length;
        let decipheredChar = alphabet[decipheredIndex];
        output +=
          caseSensitive === "mantener"
            ? char.toUpperCase() === char
              ? decipheredChar.toUpperCase()
              : decipheredChar
            : decipheredChar.toLowerCase();

        if (keyMode === "autokey") {
          // Si es autokey, se agrega la letra cifrada a la clave
          key += decipheredChar;
        }

        // Reiniciar el índice de la clave si se ha alcanzado su longitud
        if (keyIndex >= key.length) {
          keyIndex = 0;
        }
      }

      // Si se deben ignorar los caracteres especiales, se eliminan
      if (specialChars === "ignorar") {
        output = output.replace(/[^A-Za-z0-9]+/g, "");
      }

      // Se imprime el resultado
      document.getElementById("output-text").value = output;
    } else {
      let output = "";

      // Se crea un objeto que contiene un índice para cada letra del alfabeto
      let alphabetIndex = {};
      for (let i = 0; i < alphabet.length; i++) {
        alphabetIndex[alphabet[i]] = i;
      }

      // Se itera sobre cada carácter del texto
      for (let i = 0, j = 0; i < text.length; i++) {
        let char = text[i];

        // Si el carácter está en el alfabeto, se descifra
        if (alphabetIndex.hasOwnProperty(char)) {
          // Se obtiene el índice de la letra en el alfabeto
          let shift = alphabetIndex[key[j % key.length]];
          // Se calcula el nuevo índice para la letra cifrada
          let newIndex = (alphabetIndex[char] + shift) % alphabet.length;
          // Se agrega la letra cifrada a la salida
          output += alphabet[newIndex];
          // Si es autokey, se agrega la letra cifrada a la clave
          if (keyMode === "autokey") {
            key += output[i];
          }
          j++;
        } else {
          // Si el carácter no está en el alfabeto, se agrega sin cifrar
          output += char;
        }
      }
      // Si se eligió ignorar caracteres especiales, se eliminan de la salida
      if (specialChars === "ignorar") {
        output = output.replace(/[^A-Za-z0-9]+/g, "");
      }
      // Se imprime el resultado
      document.getElementById("output-text").value = output;
    }
  } else if (vigenereVariants === "trithemius") {
    // Se oculta los contenedores de clave y modo de clave

    document.querySelector(".vigenere-key__container").style.display = "none";
    document.querySelector(".vigenere-key-mode__container").style.display =
      "none";
    // Eliminar caracteres especiales si specialChars === "ignorar"
    if (specialChars === "ignorar") {
      text = text.replace(/[^a-zA-Z0-9]+/g, "");
    }

    // Desencriptar el texto
    let result = "";
    let shift = 0;
    for (let i = 0; i < text.length; i++) {
      let char = text[i];

      // Buscar la posición del carácter en el alfabeto
      let index = -1;
      if (caseSensitive === "estricto") {
        index = alphabet.indexOf(char);
      } else {
        index = alphabet.indexOf(char.toLowerCase());
      }

      // Si el carácter no está en el alfabeto, continuar con el siguiente carácter
      if (index === -1) {
        result += char;
        continue;
      }

      // Desencriptar el carácter
      let decryptedCharIndex =
        (index - shift + alphabet.length) % alphabet.length;
      let decryptedChar = alphabet[decryptedCharIndex];

      // Verificar si caseSensitive === "mantener" o "ignorar"
      if (caseSensitive === "mantener") {
        // Verificar si el carácter original era mayúscula
        if (char === char.toUpperCase()) {
          decryptedChar = decryptedChar.toUpperCase();
        }
      } else if (caseSensitive === "ignorar") {
        decryptedChar = decryptedChar.toLowerCase();
      }

      result += decryptedChar;
      shift++;
    }

    // Mostrar el resultado en el textarea con el id "output-text"
    document.getElementById("output-text").value = result;
  }
};
