const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');

const form = document.getElementById('loginForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    let hasErrors = false;

    if (!validateUsername(usernameInput.value)) {
        hasErrors = true;
        usernameError.textContent = 'Username must be at least 6 characters long';
        usernameError.style.display = 'block';
    }

    if (!validatePassword(passwordInput.value)) {
        hasErrors = true;
        passwordError.textContent = 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number';
        passwordError.style.display = 'block';
    }

    if (!hasErrors) {
        alert('Login successful!');
    }
});

function validateUsername(username) {
    return username.length >= 6;
}

function validatePassword(password) {
    return (
        password.length >= 8 &&
        /[A-Z]/.test(password) &&
        /[a-z]/.test(password) &&
        /\d/.test(password)
    );
}
