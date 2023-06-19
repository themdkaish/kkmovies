const movie = [{
    title: "Download Bloody Daddy (2016) Full Movie 480p, 720p & 1080p ~ DOTMovies",
    image: "images/Bloody_Daddy.jpg",
    description: "Download Asur (Season 2) Hindi Jio Cinema Complete Web Series 480p | 720p | 1080p WEB-DL",
    link: "path/to/movie1-download-link.mp4"
},  
{
    title: "Asur",
    image: "images/asur2.jpeg",
    description: "Download Asur (Season 2) Hindi Jio Cinema Complete Web Series 480p | 720p | 1080p WEB-DL",
    link: "path/to/movie1-download-link.mp4"
  },

  {
    title: "Pathan",
    image: "images/pathan.jpg",
    description: "Download Pathan (2023) Hindi Full Movie WEB-DL 480p [450MB] | 720p [1GB] | 1080p [2.6GB]",
    link: "path/to/movie1-download-link.mp4"
  },
  {
    title: "Tu Jhoothi Main Makkaar",
    image: "images/Tu_Jhoothi_Main_Makkaar.jpeg",
    description: "Download Tu Jhoothi Main Makkar (2023) Hindi Full Movie WEB-DL 480p [450MB] | 720p [1GB] | 1080p [2.6GB]",
    link: "path/to/movie2-download-link.mp4"
  },
  {
      title: "Asur Season 2",
      image: "images/asur2.jpeg",
      description: "Download Asur (Season 2) Hindi Jio Cinema Complete Web Series 480p | 720p | 1080p WEB-DL",
      link: "path/to/movie1-download-link.mp4"
    },

    {
      title: "Pathan",
      image: "images/pathan.jpg",
      description: "Download Pathan (2023) Hindi Full Movie WEB-DL 480p [450MB] | 720p [1GB] | 1080p [2.6GB]",
      link: "path/to/movie1-download-link.mp4"
    },
   {
      title: "Asur Season 1",
      image: "images/Asur-1.jpg",
      description: "Download Asur (Season 2) Hindi Jio Cinema Complete Web Series 480p | 720p | 1080p WEB-DL",
      link: "path/to/movie1-download-link.mp4"
    },
    {
      title: "Asur Season 2",
      image: "images/Asur-2.jpg",
      description: "Download Tu Jhoothi Main Makkar (2023) Hindi Full Movie WEB-DL 480p [450MB] | 720p [1GB] | 1080p [2.6GB]",
      link: "path/to/movie2-download-link.mp4"
    },  

    {
      title: "Tara vs Bilal",
      image: "images/tara vs bilal.jpeg",
      description: "Download Pathan (2023) Hindi Full Movie WEB-DL 480p [450MB] | 720p [1GB] | 1080p [2.6GB]",
      link: "path/to/movie1-download-link.mp4"
    },
    {
      title: "Tu Jhoothi Main Makkaar",
      image: "images/Tu_Jhoothi_Main_Makkaar.jpeg",
      description: "Download Tu Jhoothi Main Makkar (2023) Hindi Full Movie WEB-DL 480p [450MB] | 720p [1GB] | 1080p [2.6GB]",
      link: "path/to/movie2-download-link.mp4"
    },{
      title: "Avatar: The Way of Water",
      image: "images/avatar-2.jpeg",
      description: "Download Asur (Season 2) Hindi Jio Cinema Complete Web Series 480p | 720p | 1080p WEB-DL",
      link: "path/to/movie1-download-link.mp4"
    },

    {
      title: "Avatar 1",
      image: "images/avatar-1.jpeg",
      description: "Download Pathan (2023) Hindi Full Movie WEB-DL 480p [450MB] | 720p [1GB] | 1080p [2.6GB]",
      link: "path/to/movie1-download-link.mp4"
    },
    {
      title: "QALA",
      image: "images/qala.jpeg",
      description: "Download Tu Jhoothi Main Makkar (2023) Hindi Full Movie WEB-DL 480p [450MB] | 720p [1GB] | 1080p [2.6GB]",
      link: "path/to/movie2-download-link.mp4"
    },{
    title: "Mission Majnu",
    image: "images/mission majnu.jpeg",
    description: "Download Asur (Season 2) Hindi Jio Cinema Complete Web Series 480p | 720p | 1080p WEB-DL",
    link: "path/to/movie1-download-link.mp4"
  },

  {
    title: "Class",
    image: "images/class.jpg",
    description: "Download Pathan (2023) Hindi Full Movie WEB-DL 480p [450MB] | 720p [1GB] | 1080p [2.6GB]",
    link: "path/to/movie1-download-link.mp4"
  },
  // {
  //   title: "Zwingto",
  //   image: "images/Zwingto.jpeg",
  //   description: "Download Zwingto (2023) Hindi Full Movie WEB-DL 480p [450MB] | 720p [1GB] | 1080p [2.6GB]",
  //   link: "path/to/movie2-download-link.mp4"
  // },
];

  const container = document.getElementById('movie-grid');

  movie.forEach((result, idx) => {
    
    const card = document.createElement('div');
    card.classList = 'card';

  
    const titleElement = document.createElement('h5');
    titleElement.textContent = result.title;
    const descriptionElement = document.createElement('p')
    descriptionElement.textContent = result.description;
    const imageElement = document.createElement('img');
    imageElement.src = result.image;

    
    imageElement.addEventListener('click', () => {
     
      localStorage.setItem('title', result.title);
      localStorage.setItem('description', result.description);
      localStorage.setItem('image', result.image);

     
      window.open('page2.html', '_blank');
    });
    descriptionElement.addEventListener('click', () => {
     
      localStorage.setItem('title', result.title);
      localStorage.setItem('description', result.description);
      localStorage.setItem('image', result.image);

     
      window.open('page2.html', '_blank');
    });


   
    card.appendChild(imageElement);
    // card.appendChild(titleElement);
    card.appendChild(descriptionElement)

    
    container.appendChild(card);
  });