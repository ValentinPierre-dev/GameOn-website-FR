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
const modalSub = document.getElementsByClassName("btn-submit");

const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const eMail = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const nbTournament = document.getElementById("quantity");

const firstError = document.getElementById("first-error");
const lastError = document.getElementById("last-error");
const mailError = document.getElementById("mail-error");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal event
modalCls.forEach((cls) => cls.addEventListener("click", closeModal));

firstName.addEventListener("focusout", validateFirstName);
lastName.addEventListener("focusout", validateLastName);
eMail.addEventListener("focusout", validateMail);

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
    firstError.innerText = "Merci de rentrer au moins 2 caractères";
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
    lastError.innerText = "Merci de rentrer au moins 2 caractères";
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
    mailError.innerText = "Merci de rentrer une adresse mail valide";
    return false;
  }
}

// Validate Form
function validate(e) {
  e.preventDefault();
  const firstNameIsValid = validateFirstName();
  const lastNameIsValid = validateLastName();
  const eMailIsValid = validateMail();
  if (firstNameIsValid && lastNameIsValid && eMailIsValid){
    alert ("Inscription envoyée");
  }
}