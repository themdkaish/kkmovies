const movies = [
    
  {
    title: "Bloody Daddy",
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
    {
      title: "Zwingto",
      image: "images/Zwingto.jpeg",
      description: "Download Zwingto (2023) Hindi Full Movie WEB-DL 480p [450MB] | 720p [1GB] | 1080p [2.6GB]",
      link: "path/to/movie2-download-link.mp4"
    },
    
  ];

  const moviesPerPage = 12;
  const movieGrid = document.getElementById("movie-grid");
  const pagination = document.getElementById("pagination");

  function displayMovies(page) {
    const startIndex = (page - 1) * moviesPerPage;
    const endIndex = startIndex + moviesPerPage;
    const moviesToDisplay = movies.slice(startIndex, endIndex);

    movieGrid.innerHTML = "";

    moviesToDisplay.forEach(movie => {
      const movieElement = document.createElement("div");
      movieElement.classList.add("movie");

      const imageElement = document.createElement("img");
      imageElement.src = movie.image;
      imageElement.alt = movie.title;

      const titleElement = document.createElement("h3");
      titleElement.textContent = movie.title;

      const descriptionElement = document.createElement("p");
      descriptionElement.textContent = movie.description;

      descriptionElement.addEventListener("click", () => {
        window.location.href = movie.link;
      });
      descriptionElement.addEventListener("click",() => {
        window.location.href = movie.link;
      })

      movieElement.appendChild(imageElement);
      movieElement.appendChild(titleElement);
      movieElement.appendChild(descriptionElement);

      movieGrid.appendChild(movieElement);
    });
  }

  function createPagination() {
    const totalPages = Math.ceil(movies.length / moviesPerPage);

    pagination.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
      const pageLink = document.createElement("a");
      pageLink.href = "#";
      pageLink.textContent = i;
      pageLink.addEventListener("click", () => displayMovies(i));
      pagination.appendChild(pageLink);
    }
  }


  // Initial display
  displayMovies(1);
  createPagination();