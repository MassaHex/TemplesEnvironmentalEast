document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('modecheckbox');
    const toggleContainer = document.querySelector(".toggle-container");
    const rootElement = document.documentElement;

    // Load user's theme preference from local storage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        if (currentTheme === 'dark') {
            checkbox.checked = true;  // Set the checkbox to dark mode
            toggleContainer.classList.add("checked");  // Add visual changes for dark mode
            rootElement.setAttribute('data-theme', 'dark');
        } else {
            checkbox.checked = false;
            toggleContainer.classList.remove("checked");  // Remove visual changes for light mode
            rootElement.setAttribute('data-theme', 'light');
        }
    }

    // Toggle between light and dark modes
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            // Switch to dark mode
            localStorage.setItem('theme', 'dark'); // Save the user's preference
            toggleContainer.classList.add("checked");  // Apply visual changes for dark mode
            rootElement.setAttribute('data-theme', 'dark');
        } else {
            // Switch to light mode
            localStorage.setItem('theme', 'light'); // Save the user's preference
            toggleContainer.classList.remove("checked");  // Remove visual changes for dark mode
            rootElement.setAttribute('data-theme', 'light');
        }
    });
});
