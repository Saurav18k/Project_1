// Select the counter element and buttons
const counter = document.getElementById('counter');
const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');
const resetButton = document.getElementById('reset');

// Initialize the count value
let count = 0;

// Function to update the counter display
const updateCounter = () => {
    counter.textContent = count;
};

// Event listeners for buttons
increaseButton.addEventListener('click', () => {
    count++;
    updateCounter();
});

decreaseButton.addEventListener('click', () => {
    count--;
    updateCounter();
});

resetButton.addEventListener('click', () => {
    count = 0;
    updateCounter();
});