// console.log = pour afficher dans la console du site
// ---------------------------------------------------------
// Option 1
// let firstName = prompt("Prénom", "Lara");
// let surname = prompt("Nom de famille", "L");
// let birthday = prompt("année de naissance", "1996");
// const currentYear = new Date().getFullYear();
// const age = currentYear - birthday;
// alert(
//   "Bonjour " +
//     firstName +
//     " " +
//     surname +
//     ", cette année vous fêtez vos " +
//     age +
//     " ans"
// );
// ---------------------------------------------------------
// Option 2
// let firstName = prompt("Prénom", "Lara");
// let surname = prompt("Nom de famille", "L");
// let birthday = prompt("année de naissance", "1996");
// const currentYear = new Date().getFullYear();
// alert(
//   "Bonjour" +
//     firstName +
//     " " +
//     surname +
//     ", cette année vous fêtez vos " +
//     (currentYear - birthday) +
//     " ans"
// );
// ---------------------------------------------------------
// Option 3 avec parseInt(string) qui attend une chaine de caractères en paramètre et va essayer de la transformer en number. Si ça réussit, on a l'entier converti sinon on aura NaN
// let firstName = prompt("Prénom", "Lara");
// let surname = prompt("Nom de famille", "L");
// const currentYear = new Date().getFullYear();
// let birthday = parseInt(prompt("année de naissance", "1996"));
// alert(
//   "Bonjour" +
//     firstName +
//     " " +
//     surname +
//     ", cette année vous fêtez vos " +
//     (currentYear - birthday) +
//     " ans"
// );
// ---------------------------------------------------------
// Option 4 : tips de l'interpolation avec le backtick ``
let firstName = prompt("Prénom", "Lara");
let surname = prompt("Nom de famille", "L");
let birthday = prompt("année de naissance", "1996");
const currentYear = new Date().getFullYear();
alert(
  `Bonjour ${firstName} ${surname}, cette année vous fêtez vos ${
    currentYear - birthday
  } ans`
);
