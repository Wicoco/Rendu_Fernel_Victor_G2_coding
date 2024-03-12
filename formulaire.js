// Dark mode
const themeButton = document.getElementById("theme");
function onClick() {
  document.body.classList.toggle("dark");
}

themeButton.addEventListener("click", onClick);

// Section d'erreur
let errorContainer = document.querySelector(".message-error");
let errorList = document.querySelector(".message-error ul");
// On vide les erreurs avant nouvelle vérif + cache le message
errorList.innerHTML = "";
errorContainer.classList.remove("visible");

let successContainer = document.querySelector(".message-success");
successContainer.classList.remove("visible");

let email = document.querySelector("#email");

// Vérification de l'email
let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (email.value == "") {
    // Saisie invalide
    errorContainer.classList.add("visible");
    email.classList.remove("success");
    // Message d'erreur
    let err = document.createElement("li");
    err.innerText = "Le champ email ne peut pas être vide";
    // Ajout au container
    errorList.appendChild(err);
  } else {
    // Saisie valide
    email.classList.add("success");
  }

  // Vérification du nom
  let nom = document.querySelector("#nom");

  if (nom.value == "") {
    // Vérification sur la longueur du nom (devant être supérieure à 6)
    errorContainer.classList.add("visible");
    nom.classList.remove("success");
    nom.classList.add("error");

    let err = document.createElement("li");
    err.innerText = "Le champ 'Nom' doit contenir au moins 6 caractères";

    errorList.appendChild(err);
  } else {
    nom.classList.add("success");
    nom.classList.remove("error");
  }

  // Vérification du nom
  let prenom = document.querySelector("#prenom");
  if (prenom.value == "") {
    // Vérification sur la longueur du nom (devant être supérieure à 6)
    errorContainer.classList.add("visible");
    prenom.classList.remove("success");
    prenom.classList.add("error");

    let err = document.createElement("li");
    err.innerText = "Le champ 'Prénom' doit contenir au moins 6 caractères";

    errorList.appendChild(err);
  } else {
    prenom.classList.add("success");
    prenom.classList.remove("error");
  }

  // Vérification du mot de passe
  let passCheck = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
  );
  let password = document.querySelector("#password");

  if (password.value.length < 10 || passCheck.test(password.value) == false) {
    errorContainer.classList.add("visible");
    password.classList.remove("success");

    // Création d'un message d'erreur
    let err = document.createElement("li");
    err.innerText =
      "Le mot de passe doit faire 10 caractères minimum, contenir minuscule, majuscule, chiffre, caractère spécial";

    // Ajout au container
    errorList.appendChild(err);
  } else {
    password.classList.add("success");
  }

  let passwordInitial = document.querySelector("#password");
  let passwordRepeat = document.querySelector("#password2");

  if (passwordInitial.value != passwordRepeat.value) {
    errorContainer.classList.add("visible");
    passwordRepeat.classList.remove("success");

    // Message d'erreur

    let err = document.createElement("li");
    err.innerText = "Les mots de passe sont différents";

    // Ajout au container du msg d'erreur
    errorList.appendChild(err);
  } else {
    passwordRepeat.classList.add("success");
  }

  if (
    nom.classList.contains("success") &&
    prenom.classList.contains("success") &&
    email.classList.contains("success") &&
    password.classList.contains("success") &&
    passwordRepeat.classList.contains("success")
  ) {
    console.log("yes");
    successContainer.classList.add("visible");
  }
});
