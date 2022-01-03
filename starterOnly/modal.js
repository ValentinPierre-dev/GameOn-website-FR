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

const textControl = document.querySelectorAll(".text-control");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const eMail = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const nbTournament = document.getElementById("quantity");

const firstError = document.getElementById("first-error");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal event
modalCls.forEach((cls) => cls.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Validate Inputs
function validateTxtCtrl() {
  if (textControl.value !== null){
    return true;
  }
  else {
    alert("Merci de remplir les champs obligatoires");
    return false;
  }
}

function validateFirstName() {
  if (firstName.value.length >= 2) {
    firstError.innerText = "";
    return true;
  }
  else {
    firstError.innerText = "Merci de rentrer au moins 2 caractères";
    return false;
  }
}

function validateLastName() {
  if (lastName.value.length >= 2) {
    firstError.innerText = "";
    return true;
  }
  else {
    firstError.innerText = "Merci de rentrer au moins 2 caractères";
    return false;
  }
}

// Validate Form
function validate(e) {
  e.preventDefault();
  //validateTxtCtrl();
  const firstNameIsValid = validateFirstName();
  validateLastName();
  if (firstNameIsValid){
    alert ("Inscription envoyée");
  }
}

