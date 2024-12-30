document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');
    const loginButton = document.getElementById('login-button');
    console.log('Login button element:', loginButton);
    
    loginButton.addEventListener('click', () => {
        console.log('Login button clicked');
        const username = document.getElementById('username');
        const password = document.getElementById('password');
        console.log('Username element:', username);
        console.log('Password element:', password);

        if (username.value === 'ITCSIU23006' && password.value ==='Xaz73158') {
            console.log('Credentials correct, attempting redirect');
            window.location.href = '../Frontend/MainPage/ReportUI.html';
        } else {
            alert('Invalid username or password.');
        }
    });
});
