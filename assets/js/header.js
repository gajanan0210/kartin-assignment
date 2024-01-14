document.addEventListener("DOMContentLoaded", function () {
    const headerContainer = document.createElement('div');
    headerContainer.id = 'headerContainer';
    document.body.prepend(headerContainer);

    // Use Fetch API to load the header content
    fetch('includes/header.html')
        .then(response => response.text())
        .then(data => {
            headerContainer.innerHTML = data;
            // Include your code for handling the user profile in this script if needed
        })
        .catch(error => console.error('Error fetching header:', error));
});
