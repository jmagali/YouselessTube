const form = document.getElementById('form')
const fullName_input = document.getElementById('fullName-input')
const username_input = document.getElementById('username-input')
const password_input = document.getElementById('password-input')
const repeat_password_input_one = document.getElementById('repeat-password-input-one')
const repeat_password_input_two = document.getElementById('repeat-password-input-two')
const error_message = document.getElementById('error-message')

form.addEventListener('submit', (e) => {
    //List of error messages
    let errors = []

    errors = getSignupFormErrors(
        firstname_input.value,
        username.value, password_input.value,
        repeat_password_input_one.value,
        repeat_password_input_two
    )

    if (errors.length > 0) {
        // If there are any errors
        e.preventDefault()
        error_message.innerText = errors.join(". ")
    }
})

function getSignupFormErrors (fullName, username, password, repeatPasswordOne, repeatPassWordTwo) {
    let errors = [];

    if (fullName === '' || fullName == null) {
        errors.push('Full name is required')
        fullName_input.parentElement.classList.add('incorrect')
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

    return errors;
}
