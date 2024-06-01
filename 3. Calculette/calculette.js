// Importation de HTML
const NB1 = document.getElementById("nb1");
const NB2 = document.getElementById("nb2");
const RESULT = document.getElementById("resultat");
const BTN_PLUS = document.getElementById("btnPlus");
const BTN_MOINS = document.getElementById("btnMoins");
const BTN_FOIS = document.getElementById("btnFois");
const BTN_DIV = document.getElementById("btnDiv");
const BTN_POURCENT = document.getElementById("btnPourcent");
// ------------------------------------------------------
// Texte en Nombre
// let premierNombre = parseFloat(NB1.value);
// let deuxièmeNombre = parseFloat(NB2.value);
// console.log(premierNombre, deuxièmeNombre);
// ------------------------------------------------------
// Boutons écoutés
// const BTN_PLUS = document.getElementById("btnPlus");
// BTN_PLUS.addEventListener("click", () => {
//   premierNombre + deuxièmeNombre;
// });
// const BTN_MOINS = document.getElementById("btnMoins");
// BTN_MOINS.addEventListener("click", () => {
//   premierNombre - deuxièmeNombre;
// });
// const BTN_FOIS = document.getElementById("btnFois");
// BTN_FOIS.addEventListener("click", () => {
//   premierNombre * deuxièmeNombre;
// });
// const BTN_DIV = document.getElementById("btnDiv");
// BTN_DIV.addEventListener("click", () => {
//   premierNombre / deuxièmeNombre;
// });
// const BTN_POURCENT = document.getElementById("btnPourcent");
// BTN_POURCENT.addEventListener("click", () => {
//   premierNombre * deuxièmeNombre;
// });
// console.log(BTN_PLUS, BTN_MOINS, BTN_FOIS, BTN_DIV, BTN_POURCENT);
// ------------------------------------------------------
// Texte en nombre direct dans bouton écouté
BTN_PLUS.addEventListener("click", () => {
  RESULT.innerText = `Le résultat est : ${
    parseInt(NB1.value) + parseInt(NB2.value)
  }`;
});
BTN_MOINS.addEventListener("click", () => {
  RESULT.innerText = `Le résultat est : ${
    parseInt(NB1.value) - parseInt(NB2.value)
  }`;
});
BTN_FOIS.addEventListener("click", () => {
  RESULT.innerText = `Le résultat est : ${
    parseInt(NB1.value) * parseInt(NB2.value)
  }`;
});
BTN_DIV.addEventListener("click", () => {
  RESULT.innerText = `Le résultat est : ${
    parseInt(NB1.value) / parseInt(NB2.value)
  }`;
});
BTN_POURCENT.addEventListener("click", () => {
  RESULT.innerText = `Le résultat est : ${
    parseInt(NB1.value) % parseInt(NB2.value)
  }`;
});

// if (isNaN(RESULT)) {
// return `L'opération n'est pas possible`;
// }
