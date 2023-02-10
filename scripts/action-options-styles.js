// Se obtienen los elementos necesarios
const $encryptBtn = document.getElementById("encrypt");
const $decryptBtn = document.getElementById("decrypt");

// La función toma como parámetro "action" y se utiliza para agregar la clase "active" al botón de la acción que haya sido seleccionado. Utiliza el método "getElementById" para obtener los elementos correspondientes en variables, para luego utilizar en esas variables el método "classList" para agregar o eliminar la clase "active" según corresponda. Esta funcion es para modificar lo styles de los botones encriptar y desencriptar
const selectAction = (action) => {
  if (action === "encrypt") {
    const $actionButtonAdd = document.getElementById("encrypt");
    const $actionButtonRemove = document.getElementById("decrypt");
    const $actionSpanAdd = document.getElementById("encrypt-action-span");
    const $actionSpanRemove = document.getElementById("decrypt-action-span");
    $actionButtonAdd.classList.add("active");
    $actionButtonRemove.classList.remove("active");
    $actionSpanAdd.classList.add("active");
    $actionSpanRemove.classList.remove("active");
  } else if (action === "decrypt") {
    const $actionButtonAdd = document.getElementById("decrypt");
    const $actionButtonRemove = document.getElementById("encrypt");
    const $actionSpanAdd = document.getElementById("decrypt-action-span");
    const $actionSpanRemove = document.getElementById("encrypt-action-span");
    $actionButtonAdd.classList.add("active");
    $actionButtonRemove.classList.remove("active");
    $actionSpanAdd.classList.add("active");
    $actionSpanRemove.classList.remove("active");
  }
};

// Seleccionar opción de encriptar por defecto al cargar la página
const defaultAction = () => document.getElementById("encrypt").click();

// Se exportan por default las variables y funciones
export default {
  $encryptBtn,
  $decryptBtn,
  selectAction,
  defaultAction,
};
