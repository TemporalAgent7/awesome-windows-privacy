// Enable Page Zoom
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && (event.key === '+' || event.key === '=')) {
        document.body.style.zoom = (parseFloat(document.body.style.zoom || 1) + 0.1).toString();
    }
    if (event.ctrlKey && event.key === '-') {
        document.body.style.zoom = (parseFloat(document.body.style.zoom || 1) - 0.1).toString();
    }
    if (event.ctrlKey && event.key === '0') {
        document.body.style.zoom = '1';
    }
});

// Toggle High Contrast Mode
function toggleHighContrast() {
    const currentBgColor = window.getComputedStyle(document.body, null).getPropertyValue('background-color');
    document.body.style.backgroundColor = currentBgColor === 'rgb(0, 0, 0)' ? '#f4f4f4' : '#000';
    document.body.style.color = currentBgColor === 'rgb(0, 0, 0)' ? '#333' : '#fff';
}

// Keyboard shortcut for High Contrast Mode (Alt + H)
document.addEventListener('keydown', function(event) {
    if (event.altKey && event.key.toLowerCase() === 'h') {
        toggleHighContrast();
    }
});
