// Se exporta el código de encryptado Alura Cipher
export const encryptAluraCipher = () => {
  let $text = document.getElementById("input-text").value;
  let $vocalA = document.getElementById("alura-vocal-a").value;
  let $vocalE = document.getElementById("alura-vocal-e").value;
  let $vocalI = document.getElementById("alura-vocal-i").value;
  let $vocalO = document.getElementById("alura-vocal-o").value;
  let $vocalU = document.getElementById("alura-vocal-u").value;

  $text = $text.replace(/e/g, $vocalE);
  $text = $text.replace(/i/g, $vocalI);
  $text = $text.replace(/a/g, $vocalA);
  $text = $text.replace(/o/g, $vocalO);
  $text = $text.replace(/u/g, $vocalU);
  document.getElementById("output-text").value = $text;
};

// Se exporta el código de desencryptado Alura Cipher
export const decryptAluraCipher = () => {
  let $text = document.getElementById("input-text").value;
  let $vocalA = document.getElementById("alura-vocal-a").value;
  let $vocalE = document.getElementById("alura-vocal-e").value;
  let $vocalI = document.getElementById("alura-vocal-i").value;
  let $vocalO = document.getElementById("alura-vocal-o").value;
  let $vocalU = document.getElementById("alura-vocal-u").value;

  $text = $text.replace(new RegExp($vocalE, "g"), "e");
  $text = $text.replace(new RegExp($vocalI, "g"), "i");
  $text = $text.replace(new RegExp($vocalA, "g"), "a");
  $text = $text.replace(new RegExp($vocalO, "g"), "o");
  $text = $text.replace(new RegExp($vocalU, "g"), "u");
  document.getElementById("output-text").value = $text;
};
