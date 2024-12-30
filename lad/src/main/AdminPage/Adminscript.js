const userBtn = document.getElementById('user-btn');
        const meritBtn = document.getElementById('merit-btn');
        const userPanel = document.getElementById('user-panel');
        const meritPanel = document.getElementById('merit-panel');

        userBtn.addEventListener('click', () => {
            userPanel.classList.add('active');
            meritPanel.classList.remove('active');
        });

        meritBtn.addEventListener('click', () => {
            meritPanel.classList.add('active');
            userPanel.classList.remove('active');
        });