function showSection(sectionId) {
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}


// Call this function to add a new item

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
document.addEventListener("DOMContentLoaded", function () {
    const itemListContainer = document.querySelector("#item-list-container tbody");

    // Function to fetch items from the backend
    function fetchItems() {
        fetch("http://localhost:8080/api/items/list")
            .then(response => response.json())
            .then(data => {
                // Clear existing items
                itemListContainer.innerHTML = "";

                // Populate the table with items
                data.forEach(item => {
                    const row = document.createElement("tr");

                    row.innerHTML = `
                        <td>${item.itemName}</td>
                        <td>${item.category}</td>
                        <td>${item.description}</td>
                        <td>${item.location}</td>
                        <td>${item.room ? item.room.roomNumber : ''}</td>
                        <td>${item.status}</td>
                        <td>${item.reportDate}</td>
                        <td>${item.contactInfo}</td>
                    `;

                    itemListContainer.appendChild(row);
                });
            })
            .catch(error => console.error("Error fetching items:", error));
    }

    // Initial fetch when the page loads
    fetchItems();
});








