const name = document.getElementById('name')
const email = document.getElementById ('email')
const form = document.getElementById ('form')
const errorElement = document.

form.addEventListener('submit', (e) => {
    let message = []
    if (name.value === '' || name.value == null){
        message.push('Your name is required')
    }
    e.preventDefault()
})