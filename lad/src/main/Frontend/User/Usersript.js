document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');

    // Function to fetch user data
    const fetchUserData = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/users/${userId}');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const userData = await response.json();
            displayUserData(userData);
        } catch (error) {
            console.error('Failed to fetch user data:', error);
        }
    };

    // Function to display user data
    const displayUserData = (userData) => {
        const userProfile = document.getElementById('user-profile');
        if (userProfile) {
            userProfile.innerHTML = `
                <div>${userData.name}</div>
                <div>Email: ${userData.email}</div>
                <div>Username: ${userData.username}</div>
            `;
        } else {
            console.error('User profile element not found!');
        }
    };
    

    // Fetch and display user data on page load
    fetchUserData();

    // Redirect functionality for the return button
    const returnButton = document.getElementById('return-button');
    if (returnButton) {
        returnButton.addEventListener('click', () => {
            console.log('Redirecting to ReportUI.html');
            window.location.href = '/Frontend/MainPage/ReportUI.html';
        });
    } else {
        console.error('Return button not found!');
    }
});
