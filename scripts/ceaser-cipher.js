export const encryptCeaserCipher = () => {
  let text = document.getElementById("input-text").value;
  let offset = parseInt(document.getElementById("offset").value);
  let alphabet = document.getElementById("alphabet").value;
  let caseSensitive = document.getElementById("case-sensitive").value;
  let specialChars = document.getElementById("caracteres").value;

  // Eliminar caracteres especiales en caso seleccionado en caracteres
  if (specialChars === "ignorar") {
    text = text.replace(/[^a-zA-Z0-9]/g, "");
  }

  let lowerAlphabet = alphabet.toLowerCase();
  let upperAlphabet = alphabet.toUpperCase();

  // Aplicar cambios en caso seleccionado en case-sensitive
  if (caseSensitive === "ignorar") {
    text = text.toLowerCase();
  } else if (caseSensitive === "estricto") {
    let result = "";
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
      let index = alphabet.indexOf(char);
      if (index === -1) {
        result += char;
        continue;
      }

      let newIndex = (index + offset) % alphabet.length;
      result += alphabet[newIndex];
    }
    document.getElementById("output-text").value = result;
    return;
  }

  let result = "";
  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    let index =
      char === char.toLowerCase()
        ? lowerAlphabet.indexOf(char)
        : upperAlphabet.indexOf(char);
    if (index === -1) {
      result += char;
      continue;
    }

    let newIndex = (index + offset) % alphabet.length;
    result +=
      char === char.toLowerCase()
        ? lowerAlphabet[newIndex]
        : upperAlphabet[newIndex];
  }

  document.getElementById("output-text").value = result;
   
};

export const decryptCeaserCipher = () => {
  let text = document.getElementById("input-text").value;
  let offset = parseInt(document.getElementById("offset").value);
  let alphabet = document.getElementById("alphabet").value;
  let caseSensitive = document.getElementById("case-sensitive").value;
  let specialChars = document.getElementById("caracteres").value;

  // Eliminar caracteres especiales en caso seleccionado en caracteres
  if (specialChars === "ignorar") {
    text = text.replace(/[^a-zA-Z0-9]/g, "");
  }

  let lowerAlphabet = alphabet.toLowerCase();
  let upperAlphabet = alphabet.toUpperCase();

  // Aplicar cambios en caso seleccionado en case-sensitive
  if (caseSensitive === "ignorar") {
    text = text.toLowerCase();
  } else if (caseSensitive === "estricto") {
    let result = "";
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
      let index = alphabet.indexOf(char);
      if (index === -1) {
        result += char;
        continue;
      }

      let newIndex = (index - offset + alphabet.length) % alphabet.length;
      result += alphabet[newIndex];
    }
    document.getElementById("output-text").value = result;
    return;
  }

  let result = "";
  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    let index =
      char === char.toLowerCase()
        ? lowerAlphabet.indexOf(char)
        : upperAlphabet.indexOf(char);
    if (index === -1) {
      result += char;
      continue;
    }

    let newIndex = (index - offset + alphabet.length) % alphabet.length;
    result +=
      char === char.toLowerCase()
        ? lowerAlphabet[newIndex]
        : upperAlphabet[newIndex];
  }

  document.getElementById("output-text").value = result;
};
