const form = document.getElementById('form');
const firstName_input = document.getElementById('firstName-input');
const lastName_input = document.getElementById('lastName-input');
const username_input = document.getElementById('username-input');
const password_input = document.getElementById('password-input');
const repeat_password_input_one = document.getElementById('repeat-password-input-one');
const repeat_password_input_two = document.getElementById('repeat-password-input-two');
const error_message = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
    // List of error messages
    let errors = getSignupFormErrors(
        firstName_input.value,
        lastName_input.value,
        username_input.value,
        password_input.value,
        repeat_password_input_one.value,
        repeat_password_input_two.value
    );

    // If there are any errors, prevent the form from submitting
    if (errors.length > 0) {
        e.preventDefault();
        error_message.innerHTML = errors.map(error => `<p>${error}</p>`).join('');
    }
    else {
        e.preventDefault();  // Prevent the form from actually submitting
        // Redirect to a new page
        window.location.href = 'Homepage.html';  // Change 'newpage.html' to the target page
    }


    console.log(errors);
});

function getSignupFormErrors(firstname, lastname, username, password, repeatPasswordOne, repeatPassWordTwo) {
    let errors = [];

    // Clear previous error states
    clearErrorStates();

    if (firstname === '' || firstname == null) {
        errors.push('First name is required');
        firstName_input.parentElement.classList.add('incorrect');
    }
    if (lastname === '' || lastname == null) {
        errors.push('Last name is required');
        lastName_input.parentElement.classList.add('incorrect');
    }
    if (username === '' || username == null) {
        errors.push('Username is required');
        username_input.parentElement.classList.add('incorrect');
    }
    if (password === '' || password == null) {
        errors.push('Password is required');
        password_input.parentElement.classList.add('incorrect');
    }
    if (password.length < 8) {
        errors.push('Password must have at least 8 characters');
        password_input.parentElement.classList.add('incorrect');
    }
    if (repeatPasswordOne !== repeatPassWordTwo) {
        errors.push('Repeated passwords do not match');
        repeat_password_input_one.parentElement.classList.add('incorrect');
        repeat_password_input_two.parentElement.classList.add('incorrect');
    }
    if (!includesNumber(password)) {
        errors.push('Password must include a number');
        password_input.parentElement.classList.add('incorrect');
    }
    if (!includesUpperCase(password)) {
        errors.push('Password must include a capital letter');
        password_input.parentElement.classList.add('incorrect');
    }
    if (!sumsToTwentyFour(password)) {
        errors.push('Digits must sum to 24');
        password_input.parentElement.classList.add('incorrect');
    }
    if (!includesJadon(password)) {
        errors.push('Password must include "Jadon"');
        password_input.parentElement.classList.add('incorrect');
    }
    if (!includesSpecialCharacter(password)) {
        errors.push('Password must include a special character');
        password_input.parentElement.classList.add('incorrect');
    }
    if (!includesWeekDay(password)) {
        errors.push('Password must include a weekday');
        password_input.parentElement.classList.add('incorrect');
    }

    return errors;
}

// Function to clear the error states
function clearErrorStates() {
    const allInputs = [firstName_input, lastName_input, username_input, password_input, repeat_password_input_one, repeat_password_input_two];
    allInputs.forEach(input => {
        input.parentElement.classList.remove('incorrect');
    });
    error_message.innerHTML = ''; // Clear any previous error messages
}

// Function to check if password includes a number
function includesNumber(password) {
    for (let i = 0; i < password.length; i++) {
        if (!isNaN(password[i]) && password[i] !== ' ') {
            return true;
        }
    }
    return false;
}

// Function to check if digits in password sum to 24
function sumsToTwentyFour(password) {
    let sum = 0;

    for (let i = 0; i < password.length; i++) {
        if (!isNaN(password[i]) && password[i] !== ' ') { // Only sum numeric digits
            sum += Number(password[i]);
        }
    }

    return sum === 24; // Return boolean directly
}

// Function to check if password includes an uppercase letter
function includesUpperCase(password) {
    for (let i = 0; i < password.length; i++) {
        if (password[i] !== password[i].toLowerCase()) {
            return true;
        }
    }
    return false;
}

// Function to check if password includes "Jadon"
function includesJadon(password) {
    return password.includes("Jadon");
}

// Function to check if password includes a special character
function includesSpecialCharacter(password) {
    const specialCharacters = "!@#$%^&*()_+-=[]{};:'\"\\|,.<>/?";
    for (let char of password) {
        if (specialCharacters.includes(char)) {
            return true;
        }
    }
    return false;
}

// Function to check if password includes a weekday
function includesWeekDay(password) {
    let weekDays = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY"];
    for (let i = 0; i < weekDays.length; i++) {
        if (password.toUpperCase().includes(weekDays[i])) {
            return true;
        }
    }

    return false; // Ensure it checks all weekdays
}

// Clear the error states when user starts typing
const allInputs = [firstName_input, lastName_input, username_input, password_input, repeat_password_input_one, repeat_password_input_two];

allInputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.parentElement.classList.contains('incorrect')) {
            input.parentElement.classList.remove('incorrect');
            error_message.innerText = '';
        }
    });
});

