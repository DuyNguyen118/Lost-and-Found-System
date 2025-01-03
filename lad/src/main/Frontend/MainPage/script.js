function showSection(sectionId) {
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

// Function to add a lost item to the table
function addLostItem(itemData) {
    const tbody = document.querySelector('#item-list-container tbody');
    const row = document.createElement('tr');
    
    row.innerHTML = `
        <td>${itemData.name}</td>
        <td>${itemData.category}</td>
        <td>${itemData.description}</td>
        <td>${itemData.block}</td>
        <td>${itemData.room}</td>
        <td>${itemData.status}</td>
        <td>${itemData.contact}</td>
    `;
    
    tbody.appendChild(row);
}

// Example usage:
const newItem = {
    name: "Phone",
    category: "Electronics",
    description: "iPhone 13 Pro, Black",
    block: "A",
    room: "101",
    status: "Lost",
    contact: "123-456-7890"
};

// Call this function to add a new item
addLostItem(newItem);

document.getElementById('lost-button').addEventListener('click', async (e) => {
    e.preventDefault()
    console.log('Redirecting to report-lost.html');
    window.location.href = '/Frontend/ReportLostItems/report_lost.html';
});

document.getElementById('UserProfile').addEventListener('click', async (e) => {
    e.preventDefault()
    console.log('Redirecting to User.html');
    window.location.href = '/Frontend/User/User.html';
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







