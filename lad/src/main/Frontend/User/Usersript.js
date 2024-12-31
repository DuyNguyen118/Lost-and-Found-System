document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');

    // Select the button element by ID
    const returnButton = document.getElementById('return-button');
    console.log('Return button element:', returnButton);

    if (returnButton) {
        // Add a click event listener to redirect
        returnButton.addEventListener('click', () => {
            console.log('Redirecting to ReportUI.html');
            window.location.href = '/lad/src/main/Frontend/MainPage/ReportUI.html';
        });
    } else {
        console.error('Return button not found!');
    }
});
