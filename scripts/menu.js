// Este archivo genera scripts de comportamiento para el menu de opciones de los diferentes tipos de cifrado que se encuentran disponibles, asi como establecer el que sera seleccionado por defecto al cargar la página

// Se importan funciones de otros archivos
import { inputTextBehaviour } from "./services-behaviour.js";
import { ciphersDescriptions } from "./description-ciphers.js";

// Se obtienen los elementos necesarios en las asignaciones de variables
const $encryptionTypeButton = document.getElementById("encryption-type-button");
const $encryptionTypeButtonTitle = document.getElementById(
  "encryption-type-button-title"
);
const $encryptionOptionButtons =
  document.querySelectorAll(".encryption-option");
const $aluraCipherButton = document.getElementById("alura-cipher");
const $descriptionTitle = document.getElementById("description-title");
const $cipherDescription = document.getElementById("description-text");
const $encryptionMenu = document.getElementById("encryption-menu");
const $closeButton = document.querySelector(".close-button");

// Agrega un evento de escucha al botón de tipo de encriptación
$encryptionTypeButton.addEventListener("click", function () {
  // Muestra el menú modal al hacer clic en el botón
  $encryptionMenu.style.display = "block";
});

// Agrega un evento de escucha al botón de cierre
$closeButton.addEventListener("click", function () {
  // Oculta el menú modal al hacer clic en el botón de cierre
  $encryptionMenu.style.display = "none";
});

// Agrega un evento de escucha al menú modal
$encryptionMenu.addEventListener("click", function (e) {
  // Si el target del evento es el propio menú modal, oculta el menú modal al hacer clic fuera de él
  if (e.target === $encryptionMenu) {
    $encryptionMenu.style.display = "none";
  }
});

