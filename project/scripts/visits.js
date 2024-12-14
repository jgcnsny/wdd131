const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits")) || 0;

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit.`;
}

numVisits++;

localStorage.setItem("numVisits", numVisits);

document.addEventListener("DOMContentLoaded", function() {
  
    var currentDate = Date.now();

   
    var lastVisitDate = localStorage.getItem("lastVisitDate");

    if (lastVisitDate) {
        
        var differenceInMs = currentDate - parseInt(lastVisitDate);
        var differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));

       
        var message = "";
        if (differenceInDays === 0) {
            message = "Back so soon! Awesome!";
        } else {
            message = "You last visited " + (differenceInDays === 1 ? "1 day" : differenceInDays + " days") + " ago.";
        }
    } else {
        // First visit
        message = "Let us know if you have any questions.";
    }

    // Display the message in the sidebar content area
    var sidebarContent = document.querySelector("#dateVisit");
    sidebarContent.textContent = message;

    // Store the current date as the last visit date in localStorage
    localStorage.setItem("lastVisitDate", currentDate.toString());
});

const bannerContainer = document.querySelector('#banner');

        // Show the banner every time the user visits
        bannerContainer.style.display = 'block';

        // Allow the user to close the banner
        document.getElementById('closeButton').addEventListener('click', function() {
            bannerContainer.style.display = 'none';
});