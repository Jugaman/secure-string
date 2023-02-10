// Este archivo es el archivo principal/padre del resto de archivos Javascript. Este es el archivo script el cual es llamado desde el HTML. En este se importan las diferentes variables y funciones necesarias para el correcto funcionamiento de la aplicación

// Se importan las funciones y variables necesarias de diferentes archivos
import menuElements from "./menu.js";
import actionsElements from "./action-options-styles.js";
import copyButtonElements from "./copy-btn.js";
import { inputTextBehaviour, servicesBehaviour } from "./services-behaviour.js";

//!----------------------------------------------------------------
//* Estos elementos son importados desde "./copy-btn.js"*/

// Establece el comportamiento del boton de copiado
copyButtonElements.behaviorCopyButton();

//!----------------------------------------------------------------
//* Estos elementos son importados desde "./encryptions-menu.js" */

menuElements.$encryptionOptionButtons.forEach(function (option) {
  option.addEventListener("click", function () {
    menuElements.selectCipher(this);
  });
});

// Agregar un evento de click al botón al cargar la página
// Obtener el botón

window.addEventListener("load", function () {
  menuElements.$aluraCipherButton.click();
});
//!----------------------------------------------------------------
//* Estos elementos son importados desde "./action-options.js"*/

// Se agrega el evento click a cada boton con su respectiva funcion a ejecutar
actionsElements.$encryptBtn.addEventListener("click", () =>
  actionsElements.selectAction("encrypt")
);
actionsElements.$decryptBtn.addEventListener("click", () =>
  actionsElements.selectAction("decrypt")
);

// Seleccionar la acción de ecnriptar por defecto
actionsElements.defaultAction();

//!----------------------------------------------------------------
//* Estos elementos son importados desde "./app-behaviour.js"*/

// Las siguientes variables ($encryptBtn y $decryptBtn) de selección de elementos fueron declaradas en "./action-options.js", que al capturar el evento click ejecutaran la función servicesBehaviour con su parametro correspondiente
actionsElements.$encryptBtn.addEventListener("click", () =>
  servicesBehaviour("encrypt")
);
actionsElements.$decryptBtn.addEventListener("click", () =>
  servicesBehaviour("decrypt")
);

// Al capturar el evento input en el elemento este ejecutará la funcion inputTextBehavior la cual posee en su interior todos los algoritmos de los diferentes tipos de cifrados disponibles
document.getElementById("input-text").addEventListener("input", () => {
  inputTextBehaviour();
});