// Esta función se utiliza para manejar la selección de diferentes opciones de cifrado en el menú. Cuando se hace clic en un botón, la función agrega una clase "active" al botón seleccionado, cambia el título del botón de tipo de cifrado a la opción seleccionada, oculta las opciones de cifrado y agrega una clase "active" al marco correspondiente para la opción seleccionada. Resumen: Esta función se utiliza para actualizar la UI para que el usuario pueda ver qué opción de cifrado ha seleccionado.
const selectCipher = (selectedOption) => {
  // Elimina la clase "active" de todos los botones de opción de cifrados y los marcos de los botones
  $encryptionOptionButtons.forEach(function (option) {
    option.classList.remove("active");
    option.querySelector(".frame").classList.remove("active");
  });

  selectedOption.classList.add("active");
  selectedOption.querySelector(".frame").classList.add("active");

  // Cambia el título del botón de tipo de cifrado a la opción seleccionada
  $encryptionTypeButtonTitle.innerText =
    selectedOption.querySelector(".cipher-name").innerText;
  $encryptionMenu.style.display = "none";

  // Cambia el título y la descripción de la cifrado seleccionado en el contenedor de descripción
  $descriptionTitle.innerHTML =
    selectedOption.querySelector(".cipher-name").innerText;
  $cipherDescription.innerHTML =
    ciphersDescriptions[selectedOption.querySelector(".cipher-name").innerText];

  // Elimina cualquier custom Menu anterior
  if (document.querySelector(".cipherCustomMenu-container"))
    document.querySelector(".cipherCustomMenu-container").remove();

  // Crea un div para ser usada como contenedor de los diferentes custom menus
  const $cipherCustomMenuContainer = document.createElement("div");
  $cipherCustomMenuContainer.setAttribute(
    "class",
    "cipherCustomMenu-container"
  );

  // Inserta el contenedor después del menú de opciones de cifrado
  document
    .querySelector(".encryption-type__btn-container")
    .insertAdjacentElement("afterend", $cipherCustomMenuContainer);

  // Se decide que menu crear segun el tipo de cifrado seleccionado
  let cipherCustomMenuContent = "";
  switch (selectedOption.querySelector(".cipher-name").innerHTML) {
    case "Alura Cipher":
      // Contenido de menú para Alura Cipher
      cipherCustomMenuContent = `
              <div class="alura__super-container">
                <label class="alura__label">Modificar cifrado</label>
                <div class="alura__vocals-container">
                  <div class="alura__vocal">
                    <label class="alura__vocal-label" for="alura-vocal-a">Vocal "A":</label>
                    <input type="text" class="alura__vocal-input" id="alura-vocal-a" value="ai" maxlength="7">
                  </div>
                  <div class="alura__vocal">
                    <label class="alura__vocal-label" for="alura-vocal-e">Vocal "E":</label>
                    <input type="text" class="alura__vocal-input" id="alura-vocal-e" value="enter" maxlength="7">
                  </div>
                  <div class="alura__vocal">
                    <label class="alura__vocal-label" for="alura-vocal-i">Vocal "I":</label>
                    <input type="text" class="alura__vocal-input" id="alura-vocal-i" value="imes" maxlength="7">
                  </div>
                  <div class="alura__vocal">
                    <label class="alura__vocal-label" for="alura-vocal-o">Vocal "O":</label>
                    <input type="text" class="alura__vocal-input" id="alura-vocal-o" value="ober" maxlength="7">
                  </div>
                </div>
                <div class="alura__last-vocal-container"
                  <div class="alura__vocal">
                    <label class="alura__vocal-label" for="alura-vocal-u">Vocal "U":</label>
                    <input type="text" class="alura__vocal-input" id="alura-vocal-u" value="ufat" maxlength=7">
                  </div>
                </div>
              </div>
          `;
      break;
    case "ROT Cipher":
      // Contenido de menú para ROT Cipher
      cipherCustomMenuContent = `
              <div class="rots-container">
                <label class="variants-rot__label">Variantes</label>
                <button id="rot5" class="rot">
                  <span class="rot-frame"></span>
                  <span class="rot-name">ROT5</span>
                  <span class="regex-rot">(0-9)</span>
                </button>
                <button id="rot13" class="rot active">
                  <span class="rot-frame active"></span>
                  <span class="rot-name">ROT13</span>
                  <span class="regex-rot">(A-Z, a-z)</span>
                </button>
                <button id="rot18" class="rot">
                  <span class="rot-frame"></span>
                  <span class="rot-name">ROT18</span>
                  <span class="regex-rot">(0-9, A-Z, a-z)</span>
                </button>
                <button id="rot47" class="rot">
                  <span class="rot-frame"></span>
                  <span class="rot-name">ROT47</span>
                  <span class="regex-rot">(!-~)</span>
                </button>
              </div>
          `;
      break;
    case "Cifrado César":
      // Contenido de menú para Ceaser Cipher
      cipherCustomMenuContent = `
              <div class="cesar-menu___container">
                <div class="cesar-menu__block-container">
                  <label for="offset">Desplazamiento:</label>
                  <div class="offset-input__container">
                    <button id="substract-offset" class="substract-btn">-</button>
                    <input type="number" id="offset" class="offset-input" min="1" max="25" value="7" readonly>
                    <span id="offset-placeholder" class="offset-span-input"></span>
                    <button id="add-offset" class="add-btn">+</button>
                  </div>
                </div>
                <div class="cesar-menu__block-container">
                  <label for="alphabet">Alfabeto:</label>
                  <input type="text" id="alphabet" class="alphabet-input" value="abcdefghijklmnopqrstuvwxyz">
                </div>
                <div class="cesar-menu__last-block-container">
                  <div class="cesar-menu__case-sensitive">
                    <label for="case-sensitive">Discrimina mayús./minús.</label>
                    <select id="case-sensitive">
                      <option value="mantener">Mantener</option>
                      <option value="ignorar">Ignorar</option>
                      <option value="estricto">Estricto (A ≠ a)</option>
                    </select>
                  </div>
                  <div class="ceaser-menu__foreign-chars">
                    <label for="caracteres">Caracteres especiales:</label>
                    <select id="caracteres">
                      <option value="respetar">Incluir</option>
                      <option value="ignorar">Ignorar</option>
                    </select>
                  </div>
                </div>
              </div>
          `;
      break;
    case "Bacon Cipher":
      // Contenido de menú para Bacon Cipher
      cipherCustomMenuContent = `
              <div class="select-box">
                <label class="variants-bacon-label">Variantes</label>
                <select class="bacon-variants">
                  <option class="option-variant" value="original">Cifrado Original</option>
                  <option class="option-variant" value="especifico">Cifrado único por letra</option>
                </select>
              </div>
              <div class="letter-box">
                <label class="simbol-label">Modificar símbolos</label>
                <div class="change-letter">
                  <div class="letter1">
                    <label class="letter-label" for="letter-1">Símbolo 1:</label>
                    <input type="text" class="letter-input" id="letter-1" value="A" maxlength="1">
                  </div>
                  <div class="letter2">
                    <label class="letter-label" for="letter-2">Símbolo 2:</label>
                    <input type="text" class="letter-input"   id="letter-2" value="B" maxlength="1">
                  </div>
                </div>
              </div>
          `;
      break;
    case "Vigenère Cipher":
      // Contenido de menú para Vigenère Cipher
      cipherCustomMenuContent = `
            <div class="vigenere-cipher__container">
              <div class="vigenere-variants__container">
                <label class="variants-vigenere-cipher">Variantes</label>
                <select id="vigenere-variants" class="vigenere-variants">
                  <option value="standard">Cifrado Vigenère Estandar</option>
                  <option value="beaufort">Cifrado Beaufort</option>
                  <option value="german-variant">Variante Alemana</option>
                  <option value="trithemius">Cifrado Trithemius</option>
                </select>
              </div>
              <div class="vigenere-key__container">
                <label class="vigenere-key-label" for="vigenere-key-input"">Clave</label>
                <input type="text" class="vigenere-key__input" id="vigenere-key-input" value="jugaman" minlength="2">
              </div>
              <div class="vigenere-key-mode__container">
                  <label for="vigenere-key-mode">Comportamiento de Clave</label>
                  <select class="vigenere-key-modes" id="vigenere-key-modes">
                    <option value="repetir">Repetir</option>
                    <option value="autokey">Autoclave</option>
                  </select>
              </div>
              <div class="vigenere-alphabet__container">
                  <label for="vigenere-alphabet">Alfabeto:</label>
                  <input type="text" id="vigenere-alphabet" class="vigenere-alphabet-input" value="abcdefghijklmnopqrstuvwxyz">
              </div>
              <div class="vigenere-menu__last-block-container">
                  <div class="cesar-menu__case-sensitive">
                    <label for="case-sensitive">Discrimina mayús./minús.</label>
                    <select class="case-select" id="case-sensitive">
                      <option value="mantener">Mantener</option>
                      <option value="ignorar">Ignorar</option>
                      <option value="estricto">Estricto (A ≠ a)</option>
                    </select>
                  </div>
                  <div class="ceaser-menu__foreign-chars">
                    <label for="caracteres">Caracteres especiales:</label>
                    <select class="char-select" id="caracteres">
                      <option value="respetar">Incluir</option>
                      <option value="ignorar">Ignorar</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
              
          `;
      break;
    default:
      cipherCustomMenuContent = "";
      break;
  }
  // Una vez elegido el tipo de cifrado las etiquetas HTML son asignadas dentro del contenedor $cipherCustomMenuContainer
  $cipherCustomMenuContainer.innerHTML = cipherCustomMenuContent;

  //* En caso que el tipo de cifrado sea ROT su custom menu tendra los siguientes coportamientos
  const rotVariants = document.querySelectorAll(".rot");
  //Corroboramos que exista
  if (rotVariants) {
    // Iterar sobre cada botón con la clase "rot"
    rotVariants.forEach((button) => {
      // Asignar un evento de click a cada botón
      button.addEventListener("click", () => {
        // Iterar sobre todos los botones con la clase "rot"
        rotVariants.forEach((btn) => {
          // Eliminar la clase "active" de todos los botones
          btn.classList.remove("active");
          // Eliminar la clase "active" de los frames de los botones
          btn.querySelector(".rot-frame").classList.remove("active");
        });
        // Agregar la clase "active" al botón seleccionado
        button.classList.add("active");
        // Agregar la clase "active" al frame del botón seleccionado
        button.querySelector(".rot-frame").classList.add("active");
        inputTextBehaviour();
      });
    });
  }

  //* Cuando la clase cifrado del Bacon Cipher es cambiado en el custom menu, este se actualiza y cifra al cifrado seleccionado
  // Asigna una constante "select" que representa el elemento con clase ".bacon-variants"
  const select = document.querySelector(".bacon-variants");

  // Si el elemento "select" existe, se agrega un evento "change" al mismo. Este evento llama a la función "inputTextBehaviour" cuando se produce un cambio en el elemento.
  if (select) {
    select.addEventListener("change", () => {
      inputTextBehaviour();
    });
  }
  // Asigna una constante "$inputBaconChange" que representa una lista de elementos con clase ".letter-input".
  const $inputBaconChange = document.querySelectorAll(".letter-input");

  // Si la lista "$inputBaconChange" existe, se recorre cada elemento de la misma y se agrega un evento "input" a cada uno de ellos. Este evento llama a la función "inputTextBehaviour" cuando se produce un cambio en el elemento.
  if ($inputBaconChange) {
    $inputBaconChange.forEach((input) => {
      input.addEventListener("input", () => {
        inputTextBehaviour();
      });
    });
  }

  //* En caso que el tipo de cifrado sea "Alura Cipher" su custom menu tendra los siguientes coportamientos
  // Asigna una constante "$inputAluraChange" que representa una lista de elementos con clase ".alura__vocal-input".
  const $inputAluraChange = document.querySelectorAll(".alura__vocal-input");
  // Si la lista "$inputAluraChange" existe, se recorre cada elemento de la misma y se agrega un evento "input" a cada uno de ellos. Este evento llama a la función "inputTextBehaviour" cuando se produce un cambio en el elemento.
  if ($inputAluraChange) {
    $inputAluraChange.forEach((input) => {
      input.addEventListener("input", () => {
        inputTextBehaviour();
      });
    });
  }
  //* En caso que el tipo de cifrado sea "Cifrado Cesar" su custom menu tendra los siguientes coportamientos
  // Verifica si existe el elemento con id "substract-offset" en el documento
  if (document.getElementById("substract-offset")) {
    // Se obtienen los elementos a utilizar
    const offsetInput = document.getElementById("offset");
    const alphabetInput = document.getElementById("alphabet");
    const offsetPlaceholder = document.getElementById("offset-placeholder");
    const addOffsetBtn = document.getElementById("add-offset");
    const substractOffsetBtn = document.getElementById("substract-offset");
    const selectCaseStrategy = document.getElementById("case-sensitive");
    const charsStrategy = document.getElementById("caracteres");

    // Función para actualizar el engañoso placeholder según la entrada de offset y el alfabeto
    const updatePlaceholder = () => {
      let offset = parseInt(offsetInput.value) % alphabetInput.value.length;
      let letter = alphabetInput.value[offset];
      offsetPlaceholder.innerHTML = `${alphabetInput.value[0]} 🠖 ${letter}`;
    };
    // Llama a la función para actualizar el engañso placeholder por primera vez
    updatePlaceholder();

    // Agrega un evento de escucha al botón de restar offset
    substractOffsetBtn.addEventListener("click", () => {
      // Decrementa el valor de offset en 1
      let offset = document.getElementById("offset");
      offset.value = parseInt(offset.value) - 1;
      // Llama a la función inputTextBehaviour
      inputTextBehaviour();
      // Actualiza el engañoso placeholder
      updatePlaceholder();
    });

    // Agrega un evento de escucha al botón de sumar offset
    addOffsetBtn.addEventListener("click", () => {
      let offset = document.getElementById("offset");
      // Incrementa el valor de offset en 1
      offset.value = parseInt(offset.value) + 1;
      // Llama a la función inputTextBehaviour (no está definido en el código proporcionado)
      inputTextBehaviour();
      // Actualiza el engañso placeholder
      updatePlaceholder();
    });

    // Agrega un evento de escucha a la entrada de alfabeto
    alphabetInput.addEventListener("input", () => {
      // Código para actualizar el output al hacer cambios en el alfabeto
      inputTextBehaviour();
      // Actualiza el engañoso placeholder
      updatePlaceholder();
    });

    // Agrega un evento a la selección de estrategia de caso
    selectCaseStrategy.addEventListener("change", () => {
      // Código para ejecutar al hacer cambios en case-sensitive
      inputTextBehaviour();
    });

    charsStrategy.addEventListener("change", () => {
      // Código para ejecutar al hacer cambios en caracteres especiales
      inputTextBehaviour();
    });
  }

  //* En caso que el tipo de cifrado sea "vigenere-cipher" su custom menu tendra los siguientes coportamientos
  if (document.querySelector(".vigenere-cipher__container")) {
    let $key = document.getElementById("vigenere-key-input");
    let $alphabet = document.getElementById("vigenere-alphabet");
    let $specialChars = document.getElementById("caracteres");
    let $caseSensitive = document.getElementById("case-sensitive");
    let $keyMode = document.getElementById("vigenere-key-modes");
    let $vigenereVariants = document.getElementById("vigenere-variants");

    $alphabet.addEventListener("input", () => {
      inputTextBehaviour();
    });

    $keyMode.addEventListener("change", () => {
      inputTextBehaviour();
    });

    $caseSensitive.addEventListener("change", () => {
      inputTextBehaviour();
    });

    $specialChars.addEventListener("change", () => {
      inputTextBehaviour();
    });

    $key.addEventListener("input", () => {
      inputTextBehaviour();
    });

    $vigenereVariants.addEventListener("change", () => {
      inputTextBehaviour();
    });
  }

  // Al llamar a esta función al seleccionar el tipo de cifrado que se desea el texto que se encuentra dentro del id "input-text" se encriptara/desencriptara automaticamente
  inputTextBehaviour();
};

// Se exportan las variables y funciones por default al archivo principal
export default {
  $encryptionTypeButton,
  $aluraCipherButton,
  $encryptionTypeButtonTitle,
  $encryptionOptionButtons,
  $encryptionMenu,
  $closeButton,
  selectCipher,
};
