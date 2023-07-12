
import { inputViewModel } from '../viewmodels/inputViewModel.js';

const validator = new inputViewModel();

const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");

searchButton.onclick = () => {
  validator.inputValue = searchInput.value;
  validator.searchMovies(searchInput.value);
};
