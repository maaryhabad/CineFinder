import { Movie } from '../models/movie.js';

class searchViewModel {
    constructor() {
        this.movies = [];
    }

    async searchMovies(query) {
        try {
            const options = {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTRjM2I5ZDAwZmU0ZjFlNWI2OTg0NDBiY2ZhYzQ5ZSIsInN1YiI6IjY0YWRhNDM1NmEzNDQ4MDEyY2U2ZGZiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d91BxtHaJgs61NxcjMrbZDn0icKFqfh-VktIDt_D0xA'
                }
              };
              
            fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=pt-br&page=1`, options)
            .then(response => response.json())
            .then(data => {
                this.movies = data.results.map(movieData => new Movie(movieData));
                console.log(this.movies);
            })
            .catch(err => console.error(err));
        } catch (error) {
            console.log("Erro ao buscar os filmes");
        }
    }
}

export { searchViewModel };