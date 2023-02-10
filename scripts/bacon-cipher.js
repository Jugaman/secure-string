//Se exporta la función
export const encryptBaconCipher = () => {
  // Obtener el valor de entrada del elemento de texto con id "input-text" y convertirlo a minúsculas
  let $text = document.getElementById("input-text").value.toLowerCase();
  // Obtener el valor seleccionado en el select
  let selectedOption = document.querySelector("select").value;
  // Determinar la tabla de sustitución a utilizar según la opción seleccionada
  let substitutionTable = {};

  let letter1 = document.getElementById("letter-1").value;
  let letter2 = document.getElementById("letter-2").value;

  if (selectedOption === "especifico") {
    substitutionTable = {
      a: letter1.repeat(5),
      b: letter1.repeat(4) + letter2,
      c: letter1.repeat(3) + letter2 + letter1,
      d: letter1.repeat(3) + letter2.repeat(2),
      e: letter1.repeat(2) + letter2 + letter1.repeat(2),
      f: letter1.repeat(2) + letter2 + letter1 + letter2,
      g: letter1.repeat(2) + letter2.repeat(2) + letter1,
      h: letter1.repeat(2) + letter2.repeat(3),
      i: letter1 + letter2 + letter1.repeat(3),
      j: letter1 + letter2 + letter1.repeat(2) + letter2,
      k: letter1 + letter2 + letter1 + letter2 + letter1,
      l: letter1 + letter2 + letter1 + letter2.repeat(2),
      m: letter1 + letter2.repeat(2) + letter1.repeat(2),
      n: letter1 + letter2.repeat(2) + letter1 + letter2,
      o: letter1 + letter2.repeat(3) + letter1,
      p: letter1 + letter2.repeat(4),
      q: letter2 + letter1.repeat(4),
      r: letter2 + letter1.repeat(3) + letter2,
      s: letter2 + letter1.repeat(2) + letter2 + letter1,
      t: letter2 + letter1.repeat(2) + letter2.repeat(2),
      u: letter2 + letter1 + letter2 + letter1.repeat(2),
      v: letter2 + letter1 + letter2 + letter1 + letter2,
      w: letter2 + letter1 + letter2.repeat(2) + letter1,
      x: letter2 + letter1 + letter2.repeat(3),
      y: letter2.repeat(2) + letter1.repeat(3),
      z: letter2.repeat(2) + letter1.repeat(2) + letter2,
    };
  } else {
    substitutionTable = {
      a: letter1.repeat(5),
      b: letter1.repeat(4) + letter2,
      c: letter1.repeat(3) + letter2 + letter1,
      d: letter1.repeat(3) + letter2.repeat(2),
      e: letter1.repeat(2) + letter2 + letter1.repeat(2),
      f: letter1.repeat(2) + letter2 + letter1 + letter2,
      g: letter1.repeat(2) + letter2.repeat(2) + letter1,
      h: letter1.repeat(2) + letter2.repeat(3),
      i: letter1 + letter2 + letter1.repeat(3),
      j: letter1 + letter2 + letter1.repeat(3),
      k: letter1 + letter2 + letter1.repeat(2) + letter2,
      l: letter1 + letter2 + letter1 + letter2 + letter1,
      m: letter1 + letter2 + letter1 + letter2.repeat(2),
      n: letter1 + letter2.repeat(2) + letter1.repeat(2),
      o: letter1 + letter2.repeat(2) + letter1 + letter2,
      p: letter1 + letter2.repeat(3) + letter1,
      q: letter1 + letter2.repeat(4),
      r: letter2 + letter1.repeat(4),
      s: letter2 + letter1.repeat(3) + letter2,
      t: letter2 + letter1.repeat(2) + letter2 + letter1,
      u: letter2 + letter1.repeat(2) + letter2.repeat(2),
      v: letter2 + letter1.repeat(2) + letter2.repeat(2),
      w: letter2 + letter1 + letter2 + letter1.repeat(2),
      x: letter2 + letter1 + letter2 + letter1 + letter2,
      y: letter2 + letter1 + letter2.repeat(2) + letter1,
      z: letter2 + letter1 + letter2.repeat(3),
    };
  }

  // Variable para almacenar el texto cifrado
  let cipherText = "";
  // Recorrer cada caracter del texto de entrada
  for (let i = 0; i < $text.length; i++) {
    // Comprobar si el caracter actual está en la tabla de sustitución
    if (substitutionTable[$text[i]]) {
      // Si está, añadir la versión cifrada al texto cifrado
      cipherText += substitutionTable[$text[i]];
    } else {
      // Si no está, añadir el caracter tal cual al texto cifrado
      cipherText += $text[i];
    }
  }
  // Establecer el valor del elemento de texto con el id "output-text" igual al de la variable cipherText
  document.getElementById("output-text").value = cipherText;
};

