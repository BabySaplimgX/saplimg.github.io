document.addEventListener('DOMContentLoaded', () => {
    // Get the mode toggle button
    const modeToggle = document.getElementById('mode-toggle');

    // Check the user's preference from local storage
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    let isDarkMode = localStorage.getItem('isDarkMode') === 'true' || prefersDarkMode;

    // Apply initial mode
    applyMode();

    // Toggle dark/light mode
    modeToggle.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        applyMode();
    });

    // Function to apply dark/light mode
    function applyMode() {
        document.body.classList.toggle('dark-mode', isDarkMode);
        localStorage.setItem('isDarkMode', isDarkMode);

        // Update button text
        modeToggle.textContent = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    }
});