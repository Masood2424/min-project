
const validateForm = () => {
    let isValid = true;
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    clearErrors();

    if (name === '' || name.length < 3) {
        showError('nameError', 'Name must be at least 3 characters long.');
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError('emailError', 'Please enter a valid email address.');
        isValid = false;
    }

    if (password.length < 6) {
        showError('passwordError', 'Password must be at least 6 characters long.');
        isValid = false;
    }

    return isValid;
};

const clearErrors = () => {
    document.querySelectorAll('.error').forEach((error) => (error.style.display = 'none'));
};

const showError = (elementId, message) => {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
};

document.getElementById('registrationForm').addEventListener('submit', (event) => {
    event.preventDefault(); 

    if (validateForm()) {
        alert('Registration Successful!');
        document.getElementById('registrationForm').reset();
    }
});
