const albums = [
	{
	  albumName: "17 Carat",
	  releaseDate: "May 29, 2015",
	  albumType: "EP",
      singles: "Adore U",
      description:"Debut extended play (EP)",
	  imageUrl: "images/17_Carat.webp"
	},
    {
        albumName: "Boys Be",
        releaseDate: "September 10, 2015",
        albumType: "EP",
        singles: "Mansae",
        description:"Second extended play (EP)",
        imageUrl: "images/Boys_Be.webp"
      },
      {
        albumName: "Going Seventeen",
        releaseDate: "December 5, 2016",
        albumType: "EP",
        singles: "Boom Boom",
        description:"Third extended play (EP)",
        imageUrl: "images/Going_Seventeen.webp"
      },
      {
        albumName: "Al1",
        releaseDate: "May 22, 2017",
        albumType: "EP",
        singles: "Don't Wanna Cry",
        description:"Fourth extended play (EP)",
        imageUrl: "images/Al1.webp"
      },
      {
        albumName: "You Make My Day",
        releaseDate: "July 16, 2018",
        albumType: "EP",
        singles: "Oh My",
        description:"Fifth extended play (EP)",
        imageUrl: "images/you_make_my_day.webp"
      },
      {
        albumName: "You Made My Dawn",
        releaseDate: "January 21, 2019",
        albumType: "EP",
        singles: "Home",
        description:"Sixth extended play (EP)",
        imageUrl: "images/You_Made_My_Dawn.webp"
      },
      {
        albumName: "Heng:garæ",
        releaseDate: "June 22, 2020",
        albumType: "EP",
        singles: "Left & Right",
        description:"Seventh extended play (EP)",
        imageUrl: "images/Henggarae.webp"
      },
      {
        albumName: "Semicolon",
        releaseDate: "October 19, 2020",
        albumType: "EP",
        singles: "Home;Run",
        description:"Eighth extended play (EP)",
        imageUrl: "images/Semicolon.webp"
      },
      {
        albumName: "Your Choice",
        releaseDate: "June 18, 2021",
        albumType: "EP",
        singles: "Ready to Love",
        description:"Ninth extended play (EP)",
        imageUrl: "images/Your_Choice.webp"
      },
      {
        albumName: "Attacca ",
        releaseDate: "October 22, 2021",
        albumType: "EP",
        singles: "Rock with You",
        description:"Tenth extended play (EP)",
        imageUrl: "images/Attacca.webp"
      },
      {
        albumName: "FML",
        releaseDate: "April 24, 2023",
        albumType: "EP",
        singles: "Super",
        description:"Eleventh extended play (EP)",
        imageUrl: "images/FML.webp"
      },
      {
        albumName: "Seventeenth Heaven",
        releaseDate: "October 23, 2023",
        albumType: "EP",
        singles: "God of Music",
        description:"Twelfth extended play (EP)",
        imageUrl: "images/17th_Heaven.webp"
      },
      {
        albumName: "Spill the Feels",
        releaseDate: "October 14, 2024",
        albumType: "EP",
        singles: "Love, Money, Fame",
        description:"Thirteenth extended play (EP)",
        imageUrl: "images/Spill_the_Feels.webp"
      },
      {
        albumName: "Love & Letter",
        releaseDate: "April 25, 2016",
        albumType: "Studio Album",
        singles: "Pretty U",
        description:"Debut studio album",
        imageUrl: "images/Love_and_Letter.webp"
      },
      {
        albumName: "Teen, Age",
        releaseDate: "November 6, 2017",
        albumType: "Studio Album",
        singles: "Clap",
        description:"Second studio album",
        imageUrl: "images/Teen,_Age.webp"
      },
      {
        albumName: "An Ode",
        releaseDate: "September 16, 2019",
        albumType: "Studio Album",
        singles: "Fear",
        description:"Third studio album",
        imageUrl: "images/An_Ode.webp"
      },
      {
        albumName: "Face the Sun",
        releaseDate: "May 27, 2022",
        albumType: "Studio Album",
        singles: "Hot",
        description:"Fourth studio album",
        imageUrl: "images/Face_the_Sun.webp"
      },
      {
        albumName: "Love & Letter Repackage Album",
        releaseDate: "July 4, 2016",
        albumType: "Studio Album",
        singles: "Very Nice",
        description:"A repackaged edition of Love & Letter",
        imageUrl: "images/Love_Letter_Repackaged.webp"
      },
      {
        albumName: "Special Album 'Director's Cut'",
        releaseDate: "February 5, 2018",
        albumType: "Studio Album",
        singles: "Thanks",
        description:"A special album and repackaged edition of Teen,Age",
        imageUrl: "images/Directors_cut.webp"
      },
      {
        albumName: "Sector 17",
        releaseDate: "July 18, 2022",
        albumType: "Studio Album",
        singles: "_World",
        description:"A repackaged edition of Face the Sun",
        imageUrl: "images/Sector_17.webp"
      },
      {
        albumName: "17 Is Right Here",
        releaseDate: "April 29, 2024",
        albumType: "Compilation album",
        singles: "Maestro",
        description:"Korean-language compilation album",
        imageUrl: "images/17_right_here.webp"
      }
   
  ];


  displayAlbumCards(albums);

  function displayAlbumCards(filteredAlbums) {
    document.querySelector('#albums').innerHTML = "";
  
    filteredAlbums.forEach(album => {
    
      const articleElement = document.createElement('article');
      const cardElement = document.createElement('div');
      const cardFront = document.createElement('div');
      const cardBack = document.createElement('div');
      const imgElement = document.createElement('img');
      const detailsElement = document.createElement('div');
  
     
      articleElement.classList.add('album-card-container');
      cardElement.classList.add('album-card');
      cardFront.classList.add('album-card-front');
      cardBack.classList.add('album-card-back');
      imgElement.setAttribute('src', album.imageUrl);
      imgElement.setAttribute('alt', album.albumName);
      imgElement.setAttribute('loading', 'lazy');
	  imgElement.setAttribute('width', '300'); 
      imgElement.setAttribute('height', '300');
  
     
      detailsElement.innerHTML = `
        <h3>${album.albumName}</h3>
        <p><strong>Release Date:</strong> ${album.releaseDate}</p>
        <p><strong>Album Type:</strong> ${album.albumType}</p>
        <p><strong>Title Track:</strong> ${album.singles}</p>
        <p><strong>Description:</strong> ${album.description}</p>
      `;
  
      cardFront.appendChild(imgElement);
      cardBack.appendChild(detailsElement);
      cardElement.appendChild(cardFront);
      cardElement.appendChild(cardBack);
      articleElement.appendChild(cardElement);
      document.querySelector('#albums').appendChild(articleElement);
  
      
      cardElement.addEventListener('click', () => {
        cardElement.classList.toggle('flipped');
      });
    });
  }



const filterAlbums = () => {
    const filter = document.querySelector('#filtered').value;
    let filteredAlbums = albums; 
  
    if (filter !== "all") {
      filteredAlbums = albums.filter(album => {
        const year = new Date(album.releaseDate).getFullYear();
        return year.toString() === filter; 
      });
    }
  
    displayAlbumCards(filteredAlbums); 
  };

  document.querySelector('#filtered').addEventListener('change', filterAlbums);