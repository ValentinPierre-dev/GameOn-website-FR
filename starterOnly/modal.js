function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCls = document.querySelectorAll(".close");
const modalBody = document.querySelectorAll(".modal-body");
const modalValid = document.querySelectorAll(".modal-valid");
const modalSub = document.querySelectorAll(".btn-submit");

const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const eMail = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const nbTournament = document.getElementById("quantity");
const location1 = document.getElementById("location1");
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const location4 = document.getElementById("location4");
const location5 = document.getElementById("location5");
const location6 = document.getElementById("location6");
const checkbox = document.getElementById("checkbox1");

const firstError = document.getElementById("first-error");
const lastError = document.getElementById("last-error");
const mailError = document.getElementById("mail-error");
const birthError = document.getElementById("birth-error");
const tournamentError = document.getElementById("tournament-error");
const locationError = document.getElementById("location-error");
const checkboxError = document.getElementById("checkbox-error");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal event
modalCls.forEach((cls) => cls.addEventListener("click", closeModal));

firstName.addEventListener("change", validateFirstName);
lastName.addEventListener("change", validateLastName);
eMail.addEventListener("change", validateMail);
birthDate.addEventListener("change", validateBirthDate);
nbTournament.addEventListener("change", validateTournament);

modalSub.addEventListener("click", validate(e));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Validate First Name
function validateFirstName() {
  if (firstName.value.length >= 2) {
    firstName.style.border = "3px solid #279E7A";
    firstError.innerText = "";
    return true;
  }
  else {
    firstName.style.border = "2px solid red";
    firstError.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    return false;
  }
}

// Validate Last Name
function validateLastName() {
  if (lastName.value.length >= 2) {
    lastName.style.border = "3px solid #279E7A";
    lastError.innerText = "";
    return true;
  }
  else {
    lastName.style.border = "2px solid red";
    lastError.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    return false;
  }
}

// Validate E-Mail
function validateMail() {
  if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(eMail.value)) {
    eMail.style.border = "3px solid #279E7A";
    mailError.innerText = "";
    return true;
  }
  else {
    eMail.style.border = "2px solid red";
    mailError.innerText = "Veuillez entrer une adresse mail valide.";
    return false;
  }
}

// Validate Birth date
function validateBirthDate() {
  if (/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.test(birthDate.value)) {
    birthDate.style.border = "3px solid #279E7A";
    birthError.innerText = "";
    return true;
  }
  else {
    birthDate.style.border = "2px solid red";
    birthError.innerText = "Vous devez entrer votre date de naissance.";
    return false;
  }
}

// Validate Tournament quantity
function validateTournament() {
  if (/^[1-9][0-9]?$/.test(nbTournament.value)) {
    nbTournament.style.border = "3px solid #279E7A";
    tournamentError.innerText = "";
    return true;
  }
  else {
    nbTournament.style.border = "2px solid red";
    tournamentError.innerText = "Veuillez entrer une valeur numérique valide.";
    return false;
  }
}

// Validate Locations
function validateLocations() {
  if (!location1.checked && !location2.checked && !location3.checked && !location4.checked && !location5.checked && !location6.checked) {
    locationError.innerText = "Veuillez sélectionner une ville.";
    return false;
  }
  else {
    locationError.innerText = "";
    return true;
  }
}

// Validate Checkbox
  function validateCheckbox() {
  if (!checkbox.checked) {
    checkboxError.innerText = "Veuillez accepter les conditions d'utilisation.";
    return false;
  }
  else {
    checkboxError.innerText = "";
    return true;
  }
}

// Validate Form
function validate(e) {
  e.preventDefault();
  const firstNameIsValid = validateFirstName();
  const lastNameIsValid = validateLastName();
  const eMailIsValid = validateMail();
  const birthDateIsValid = validateBirthDate();
  const nbTournamentIsValid = validateTournament();
  const locationsIsValid = validateLocations();
  const checkboxIsValid = validateCheckbox();
  if (firstNameIsValid && lastNameIsValid && eMailIsValid && birthDateIsValid && nbTournamentIsValid && locationsIsValid && checkboxIsValid){
    alert("Incription validée");
  }
}