//Se exporta la función
export const decryptBaconCipher = () => {
  // Obtener el valor de entrada del elemento de texto con id "input-text" y convertirlo a minúsculas
  let $text = document.getElementById("input-text").value.toUpperCase();
  // Obtener el valor seleccionado en el select
  let selectedOption = document.querySelector("select").value;
  // Determinar la tabla de sustitución a utilizar según la opción seleccionada
  let substitutionTable = {};

  let letter1 = document.getElementById("letter-1").value;
  let letter2 = document.getElementById("letter-2").value;

  if (selectedOption === "especifico") {
    substitutionTable = {
      [letter1.repeat(5)]: "a",
      [letter1.repeat(4) + letter2]: "b",
      [letter1.repeat(3) + letter2 + letter1]: "c",
      [letter1.repeat(3) + letter2.repeat(2)]: "d",
      [letter1.repeat(2) + letter2 + letter1.repeat(2)]: "e",
      [letter1.repeat(2) + letter2 + letter1 + letter2]: "f",
      [letter1.repeat(2) + letter2.repeat(2) + letter1]: "g",
      [letter1.repeat(2) + letter2.repeat(3)]: "h",
      [letter1 + letter2 + letter1.repeat(3)]: "i",
      [letter1 + letter2 + letter1.repeat(2) + letter2]: "j",
      [letter1 + letter2 + letter1 + letter2 + letter1]: "k",
      [letter1 + letter2 + letter1 + letter2.repeat(2)]: "l",
      [letter1 + letter2.repeat(2) + letter1.repeat(2)]: "m",
      [letter1 + letter2.repeat(2) + letter1 + letter2]: "n",
      [letter1 + letter2.repeat(3) + letter1]: "o",
      [letter1 + letter2.repeat(4)]: "p",
      [letter2 + letter1.repeat(4)]: "q",
      [letter2 + letter1.repeat(3) + letter2]: "r",
      [letter2 + letter1.repeat(2) + letter2 + letter1]: "s",
      [letter2 + letter1.repeat(2) + letter2.repeat(2)]: "t",
      [letter2 + letter1 + letter2 + letter1.repeat(2)]: "u",
      [letter2 + letter1 + letter2 + letter1 + letter2]: "v",
      [letter2 + letter1 + letter2.repeat(2) + letter1]: "w",
      [letter2 + letter1 + letter2.repeat(3)]: "x",
      [letter2.repeat(2) + letter1.repeat(3)]: "y",
      [letter2.repeat(2) + letter1.repeat(2) + letter2]: "z",
    };
  } else {
    substitutionTable = {
      [letter1.repeat(5)]: "a",
      [letter1.repeat(4) + letter2]: "b",
      [letter1.repeat(3) + letter2 + letter1]: "c",
      [letter1.repeat(3) + letter2.repeat(2)]: "d",
      [letter1.repeat(2) + letter2 + letter1.repeat(2)]: "e",
      [letter1.repeat(2) + letter2 + letter1 + letter2]: "f",
      [letter1.repeat(2) + letter2.repeat(2) + letter1]: "g",
      [letter1.repeat(2) + letter2.repeat(3)]: "h",
      [letter1 + letter2 + letter1.repeat(3)]: "i",
      [letter1 + letter2 + letter1.repeat(3)]: "j",
      [letter1 + letter2 + letter1.repeat(2) + letter2]: "k",
      [letter1 + letter2 + letter1 + letter2 + letter1]: "l",
      [letter1 + letter2 + letter1 + letter2.repeat(2)]: "m",
      [letter1 + letter2.repeat(2) + letter1.repeat(2)]: "n",
      [letter1 + letter2.repeat(2) + letter1 + letter2]: "o",
      [letter1 + letter2.repeat(3) + letter1]: "p",
      [letter1 + letter2.repeat(4)]: "q",
      [letter2 + letter1.repeat(4)]: "r",
      [letter2 + letter1.repeat(3) + letter2]: "s",
      [letter2 + letter1.repeat(2) + letter2 + letter1]: "t",
      [letter2 + letter1.repeat(2) + letter2.repeat(2)]: "u",
      [letter2 + letter1.repeat(2) + letter2.repeat(2)]: "v",
      [letter2 + letter1 + letter2 + letter1.repeat(2)]: "w",
      [letter2 + letter1 + letter2 + letter1 + letter2]: "x",
      [letter2 + letter1 + letter2.repeat(2) + letter1]: "y",
      [letter2 + letter1 + letter2.repeat(3)]: "z",
    };
  }

  // Tabla de sustitución para asignar cada conjunto de 5 caracteres cifrados a un caracter legible

  let decryptedText = "";
  let i = 0;

  // Bucle para recorrer todo el texto de entrada
  while (i < $text.length) {
    // Extraer un conjunto de 5 caracteres de la entrada
    let substr = $text.substring(i, i + 5);
    // Si el conjunto de 5 caracteres está en la tabla de sustitución
    if (substitutionTable[substr]) {
      // Agregar el caracter legible correspondiente al texto desencriptado
      decryptedText += substitutionTable[substr];
      i += 5;
    } else if (substr[0] === " ") {
      // Si el primer caracter es un espacio, agregar un espacio al texto desencriptado
      decryptedText += " ";
      i++;
    } else {
      // Si el conjunto de 5 caracteres no está en la tabla de sustitución y no es un espacio, agregar el primer caracter al texto desencriptado
      decryptedText += substr[0];
      i++;
    }
  }
  // Establecer el valor del elemento de texto con el id "output-text" igual al de la variable decryptedText
  document.getElementById("output-text").value = decryptedText;
};
