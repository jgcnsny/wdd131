const currentYear = new Date().getFullYear();

// Populate the current year in the footer
document.getElementById('currentYear').textContent = currentYear;

//Last Modified
let lastModified = document.lastModified;

document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;


const hamButton = document.querySelector('#myButton');
const navigation = document.querySelector('.navLinks');
const header = document.querySelector('header');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
	header.classList.toggle('open');
});
