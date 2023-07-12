// movie.js

class Movie {
  constructor(movieData) {
    this.title = movieData.title || '';
    this.releaseYear = movieData.release_date ? movieData.release_date.substring(0, 4) : '';
    this.genre = movieData.genre_ids || [];
    this.rating = movieData.vote_average || '';
    this.plot = movieData.overview || '';
    this.posterURL = movieData.poster_path ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}` : '';
  }
}

export { Movie };