const BOISSON1 = document.getElementById("boisson1");
const BOISSON2 = document.getElementById("boisson2");
const BOISSON3 = document.getElementById("boisson3");
const BOISSON4 = document.getElementById("boisson4");
const BOISSON5 = document.getElementById("boisson5");
const BOISSON6 = document.getElementById("boisson6");

//  ANCHOR emplacement de là où les images sont stockées
const IMG_BONK = document.getElementById("img-bonk");
// const IMG_EAU_P = document.getElementById("imageEauP");
// const IMG_EAU_G = document.getElementById("imageEauP");
// const IMG_COCA = document.getElementById("imageCoca");
// const IMG_JUS_P = document.getElementById("imageJusP");
// const IMG_NO_BOISSON1 = document.getElementById("noBoisson1");
// const IMG_NO_BOISSON2 = document.getElementById("noBoisson2");

const BTN1 = document.getElementById("btn1");
const BTN2 = document.getElementById("btn2");
const BTN3 = document.getElementById("btn3");
const BTN4 = document.getElementById("btn4");
const BTN5 = document.getElementById("btn5");
const BTN6 = document.getElementById("btn6");
const BTN7 = document.getElementById("btn7");
const BTN8 = document.getElementById("btn8");
const BTN9 = document.getElementById("btn9");

const BTN_RESET = document.getElementById("btnReset");
const BTN_VALIDER = document.getElementById("btnValider");
const AFFICHAGE = document.getElementById("affichage");

const STOCK1 = document.getElementById("stock1");
const STOCK2 = document.getElementById("stock2");
const STOCK3 = document.getElementById("stock3");
const STOCK4 = document.getElementById("stock4");
const STOCK5 = document.getElementById("stock5");
const STOCK6 = document.getElementById("stock6");

BTN1.addEventListener("click", () => {
  AFFICHAGE.innerText += "1";
});
BTN2.addEventListener("click", () => {
  AFFICHAGE.innerText += "2";
});
BTN3.addEventListener("click", () => {
  AFFICHAGE.innerText += "3";
});
BTN4.addEventListener("click", () => {
  AFFICHAGE.innerText += "4";
});
BTN5.addEventListener("click", () => {
  AFFICHAGE.innerText += "5";
});
BTN6.addEventListener("click", () => {
  AFFICHAGE.innerText += "6";
});
BTN7.addEventListener("click", () => {
  AFFICHAGE.innerText += "7";
});
BTN8.addEventListener("click", () => {
  AFFICHAGE.innerText += "8";
});
BTN9.addEventListener("click", () => {
  AFFICHAGE.innerText += "9";
});

BTN_RESET.addEventListener("click", () => {
  AFFICHAGE.innerText = " ";
});

// BTN_VALIDER.addEventListener("click", () => {
//   if (AFFICHAGE.innerText == 1) {
//     alert("Voici votre eau plate");
//   } else if (AFFICHAGE.innerText == 2) {
//     alert("Voici votre eau gazeuse");
//   } else if (AFFICHAGE.innerText == 3) {
//     alert("Voici votre Coca Cola");
//   } else if (AFFICHAGE.innerText == 4) {
//     alert("Voici votre jus de pomme");
//   } else if (AFFICHAGE.innerText == 5) {
//     alert("Cette boisson n'est pas disponible");
//   } else if (AFFICHAGE.innerText == 6) {
//     alert("Cette boisson n'est pas disponible");
//   } else {
//     alert("Commande non valide");
//   }
// });

// ANCHOR => RACCOURCIS pour les actions
BTN_VALIDER.addEventListener("click", () => {
  switch (AFFICHAGE.innerText) {
    case "1":
      // vérifier stock
      if (parseInt(STOCK1.innerText) > 0) {
        // donner boisson: afficher l'image mise en src ci-dessous
        IMG_BONK.src = "/images/Chaudfontaine.png";
        // baisser stock et mettre à jour stock
        STOCK1.innerText--;
      }
      // plus de stock
      else {
        AFFICHAGE.innerText = "No stock";
      }
      break;
    case "2":
      if (parseInt(STOCK2.innerText) > 0) {
        IMG_BONK.src = "/images/S.Pellegrino.png";
        STOCK2.innerText--;
      } else {
        AFFICHAGE.innerText = "No stock";
      }
      break;
    case "3":
      if (parseInt(STOCK3.innerText) > 0) {
        IMG_BONK.src = "/images/Coca.png";
        STOCK3.innerText--;
      } else {
        AFFICHAGE.innerText = "No stock";
      }
      break;
    case "4":
      if (parseInt(STOCK4.innerText) > 0) {
        IMG_BONK.src = "/images/AppleJuice.png";
        STOCK4.innerText--;
      } else {
        AFFICHAGE.innerText = "No stock";
      }
      break;
    case "5":
      if (parseInt(STOCK5.innerText) > 0) {
        IMG_BONK.src = "/Images/vide.svg";
        STOCK5.innerText--;
      } else {
        AFFICHAGE.innerText = "No stock";
      }
      break;
    case "6":
      if (parseInt(STOCK6.innerText) > 0) {
        IMG_BONK.src = "/Images/vide.svg";
        STOCK6.innerText--;
      } else {
        AFFICHAGE.innerText = "No stock";
      }
      break;
    default:
      AFFICHAGE.innerText = "ERROR";
      IMG_BONK.src = "/images/Empty.png";
      break;
  }

  // ANCHOR Exécute une action au bout de X temps avec la fonction
  // setTimeout ( () => {paramètre}, millisecondes)
  setTimeout(() => {
    AFFICHAGE.innerText = "";
    IMG_BONK.src = "";
  }, 1500);

  // ANCHOR Exécute une action toutes les X millisecondes avec la fonction
  // setInterval( () => {}, millisecondes)

  // ANCHOR exemple de compteur avec setInterval
  // let compteur = 0;
  // let timer = setInterval (() => {compteur ++;
  //console.log(compteur);
  // if (compteur >= 10)
  // clearInterval(timer);
  //})
});
