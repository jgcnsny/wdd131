const currentYear = new Date().getFullYear();

// Populate the current year in the footer
document.getElementById('currentYear').textContent = currentYear;

//Last Modified
let lastModified = document.lastModified;

document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;



const temperature = 27;
const conditions = "Sunny";
const wind = 10;

const tempElement = document.getElementById("temperature");
const conditionsElement = document.getElementById("conditions");
const windElement = document.getElementById("wind");
const windchillElement = document.getElementById("windchill");

function calculateWindChill() {
    return 35.74 + 0.6215 * temperature - 35.75 * wind**0.16 + 0.4275 * temperature * wind**0.16;
  }
  
  if (temperature <= 10  && wind > 4.8) {
    windChill = calculateWindChill().toFixed(1);
  } else {
    windChill = "N/A";
  }

tempElement.innerHTML = `<strong>Temperature:</strong> ${temperature}°C`;
conditionsElement.innerHTML = `<strong>Condition:</strong> ${conditions}`;
windElement.innerHTML = `<strong>Wind Speed:</strong> ${wind} km/h`;
windchillElement.innerHTML = `<strong>Wind Chill:</strong> ${windChill}°C`;

