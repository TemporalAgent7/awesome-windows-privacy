document.addEventListener('DOMContentLoaded', function () {
    const increaseFontButton = document.getElementById('increase-font');
    const decreaseFontButton = document.getElementById('decrease-font');
    const toggleContrastButton = document.getElementById('toggle-contrast');
    const body = document.body;

    let fontSize = 16; // Default font size

    increaseFontButton.addEventListener('click', function () {
        fontSize += 2;
        document.body.style.fontSize = fontSize + 'px';
    });

    decreaseFontButton.addEventListener('click', function () {
        if (fontSize > 10) {
            fontSize -= 2;
            document.body.style.fontSize = fontSize + 'px';
        }
    });

    toggleContrastButton.addEventListener('click', function () {
        body.classList.toggle('high-contrast-mode');
    });
});
