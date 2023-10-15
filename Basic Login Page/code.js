const password = document.querySelector('#password');
const showPassword = document.querySelector('span');

showPassword.addEventListener('click', function() {
    if (password.classList.contains('show')) {
        password.setAttribute('type', 'password');
        password.classList.remove('show');
        showPassword.textContent = "show";
    } else {
        password.setAttribute('type', 'text');
        password.classList.add('show');
        showPassword.textContent = "hide";
    }
})

