document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('login-button').addEventListener('click', () => {
        console.log('Login button clicked');
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Validate username and password (dummy validation)
        if (username === 'admin' && password === 'password') {
            console.log('Redirecting to ReportUI.html');
            // Redirect to ReportUI.html in the Frontend folder
            window.location.href = '../Frontend/ReportUI.html';
        } else {
            alert('Invalid username or password.');
        }
    });
});
