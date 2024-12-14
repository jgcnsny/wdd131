const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits")) || 0;

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `for the first`;
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
        
        message = "Let us know if you have any questions.";
    }

   
    var sidebarContent = document.querySelector("#dateVisit");
    sidebarContent.textContent = message;

    
    localStorage.setItem("lastVisitDate", currentDate.toString());
});

const bannerContainer = document.querySelector('#banner');

        
        bannerContainer.style.display = 'block';

    
        document.getElementById('closeButton').addEventListener('click', function() {
            bannerContainer.style.display = 'none';
});