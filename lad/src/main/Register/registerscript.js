document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');
    const registerButton = document.getElementById('register-button');
    console.log('Register button element:', registerButton);
    
    registerButton.addEventListener('click', () => {
        console.log('Register button clicked');
        const studentid = document.getElementById('ID'); // Use the correct ID from HTML
        const username = document.getElementById('username');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const confirmpassword = document.getElementById('confirmpassword');
        
        console.log('ID element:', studentid);
        console.log('Username element:', username);
        console.log('Email element:', email);
        console.log('Password element:', password);
        console.log('Confirm Password element:', confirmpassword);

        // Compare the values of the input fields
        if (studentid.value === 'ITCSIU23006' && username.value === 'Duy1805' 
                                              && email.value === 'baoduy.song@gmail.com' 
                                              && password.value === 'Xaz73158' 
                                              && confirmpassword.value === 'Xaz73158') {
            console.log('Credentials correct, attempting redirect');
            window.location.href = '../Loginwindow/login.html';
        } else {
            alert('Invalid username or password.');
        }
    });
});
