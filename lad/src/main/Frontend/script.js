function showSection(sectionId) {
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

function showItems(category) {
    console.log(`Selected category: ${category}`);

    const itemsContainer = document.getElementById('items-container');
    let itemsHTML = '';

    // Define items for each category
    const items = {
        electronics: ['Laptop', 'Phone', 'Tablet', 'Headphone', 'Mouse', 'Samsung'],
        clothing: ['Shirt', 'Pants', 'Jacket'],
        documents: ['Passport', 'License', 'Certificates'],
        other: ['Backpack', 'Water Bottle', 'Miscellaneous Item']
    };

    // Generate HTML for the selected category
    if (items[category]) {
        itemsHTML = `<h2>${category.charAt(0).toUpperCase() + category.slice(1)}</h2>`;
        itemsHTML += '<div class="item-list">';

        items[category].forEach(item => {
            itemsHTML += `<div class="item ${category}">${item}</div>`;  // Add category class for styling
        });

        itemsHTML += '</div>';
    } else {
        itemsHTML = '<p>No items available in this category.</p>';
    }

    // Update the items container with the generated HTML
    itemsContainer.innerHTML = itemsHTML;

    console.log('Updated items container:', itemsContainer.innerHTML);
}

document.getElementById('view-lost-button').addEventListener('click', () => {
    console.log('Redirecting to report-lost.html');
    window.location.href = 'report-lost.html';
});
document.getElementById('view-found-button').addEventListener('click', () => {
    console.log('Redirecting to report-lost.html');
    window.location.href = 'report-found.html';
});







