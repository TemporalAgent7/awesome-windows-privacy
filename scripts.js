document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === '+') {
        document.body.style.zoom = (parseFloat(document.body.style.zoom || 1) + 0.1).toString();
    } else if (event.ctrlKey && event.key === '-') {
        document.body.style.zoom = (parseFloat(document.body.style.zoom || 1) - 0.1).toString();
    }
});
