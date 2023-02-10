// Este archivo genera un script para establecer los diferentes comportamientos que tendrá el boton de copiado de texto al realizarse alguna acción sobre este

// Se obtienen los elementos necesarios
const $copyButton = document.getElementById("copy-button");
const $outputText = document.getElementById("output-text");
const $copyMessage = document.getElementById("copy-message");

// La función "behaviorCopyButton" se encarga de agregar un evento al botón "$copyButton" para copiar el contenido del "$outputText" al portapapeles. Al hacer clic en el botón, se comprueba si el "$outputText" tiene al menos un carácter y si es así, se utiliza la función "writeText" de la API de "navigator.clipboard" para escribir el contenido del "outputText" en el portapapeles. Si se produce un error, se muestra un mensaje de error en el "$copyMessage" y se registra en la consola. Si el "$outputText" está vacío, se muestra un mensaje de error diferente en el "c$opyMessage". En ambos casos, el "$copyMessage" se oculta automáticamente después de 2 segundos.
const behaviorCopyButton = () => {
  $copyButton.addEventListener("click", () => {
    if ($outputText.value.length > 0) {
      navigator.clipboard
        .writeText($outputText.value)
        .then(() => {
          $copyMessage.textContent = "Copiado!";
          $copyMessage.classList.add("success");
          $copyMessage.style.display = "block";
          setTimeout(() => {
            $copyMessage.style.display = "none";
            $copyMessage.classList.remove("success");
          }, 2000);
        })
        .catch((err) => {
          $copyMessage.textContent = "Error al intentar copiar el texto";
          $copyMessage.classList.add("error");
          $copyMessage.style.display = "block";
          console.error("Error al intentar copiar el texto en el portapapeles: ", err);
          setTimeout(() => {
            $copyMessage.style.display = "none";
            $copyMessage.classList.remove("error");
          }, 2000);
        });
    } else {
      $copyMessage.textContent = "El texto debe tener al menos 1 caracter";
      $copyMessage.classList.add("error");
      $copyMessage.style.display = "block";
      setTimeout(() => {
        $copyMessage.style.display = "none";
        $copyMessage.classList.remove("error");
      }, 2000);
    }
  });
};

// Se exportan las 3 variables y la función behaviorCopyButton por default
export default {
  $copyButton,
  $outputText,
  $copyMessage,
  behaviorCopyButton,
};
