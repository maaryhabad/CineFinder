import { Movie } from '../models/movie.js';
import { generateMovieItem } from '../views/app.js';

class searchViewModel {
    constructor() {
        this.movies = [];

        this.options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTRjM2I5ZDAwZmU0ZjFlNWI2OTg0NDBiY2ZhYzQ5ZSIsInN1YiI6IjY0YWRhNDM1NmEzNDQ4MDEyY2U2ZGZiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d91BxtHaJgs61NxcjMrbZDn0icKFqfh-VktIDt_D0xA'
            }
        };
    }

    async searchMovies(query) {
        try {
              
            fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=pt-br&page=1`, this.options)
            .then(response => response.json())
            .then(data => {
                this.movies = data.results.map(movieData => new Movie(movieData));

                this.movies.forEach( movie => {
                    generateMovieItem(movie);
                })
            })
            .catch(err => console.error(err));
        } catch (error) {
            console.log("Erro ao buscar os filmes.", error);
        }
    }

    async searchGenres() {
        try {
            fetch('https://api.themoviedb.org/3/genre/movie/list?language=pt-br', this.options)
            .then(response => response.json())
            .then(data => {
                console.log('gêneros: ', data);
            })
            .catch(err => console.error(err));
        } catch (error) {
            console.log("Erro ao buscar os gêneros.", error);
        }
    }
}

export { searchViewModel };