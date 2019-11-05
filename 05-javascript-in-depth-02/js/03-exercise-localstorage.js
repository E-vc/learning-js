'use strict';

let form = document.querySelector('#form'); // form. #form
let alert = document.getElementsByClassName('alert'); // div. .alert

let date = new Date().getFullYear(); // Current year

form.addEventListener('submit', () => {
    /** Create Object movie */
    const movie = {
        title: document.querySelector('#title').value,
        year: document.querySelector('#year').value,
        overview: document.querySelector('#overview').value,
        status: document.querySelector('#status').value,
    };

    /** Validation - if title is empty or year is higher to current year */
    if (movie.title.trim().length === 0 || movie.year > date) {
        showMessage('alert-danger', 'Please provide a valid title and year.')
        return false;
    } else {
        alert[0].style.display = 'none';
    }

    /** Save Object movie in LocalStorage */
    localStorage.setItem(movie.title, JSON.stringify(movie));
    showMessage('alert-success', `Well done! Movie added. ${movie.title}`)
});

/** Gets list of movies from LocalStorage */
let movies = document.querySelector('#movie-list'); // div. #movies

for (let i in localStorage) {
    const item = document.createElement('li');
    if (typeof localStorage[i] === 'string') {
        item.classList.add('list-group-item');
        const movie = `${JSON.parse(localStorage[i]).title} - ${JSON.parse(localStorage[i]).year} - ${JSON.parse(localStorage[i]).status}`;
        item.append(movie);
        movies.append(item);
    }
}

/** Remove item of movies from LocalStorage */
let remove = document.querySelector('#remove');

remove.addEventListener('click', () => {
    let search = document.querySelector('#search').value;
    /** Validation - if search is empty */
    if (search.trim().length !== 0 && localStorage.getItem(search) !== null) {
        localStorage.removeItem(search);
        showMessage('alert-success', `Found ${search} movie, has been removed.`);
    } else {
        showMessage('alert-danger', `Not found ${search} movie.`);
    }
});

/** Message alert */
function showMessage(className, message) {
    /** Show error alert */
    alert[0].style.display = 'block';
    alert[0].classList.add(className);
    alert[0].innerHTML = message;
    /** Hide error alert */
    setTimeout(() => {
        alert[0].style.display = 'none';
    }, 3000);
}