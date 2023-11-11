const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const movieYear = document.querySelector('.userInputYear');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favouriteMovieTitle');
const movieYearToDisplay = document.querySelector('.favouriteMovieYear');

let titleInStorage = localStorage.getItem('title');
let imageUrlInStorage = localStorage.getItem('imageUrl');
let yearInStorage = localStorage.getItem('year');

console.log(titleInStorage);
console.log(imageUrlInStorage);
console.log(yearInStorage);

if(titleInStorage && imageUrlInStorage && yearInStorage) {
    movieTitleToDisplay.textContent = titleInStorage;
    container.style.backgroundImage = `linear-gradient(rgba(237, 113, 134, 0.339), rgba(0, 0, 0, 0.39)),
    url('${imageUrlInStorage}')`;
    movieYearToDisplay.textContent = yearInStorage;
}

btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = moviePosterUrl.value;
    let yearInput = movieYear.value;
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('imageUrl', posterUrlInput);
    localStorage.setItem('year', yearInput);
    movieTitleToDisplay.textContent = movieTitleInput;
    container.style.backgroundImage = `linear-gradient(rgba(237, 113, 134, 0.339), rgba(0, 0, 0, 0.39)),
    url('${posterUrlInput}')`;
    movieYearToDisplay.textContent = yearInput
    movieTitle.value = '';
    moviePosterUrl.value = '';
    movieYear.value = '';
    //console.log(posterUrlInput);
    //console.log(movieTitleInput);
});