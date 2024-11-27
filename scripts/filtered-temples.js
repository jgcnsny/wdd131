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


//filtered-temples
const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
		templeName: "Provo City Center",
		location: "Provo, Utah, United States",
		dedicated: "2016, March, 20",
		area: 85084,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/400x250/provo-city-center-temple-1572517-wallpaper.jpg"
	},
	{
		templeName: "Provo Utah",
		location: "Provo, Utah, United States",
		dedicated: "1972, February, 9",
		area: 130825,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-utah/400x250/provo-temple-lds-890642-wallpaper.jpg"
	},
	{
		templeName: "Salt Lake",
		location: "Salt Lake City, Utah, United States",
		dedicated: "1893, April, 6",
		area: 403000,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple5.jpg"
	  }
  ];


/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');

let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        const articleElement = document.createElement('article');
        const h3Element = document.createElement('h3');
        const imgElement = document.createElement('img');
		const locationElement = document.createElement('p');
		const dedicatedElement = document.createElement('p');
		const sizeElement = document.createElement('p');

        h3Element.textContent = temple.templeName;
		locationElement.innerHTML = `<strong>Location:</strong> ${temple.location}`;
		dedicatedElement.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;
		sizeElement.innerHTML = `<strong>Area:</strong> ${temple.area} sq ft`;
        imgElement.setAttribute('src', temple.imageUrl);
        imgElement.setAttribute('alt', temple.location);

        articleElement.appendChild(h3Element);
		articleElement.appendChild(locationElement);
		articleElement.appendChild(dedicatedElement);
		articleElement.appendChild(sizeElement);
        articleElement.appendChild(imgElement);
		

        templesElement.appendChild(articleElement);
    });
}

/* Use the temples array directly */
const getTemples = () => {
    templeList = temples;  // Use the predefined temples array
    displayTemples(templeList);  // Display the temples
}

// Call the function to display the temples
getTemples();