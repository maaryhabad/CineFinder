
import { inputViewModel } from '../viewmodels/inputViewModel.js';

const validator = new inputViewModel();

const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
const resultsContainer = document.getElementById("results-container");

searchButton.onclick = () => {
  resultsContainer.innerHTML = '';
  validator.inputValue = searchInput.value;
  validator.searchMovies(searchInput.value);
};

function generateMovieItem(movie) {
  
  const movieItem = document.createElement("div");
  movieItem.classList.add("movie-item");

  const movieDetails = document.createElement("div");
  movieDetails.classList.add("movie-details");

  const posterImg = document.createElement("img");
  posterImg.src = movie.posterURL;
  posterImg.classList.add("movie-poster");
  posterImg.alt = `Poster do filme ${movie.title}`;

  const movieTitle = document.createElement("h2");
  movieTitle.innerHTML = `${movie.title}`;

  const yearOfRelease = document.createElement("p");
  yearOfRelease.innerHTML = `<strong>Ano de Lançamento:</strong> ${movie.releaseYear}`;

  const genre = document.createElement("p");
  genre.innerHTML = `<strong>Gênero:</strong> ${movie.genre}`;

  const rating = document.createElement("p"); 
  rating.innerHTML = `<strong>Nota:</strong> ${movie.rating}`;

  const plot = document.createElement("p");
  plot.innerHTML = `<strong>Sinopse:</strong> ${movie.plot}`;

  movieItem.appendChild(posterImg);
  movieItem.appendChild(movieDetails);

  movieDetails.appendChild(movieTitle);
  movieDetails.appendChild(yearOfRelease);
  movieDetails.appendChild(genre);
  movieDetails.appendChild(rating);
  movieDetails.appendChild(plot);

  resultsContainer.appendChild(movieItem);
}

export { generateMovieItem }