const loadingContainer = document.getElementById('loading-container');

function createLoadingAnimation(dotsCount) {
    for (let i = 0; i < dotsCount; i++) {
        const dot = document.createElement('div');
        dot.className = 'loading-dot';
        dot.classList.add(i === 0 ? 'black' : 'grey');
        loadingContainer.appendChild(dot);
    }
}

createLoadingAnimation(20); // Adjust the number of dots as needed




