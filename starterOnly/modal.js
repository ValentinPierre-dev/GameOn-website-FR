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

const firstName = document.getElementById("#first");
const lastName = document.getElementById("#last");
const eMail = document.getElementById("#email");
const birthDate = document.getElementById("#birthdate");
const nbTournament = document.getElementById("#quantity");

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


