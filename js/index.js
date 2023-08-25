document.getElementById('startButton').addEventListener('click', function() {
    window.location.href = 'second-screen.html';
});
$(document).ready(function() {
    var currentScreen = 2; // Starting on the second screen

    $('.container').on('swipeleft', function() {
        if (currentScreen === 2) {
            window.location.href = 'third-screen.html'; // Navigate to third screen
        }
    });
});