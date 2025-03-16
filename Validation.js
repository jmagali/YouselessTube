const form = document.getElementById('form')
const fullName_input = document.getElementById('fullName-input')
const username_input = document.getElementById('username-input')
const password_input = document.getElementById('password-input')
const repeat_password_input_one = document.getElementById('repeat-password-input-one')
const repeat_password_input_two = document.getElementById('repeat-password-input-two')
const repeat_password_input_three = document.getElementById('repeat-password-input-three')
const repeat_password_input_four = document.getElementById('repeat-password-input-four')
const error_message = document.getElementById('error-message')

form.addEventListener('submit', (e) => {
    //List of error messages
    let errors = []

    errors = getSignupFormErrors(
        firstname_input.value,
        username.value, password_input.value,
        repeat_password_input_one.value,
        repeat_password_input_two,
        repeat_password_input_three,
        repeat_password_input_four,
    )

    if (errors.length > 0) {
        // If there are any errors
        e.preventDefault()
        error_message.innerText = errors.join(". ")
    }
})

function getSignupFormErrors () {
    let errors = [];


}
