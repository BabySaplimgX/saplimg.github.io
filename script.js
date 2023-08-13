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

function draw(event) {
  if (!isDrawing) return;

  const x = event.clientX - canvas.getBoundingClientRect().left;
  const y = event.clientY - canvas.getBoundingClientRect().top;

  context.lineWidth = parseInt(pencilSizeSelect.value);
  context.strokeStyle = colorPicker.value;
  context.lineCap = "round"; // Set the line cap to round

  const selectedLineStyle = lineStyleSelect.value;
  if (selectedLineStyle === "dashed") {
    context.setLineDash([10, 5]);
  } else if (selectedLineStyle === "dotted") {
    context.setLineDash([2, 5]);
  } else {
    context.setLineDash([]);
  }

  context.lineTo(x, y);
  context.stroke();
  context.beginPath();
  context.moveTo(x, y);
}
