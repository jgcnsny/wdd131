const albums = [
  {
    albumName: "17 Carat",
    releaseDate: "May 29, 2015",
    albumType: "EP",
    singles: "Adore U",
    description:"Debut extended play (EP)",
    imageUrl: "images/17_Carat.webp",
    sales: "205,389"
  },
  {
      albumName: "Boys Be",
      releaseDate: "September 10, 2015",
      albumType: "EP",
      singles: "Mansae",
      description:"Second extended play (EP)",
      imageUrl: "images/Boys_Be.webp",
      sales: "340,494"
    },
    {
      albumName: "Going Seventeen",
      releaseDate: "December 5, 2016",
      albumType: "EP",
      singles: "Boom Boom",
      description:"Third extended play (EP)",
      imageUrl: "images/Going_Seventeen.webp",
      sales: "461,665"
    },
    {
      albumName: "Al1",
      releaseDate: "May 22, 2017",
      albumType: "EP",
      singles: "Don't Wanna Cry",
      description:"Fourth extended play (EP)",
      imageUrl: "images/Al1.webp",
      sales: "586,484"
    },
    {
      albumName: "You Make My Day",
      releaseDate: "July 16, 2018",
      albumType: "EP",
      singles: "Oh My",
      description:"Fifth extended play (EP)",
      imageUrl: "images/you_make_my_day.webp",
      sales: "595,892"
    },
    {
      albumName: "You Made My Dawn",
      releaseDate: "January 21, 2019",
      albumType: "EP",
      singles: "Home",
      description:"Sixth extended play (EP)",
      imageUrl: "images/You_Made_My_Dawn.webp",
      sales: "679,126"
    },
    {
      albumName: "Heng:garæ",
      releaseDate: "June 22, 2020",
      albumType: "EP",
      singles: "Left & Right",
      description:"Seventh extended play (EP)",
      imageUrl: "images/Henggarae.webp",
      sales: "1,818,480"
    },
    {
      albumName: "Semicolon",
      releaseDate: "October 19, 2020",
      albumType: "EP",
      singles: "Home;Run",
      description:"Eighth extended play (EP)",
      imageUrl: "images/Semicolon.webp",
      sales: "1,233,983"
    },
    {
      albumName: "Your Choice",
      releaseDate: "June 18, 2021",
      albumType: "EP",
      singles: "Ready to Love",
      description:"Ninth extended play (EP)",
      imageUrl: "images/Your_Choice.webp",
      sales: "1,691,505"
    },
    {
      albumName: "Attacca ",
      releaseDate: "October 22, 2021",
      albumType: "EP",
      singles: "Rock with You",
      description:"Tenth extended play (EP)",
      imageUrl: "images/Attacca.webp",
      sales: "2,991,470"
    },
    {
      albumName: "FML",
      releaseDate: "April 24, 2023",
      albumType: "EP",
      singles: "Super",
      description:"Eleventh extended play (EP)",
      imageUrl: "images/FML.webp",
      sales: "6,402,051"
    },
    {
      albumName: "Seventeenth Heaven",
      releaseDate: "October 23, 2023",
      albumType: "EP",
      singles: "God of Music",
      description:"Twelfth extended play (EP)",
      imageUrl: "images/17th_Heaven.webp",
      sales: "5,766,323"
    },
    {
      albumName: "Spill the Feels",
      releaseDate: "October 14, 2024",
      albumType: "EP",
      singles: "Love, Money, Fame",
      description:"Thirteenth extended play (EP)",
      imageUrl: "images/Spill_the_Feels.webp",
      sales: "3,706,787"
    },
    {
      albumName: "Love & Letter",
      releaseDate: "April 25, 2016",
      albumType: "Studio Album",
      singles: "Pretty U",
      description:"Debut studio album",
      imageUrl: "images/Love_and_Letter.webp",
      sales: "337,568"
    },
    {
      albumName: "Teen, Age",
      releaseDate: "November 6, 2017",
      albumType: "Studio Album",
      singles: "Clap",
      description:"Second studio album",
      imageUrl: "images/Teen,_Age.webp",
      sales: "742,249"
    },
    {
      albumName: "An Ode",
      releaseDate: "September 16, 2019",
      albumType: "Studio Album",
      singles: "Fear",
      description:"Third studio album",
      imageUrl: "images/An_Ode.webp",
      sales: "1,678,092"
    },
    {
      albumName: "Face the Sun",
      releaseDate: "May 27, 2022",
      albumType: "Studio Album",
      singles: "Hot",
      description:"Fourth studio album",
      imageUrl: "images/Face_the_Sun.webp",
      sales: "4,570,246"
    },
    {
      albumName: "Love & Letter Repackage Album",
      releaseDate: "July 4, 2016",
      albumType: "Studio Album",
      singles: "Very Nice",
      description:"A repackaged edition of Love & Letter",
      imageUrl: "images/Love_Letter_Repackaged.webp",
      sales: "267,069"
    },
    {
      albumName: "Special Album 'Director's Cut'",
      releaseDate: "February 5, 2018",
      albumType: "Studio Album",
      singles: "Thanks",
      description:"A special album and repackaged edition of Teen,Age",
      imageUrl: "images/Directors_cut.webp",
      sales: "381,948"
    },
    {
      albumName: "Sector 17",
      releaseDate: "July 18, 2022",
      albumType: "Studio Album",
      singles: "_World",
      description:"A repackaged edition of Face the Sun",
      imageUrl: "images/Sector_17.webp",
      sales: "2,185,919"
    },
    {
      albumName: "17 Is Right Here",
      releaseDate: "April 29, 2024",
      albumType: "Compilation album",
      singles: "Maestro",
      description:"Korean-language compilation album",
      imageUrl: "images/17_right_here.webp",
      sales: "3,646,569"
    }
 
];


const albumSpotlight = document.querySelector('#spotlight');

function filterAlbumsBySales(albums) {
    return albums.filter(album => parseInt(album.sales.replace(/,/g, '')) > 500000);
}

function selectRandomAlbums(albums) {
    const selectedAlbums = [];
    while (selectedAlbums.length < 3 && albums.length > 0) {
        const randomIndex = Math.floor(Math.random() * albums.length);
        const selectedAlbum = albums.splice(randomIndex, 1)[0];
        selectedAlbums.push(selectedAlbum);
    }
    return selectedAlbums;
}

function displayAlbums(albums) {
  albumSpotlight.innerHTML = ''; 

  const selectedAlbums = selectRandomAlbums([...albums]);  

  selectedAlbums.forEach(album => {
      const albumElement = document.createElement('section');
      albumElement.innerHTML = `
          <h2>${album.albumName}</h2>
          <img src="${album.imageUrl}" alt="${album.albumName}" 
               loading="lazy" width="200" height="200">
          <p>${album.description}</p>
          <p>Sales: ${album.sales}</p>
          <p>Release Date: ${album.releaseDate}</p>
      `;
      albumSpotlight.appendChild(albumElement);
  });
}


const filteredAlbums = filterAlbumsBySales(albums);
displayAlbums(filteredAlbums);


setInterval(() => {
    displayAlbums(filteredAlbums);
}, 5000);