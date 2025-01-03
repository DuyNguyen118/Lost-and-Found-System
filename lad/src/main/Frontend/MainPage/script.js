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

document.getElementById("lost-item-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = {
        itemName: document.getElementById("item-name").value,
        category: document.getElementById("categories").value,
        description: document.getElementById("description").value,
        location: document.getElementById("location").value,
        contactInfo: "example@example.com" // Replace with dynamic data if available
    };

    fetch("/api/items/report-lost", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
        .then(response => {
            if (response.ok) {
                alert("Lost item reported successfully!");
                document.getElementById("lost-item-form").reset();
            } else {
                alert("Failed to report the lost item.");
            }
        })
        .catch(error => console.error("Error:", error));
});


document.getElementById('UserProfile').addEventListener('click', async (e) => {
    e.preventDefault()
    console.log('Redirecting to User.html');
    window.location.href = '/Frontend/User/User.html';
});

document.getElementById('found-button').addEventListener('click', () => {
    console.log('Redirecting to report-found.html');
    form = document.createElement('div')
    script = ""
    form.innerHTML = ""
    window.location.href = '/Frontend/ReportFoundItems/report_found.html';
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







