import { searchViewModel } from '../viewmodels/searchViewModel.js';

class inputViewModel {
    
    constructor() {
        this.inputValue = '';
    }

    isValidInput() {
        if (!this.inputValue) {
            return false;
        }
        return true
    }

    searchMovies(value) {
        if (this.isValidInput()) {
            const searchInstance = new searchViewModel();
            searchInstance.searchMovies(value);
        }
    }
}

export { inputViewModel }