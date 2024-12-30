function showSection(sectionId) {
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

document.getElementById('lost-button').addEventListener('click', () => {
    console.log('Redirecting to report-lost.html');
    window.location.href = '/lad/src/main/Frontend/ReportLostItems/report_lost.html';
});

document.getElementById('found-button').addEventListener('click', () => {
    console.log('Redirecting to report-found.html');
    window.location.href = '/lad/src/main/Frontend/ReportFoundItems/report_found.html';
});

function toggleUserMenu() {
    const dropdown = document.getElementById('userDropdown');
    dropdown.classList.toggle('active');
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = dropdown.contains(event.target) || 
                            event.target.closest('.user-btn');
        if (!isClickInside) {
            dropdown.classList.remove('active');
        }
    });
}







