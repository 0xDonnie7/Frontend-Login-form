const form = document.querySelector("form");
const firstInput = document.querySelector(".firstName");
const firstError = document.querySelector(".errorFirstname");
const lastInput = document.querySelector(".lastName");
const lastError = document.querySelector(".errorLastname");
const emailInput = document.querySelector(".requiredEmail");
const emailError = document.querySelector(".errorEmail");
const textMessage = document.querySelector(".requiredText");
const messageError = document.querySelector(".errorMessage");
const radios = document.querySelectorAll('input[name="radio"]');
const checkError = document.querySelector(".checkRadioError");
const checkBox = document.querySelector(".myCheckbox");
const checkboxError = document.querySelector(".errorCheckbox");
const successWrapper = document.querySelector(".success-wrapper");

function checkFirstName() {
    if(firstInput.value.trim() === '') {
        firstError.classList.add("invalid");
        isValid = false;
    } else {
        firstError.classList.remove("invalid");
    }
 }

 function checkLastName() {
    if(lastInput.value.trim() === '') {
        lastError.classList.add("invalid");
        isValid = false;
    } else {
        lastError.classList.remove("invalid");
    }
 }

function checkEmail() {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailInput.value.match(pattern)) {
        emailError.classList.add("invalid");
        isValid = false;
    } else {
        emailError.classList.remove("invalid");
    }
}

function checkCheckbox() {
    const checkedRadios = document.querySelectorAll('input[name="radio"]:checked'); // Dynamic check
    if (checkedRadios.length === 0) {
        checkError.classList.add("invalid");
        isValid = false;
    } else {
        checkError.classList.remove("invalid");
    }
}


function checkMessage() {
    if(textMessage.value.trim() === '') {
        messageError.classList.add("invalid");
        isValid = false;
    } else {
        messageError.classList.remove("invalid");
    }
 }

 function boxChecked() {
    if(!checkBox.checked) {
        checkboxError.classList.add("invalid");
        isValid = false;
    } else {
        checkboxError.classList.remove("invalid");
    }
 }

form.addEventListener("submit", (e) => {
    e.preventDefault();

    isValid = true;

    checkFirstName();
    firstInput.addEventListener("keyup", checkFirstName);
    checkLastName();
    lastInput.addEventListener("keyup", checkLastName);
    checkEmail();
    emailInput.addEventListener("keyup", checkEmail);
    checkCheckbox();
    radios.forEach(radio => {
        radio.addEventListener("click", checkCheckbox);
    })
    checkMessage();
    textMessage.addEventListener("keyup", checkMessage);
    boxChecked();
    checkBox.addEventListener('change', boxChecked);

    if(isValid) {
        successWrapper.classList.remove("head-container");
        form.reset();
        setTimeout(() => {
            successWrapper.classList.add("head-container");
        }, 3000);
    }  
});
