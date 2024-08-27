// script.js
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-theme');

    // Check the current theme from localStorage
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.className = currentTheme;

    toggleButton.addEventListener('click', function() {
        // Toggle between light and dark theme
        let newTheme = document.documentElement.className === 'dark-mode' ? 'light' : 'dark-mode';
        document.documentElement.className = newTheme;
        
        // Save the new theme in localStorage
        localStorage.setItem('theme', newTheme);
    });
});
