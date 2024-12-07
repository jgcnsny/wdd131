// Select the element to display the review count
const reviewCountDisplay = document.querySelector(".counter");

// Get the number of reviews from localStorage or initialize it to 0
let numReviews = Number(localStorage.getItem("numReviews")) || 0;

// Increment the review count
numReviews++;

// Update localStorage with the new count
localStorage.setItem("numReviews", numReviews);

// Display the updated review count
reviewCountDisplay.textContent = numReviews;