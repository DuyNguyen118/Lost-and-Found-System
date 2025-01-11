function showSection(sectionId) {
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

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

document.getElementById('Logout').addEventListener('click', async (e) => {
    e.preventDefault()
    console.log('Redirecting to User.html');
    window.location.href = '/LoginWindow/login.html';
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
                        <td>${item.contactInfo}</td>
                    `;

                    itemListContainer.appendChild(row);
                });
            })
            .catch(error => console.error("Error fetching items:", error));
    }

    // Initial fetch when the page loads
    fetchItems();

    // Function to fetch and display items with filtering
    function fetchAndFilterItems() {
        const searchQuery = document.querySelector('.search-box input').value.toLowerCase();
        const selectedCategory = document.getElementById('categoryFilter').value;
        const selectedLocation = document.getElementById('locationFilter').value;
        const selectedStatus = document.getElementById('statusFilter').value;

        // Debug log for selected filters
        console.log('Selected Filters:', {
            searchQuery,
            category: selectedCategory,
            location: selectedLocation,
            status: selectedStatus
        });

        fetch("http://localhost:8080/api/items/list")
            .then(response => response.json())
            .then(data => {
                // Log raw data
                console.log('Raw data from API:', data);

                // Filter the data
                const filteredData = data.filter(item => {
                    // Convert all values to lowercase for case-insensitive comparison
                    const itemName = (item.itemName || '').toLowerCase();
                    const itemDesc = (item.description || '').toLowerCase();
                    const itemCategory = (item.category || '').toLowerCase();
                    const itemLocation = (item.location || '').toLowerCase();
                    const itemStatus = (item.status || '').toLowerCase();
                    
                    // Debug log for each item being filtered
                    console.log('Filtering item:', {
                        name: item.itemName,
                        category: item.category,
                        location: item.location,
                        status: item.status,
                        selectedCategory: selectedCategory.toLowerCase(),
                        selectedLocation: selectedLocation.toLowerCase(),
                        selectedStatus: selectedStatus.toLowerCase()
                    });

                    // Check if item matches search query
                    const matchesSearch = searchQuery === '' || 
                        itemName.includes(searchQuery) ||
                        itemDesc.includes(searchQuery);

                    // Check if item matches category filter
                    const matchesCategory = selectedCategory.toLowerCase() === 'all' || 
                        itemCategory === selectedCategory.toLowerCase();

                    // Check if item matches location filter
                    const matchesLocation = selectedLocation.toLowerCase() === 'all' || 
                        itemLocation === selectedLocation.toLowerCase();

                    // Check if item matches status filter
                    const matchesStatus = selectedStatus.toLowerCase() === 'all' || 
                        itemStatus === selectedStatus.toLowerCase();

                    // Log match results for debugging
                    console.log('Match results:', {
                        itemName: item.itemName,
                        matchesSearch,
                        matchesCategory,
                        matchesLocation,
                        matchesStatus
                    });

                    return matchesSearch && matchesCategory && 
                           matchesLocation && matchesStatus;
                });

                // Log filtered results
                console.log('Filtered data:', filteredData);

                // Clear existing items
                itemListContainer.innerHTML = "";

                // Display filtered results or "no items" message
                if (filteredData.length === 0) {
                    const noItemsRow = document.createElement("tr");
                    noItemsRow.innerHTML = `
                        <td colspan="7" style="text-align: center; padding: 20px;">
                            No items found matching the selected criteria
                        </td>
                    `;
                    itemListContainer.appendChild(noItemsRow);
                } else {
                    // Populate the table with filtered items
                    filteredData.forEach(item => {
                        const row = document.createElement("tr");
                        row.innerHTML = `
                            <td>${item.itemName || ''}</td>
                            <td>${item.category || ''}</td>
                            <td>${item.description || ''}</td>
                            <td>${item.location || ''}</td>
                            <td>${item.room ? item.room.roomNumber : ''}</td>
                            <td>${item.status || ''}</td>
                            <td>${item.contactInfo || ''}</td>
                        `;
                        itemListContainer.appendChild(row);
                    });
                }
            })
            .catch(error => {
                console.error("Error fetching items:", error);
                itemListContainer.innerHTML = `
                    <tr>
                        <td colspan="7" style="text-align: center; color: red;">
                            Error loading items. Please try again.
                        </td>
                    </tr>
                `;
            });
    }

    // Add event listeners to filter elements
    const searchInput = document.querySelector('.search-box input');
    const categoryFilter = document.getElementById('categoryFilter');
    const locationFilter = document.getElementById('locationFilter');
    const statusFilter = document.getElementById('statusFilter');

    // Add event listeners if elements exist
    if (searchInput) {
        searchInput.addEventListener('input', fetchAndFilterItems);
    }
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', fetchAndFilterItems);
    }
    
    if (locationFilter) {
        locationFilter.addEventListener('change', fetchAndFilterItems);
    }
    
    if (statusFilter) {
        statusFilter.addEventListener('change', fetchAndFilterItems);
    }

    // Initial fetch when the page loads
    fetchAndFilterItems();
});








