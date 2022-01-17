function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// Variables
const borderSuccess = "3px solid #279E7A";
const borderError = "2px solid red";
const animError = "headshake 100ms cubic-bezier(.4,.1,.6,.9)";

const limitAge = 504576000000;
const limitYear = 1920;

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCls = document.querySelectorAll(".close");
const modalBody = document.querySelectorAll(".modal-body");
const success = document.getElementById("success");

const suscribeForm = document.getElementById("suscribe-form");
const modalSub = document.getElementById("disable-btn");
const modalCont = document.getElementById("modal-content");

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

// Inputs validation in real time
firstName.addEventListener("change", validateFirstName);
firstName.addEventListener("change", enableBtn);

lastName.addEventListener("change", validateLastName);
lastName.addEventListener("change", enableBtn);

eMail.addEventListener("change", validateMail);
lastName.addEventListener("change", enableBtn);

birthDate.addEventListener("change", validateBirthDate);
lastName.addEventListener("change", enableBtn);

nbTournament.addEventListener("change", validateTournament);
nbTournament.addEventListener("change", enableBtn);

location1.addEventListener("change", enableBtn);
location1.addEventListener("change", enableBtn);
location2.addEventListener("change", enableBtn);
location3.addEventListener("change", enableBtn);
location4.addEventListener("change", enableBtn);
location5.addEventListener("change", enableBtn);
location6.addEventListener("change", enableBtn);

checkbox.addEventListener("change", enableBtn);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form
function closeModal() {
  modalbg.style.display = "none";
  suscribeForm.style.display = "block";
  success.style.display = "none";
}

// Validate First Name
function validateFirstName() {
  if (firstName.value.length >= 2) {
    firstName.style.border = borderSuccess;
    firstError.innerText = "";
    return true;
  }
  else {
    firstName.style.border = borderError;
    firstName.style.animation = animError;
    firstError.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    return false;
  }
}

// Validate Last Name
function validateLastName() {
  if (lastName.value.length >= 2) {
    lastName.style.border = borderSuccess;
    lastError.innerText = "";
    return true;
  }
  else {
    lastName.style.border = borderError;
    lastName.style.animation = animError;
    lastError.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    return false;
  }
}

// Validate E-Mail
function validateMail() {
  const mailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (mailRegex.test(eMail.value)) {
    eMail.style.border = borderSuccess;
    mailError.innerText = "";
    return true;
  }
  else {
    eMail.style.border = borderError;
    eMail.style.animation = animError;
    mailError.innerText = "Veuillez entrer une adresse mail valide.";
    return false;
  }
}

// Validate Birth date
function validateBirthDate() {
  const date = new Date(birthDate.value);
  const now = new Date();
  if (birthDate.value.length !== 0 && now.getTime() - date.getTime() >= limitAge && date.getFullYear() > limitYear) {
    birthDate.style.border = borderSuccess;
    birthError.innerText = "";
    return true;
  }
  else {
    birthDate.style.border = borderError;
    birthDate.style.animation = animError;
    birthError.innerText = "Vous devez entrer une date de naissance valide.";
    return false;
  }
}

// Validate Tournament quantity
function validateTournament() {
  const nbRegex = /^[0-9][0-9]?$/;
  if (nbRegex.test(nbTournament.value)) {
    nbTournament.style.border = borderSuccess;
    tournamentError.innerText = "";
    return true;
  }
  else {
    nbTournament.style.border = borderError;
    nbTournament.style.animation = animError;
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
    suscribeForm.style.display = "none";
    success.style.display = "block";
    firstName.style.border = "none";
    lastName.style.border = "none";
    eMail.style.border = "none";
    birthDate.style.border = "none";
    nbTournament.style.border = "none";
    modalSub.style.opacity = "0.2";
    modalSub.style.cursor = "auto";
    suscribeForm.reset();
  }
}



// First Name for enable button
function enableFirstName() {
  if (firstName.value.length >= 2) {
    return true;
  }
  else {
    return false;
  }
}

// Last Name for enable button
function enableLastName() {
  if (lastName.value.length >= 2) {
    return true;
  }
  else {
    return false;
  }
}

// E-Mail for enable button
function enableMail() {
  if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(eMail.value)) {
    return true;
  }
  else {
    return false;
  }
}

// Birth date for enable button
function enableBirthDate() {
  const date = new Date(birthDate.value);
  const now = new Date();
  if (birthDate.value.length !== 0 && now.getTime() - date.getTime() >= limitAge && date.getFullYear() > limitYear) {
    return true;
  }
  else {
    return false;
  }
}

// Tournament quantity for enable button
function enableTournament() {
  if (/^[1-9][0-9]?$/.test(nbTournament.value)) {
    return true;
  }
  else {
    return false;
  }
}

// Locations for enable button
function enableLocations() {
  if (!location1.checked && !location2.checked && !location3.checked && !location4.checked && !location5.checked && !location6.checked) {
    return false;
  }
  else {
    locationError.innerText = "";
    return true;
  }
}

// Checkbox for enable button
  function enableCheckbox() {
  if (!checkbox.checked) {
    return false;
  }
  else {
    checkboxError.innerText = "";
    return true;
  }
}

// Enable submit button
function enableBtn() {
  const firstNameIsEnable = enableFirstName();
  const lastNameIsEnable = enableLastName();
  const eMailIsEnable = enableMail();
  const birthDateIsEnable = enableBirthDate();
  const nbTournamentIsEnable = enableTournament();
  const locationsIsEnable = enableLocations();
  const checkboxIsEnable = enableCheckbox();
  if (firstNameIsEnable && lastNameIsEnable && eMailIsEnable && birthDateIsEnable && nbTournamentIsEnable && locationsIsEnable && checkboxIsEnable){
    modalSub.style.opacity = "1";
    modalSub.style.cursor = "pointer";
  }
}