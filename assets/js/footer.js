// Load the footer dynamically
document.addEventListener("DOMContentLoaded", function () {
    const footerContainer = document.createElement('div');
    footerContainer.id = 'footerContainer';
    document.body.appendChild(footerContainer);

    // Use Fetch API to load the footer content
    fetch('includes/footer.html')
        .then(response => response.text())
        .then(data => {
            footerContainer.innerHTML = data;
        })
        .catch(error => console.error('Error fetching footer:', error));
});
