document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.querySelector('.eye-icon');

    eyeIcon.addEventListener('click', () => {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            eyeIcon.src = 'images/eye-closed.svg';
        } else {
            passwordInput.type = 'password';
            eyeIcon.src = 'images/eye-open.svg';
        }
    });
});
