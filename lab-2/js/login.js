const email = document.querySelector('.email-container input')
const password = document.querySelector('.password-container input')

const emailErrors = document.querySelector('.email-container .errors')
const passwordErrors = document.querySelector('.password-container .errors')


document.querySelector('form').addEventListener('submit', (event)=>{
    emailErrors.innerHTML = ''
    passwordErrors.innerHTML = ''

    if (email.value.trim() === '') {
        emailErrors.innerHTML = "Заполните email"
    }
    if (password.value.trim() === '') {
        passwordErrors.innerHTML = "Заполните пароль"
    }
    event.preventDefault()
})
