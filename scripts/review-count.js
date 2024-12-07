const reviewCountDisplay = document.querySelector(".counter");

let numReviews = Number(localStorage.getItem("numReviews")) || 0;

numReviews++;

localStorage.setItem("numReviews", numReviews);

reviewCountDisplay.textContent = numReviews;