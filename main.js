document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('modecheckbox');
    const lightMode = document.getElementById('light-mode');
    const darkMode = document.getElementById('dark-mode');
    const toggleContainer = document.querySelector(".toggle-container");

    // Load user's theme preference from local storage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        if (currentTheme === 'dark') {
            darkMode.disabled = false;
            lightMode.disabled = true;
            checkbox.checked = true;  // Set the checkbox to dark mode
            toggleContainer.classList.add("checked");  // Add visual changes for dark mode
        } else {
            darkMode.disabled = true;
            lightMode.disabled = false;
            checkbox.checked = false;
            toggleContainer.classList.remove("checked");  // Remove visual changes for light mode
        }
    }

    // Toggle between light and dark modes
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            // Switch to dark mode
            darkMode.disabled = false;
            lightMode.disabled = true;
            localStorage.setItem('theme', 'dark'); // Save the user's preference
            toggleContainer.classList.add("checked");  // Apply visual changes for dark mode
        } else {
            // Switch to light mode
            darkMode.disabled = true;
            lightMode.disabled = false;
            localStorage.setItem('theme', 'light'); // Save the user's preference
            toggleContainer.classList.remove("checked");  // Remove visual changes for dark mode
        }
    });
});
