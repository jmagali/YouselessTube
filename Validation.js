const form = document.getElementById('form')
const firstName_input = document.getElementById('firstName-input')
const lastName_input = document.getElementById('lastName-input')
const username_input = document.getElementById('username-input')
const password_input = document.getElementById('password-input')
const repeat_password_input_one = document.getElementById('repeat-password-input-one')
const repeat_password_input_two = document.getElementById('repeat-password-input-two')
const error_message = document.getElementById('error-message')

form.addEventListener('submit', (e) => {
    //List of error messages
    let errors = []

    errors = getSignupFormErrors(
        firstName_input.value,
        lastName_input.value,
        username_input.value, 
        password_input.value,
        repeat_password_input_one.value,
        repeat_password_input_two.value
    )

    if (errors.length > 0) {
        // If there are any errors
        e.preventDefault()
        error_message.innerText = errors.join(". ")
    }

    console.log(errors);
})

function getSignupFormErrors(firstname, lastname, username, password, repeatPasswordOne, repeatPassWordTwo) {
    let errors = [];

    if (firstname === '' || firstname == null) {
        errors.push('First name is required')
        firstName_input.parentElement.classList.add('incorrect')
    }
    if (lastname === '' || lastname == null) {
        errors.push('Last name is required')
        lastName_input.parentElement.classList.add('incorrect')
    }
    if (username === '' || username == null) {
        errors.push('Username is required')
        username_input.parentElement.classList.add('incorrect')
    }
    if (password === '' || password == null) {
        errors.push('Password is required')
        password_input.parentElement.classList.add('incorrect')
    }
    if (password.length < 8) {
        errors.push('Password must have at least 8 characters')
        password_input.parentElement.classList.add('incorrect')
    }
    if (password !== repeatPasswordOne || password !== repeatPasswordTwo) {
        errors.push('Password does not match repeated password')
        password_input.parentElement.classList.add('incorrect')
        repeat_password_input_two.parentElement.classList.add('incorrect')
    }
    if (includesNumber(password)) {
        errors.push('Password must include a number')
        password_input.parentElement.classList.add('incorrect')
    }
    if (includesUpperCase(password)) {
        errors.push('Password must include a capital letter')
        password_input.parentElement.classList.add('incorrect')
    }
    if (sumsToTwentyFour(password)) {
        errors.push('Digits must sum to 24')
        password_input.parentElement.classList.add('incorrect')
    }
    if (includesJadon(password)) {
        errors.push('Password must include "Jadon"')
        password_input.parentElement.classList.add('incorrect')
    }
    if (includesSpecialCharacter(password)) {
        errors.push('Password must include a special character')
        password_input.parentElement.classList.add('incorrect')
    }
    if (includesWeekDay(password)) {
        errors.push('Password must include a weekday')
        password_input.parentElement.classList.add('incorrect')
    }

    return errors;
}

function includesNumber(password) {

    for (let i = 0; i < password.length; i++) {

        if (isNaN(password[i])) {
            return true;
        }

        return false;
    }
}

function sumsToTwentyFour(password) {
    let sum = 0;

    for (let i = 0; i < password.length; i++) {

        if (isNaN(password[i])) {
            sum += password[i];
        }
    }

    if (sum == 24) {
        return true;
    }

    return false;
}

function includesUpperCase(password) {

    for (let i = 0; i < password.length; i++) {

        if (password[i] === password[i].toUpperCase()) {
            return true;
        }
    }

    return false;
}

function includesJadon(password) {

    return password.includes("Jadon")

}

function includesSpecialCharacter(password) {
    const specialCharacters = "!@#$%^&*()_+-=[]{};:'\"\\|,.<>/?";

    for (let char of password) {
        if (specialCharacters.includes(char)) {
            return true;
        }
    }
    return false;
}

function includesWeekDay(password) {

    let weekDays = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY"];

    for (let i = 0; i < weekDays.length; i++) {
        if (password.toUpperCase().includes(weekDays[i])) {
            return true;
        }

        return false;
    }
}



