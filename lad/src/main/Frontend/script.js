function showSection(sectionId) {
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

// Show the report lost item section by default
document.addEventListener('DOMContentLoaded', () => {
    showSection('report-lost');
});