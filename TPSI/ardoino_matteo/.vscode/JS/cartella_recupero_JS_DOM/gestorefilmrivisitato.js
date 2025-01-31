function handleFormSubmit() {
    const title = document.getElementById("title").value.trim();
    const director = document.getElementById("director").value.trim();
    const year = document.getElementById("year").value.trim();

    if (!title || !director || !year) {
        alert("Tutti i campi sono obbligatori!");
        return; 
    }

    const movieId = `movie-${Date.now()}`;

    const newMovieCard = `
        <div id="${movieId}" class="movieCard">
            <h3>${title}</h3>
            <p>Regista: ${director}</p>
            <p>Anno: ${year}</p>
            <button class="edit" onclick="handleEdit('${movieId}')">Modifica</button>
            <button class="delete" onclick="handleDelete('${movieId}')">Elimina</button>
        </div>
    `;

    document.getElementById("movieContainer").insertAdjacentHTML("beforeend", newMovieCard);

    document.getElementById("movieForm").reset();
}

function handleEdit(movieId) {
    const movieCard = document.getElementById(movieId);

    const title = movieCard.querySelector("h3").textContent;
    const director = movieCard.querySelector("p:nth-child(2)").textContent.replace("Regista: ", "");
    const year = movieCard.querySelector("p:nth-child(3)").textContent.replace("Anno: ", "");

    document.getElementById("title").value = title;
    document.getElementById("director").value = director;
    document.getElementById("year").value = year;

    const submitButton = document.getElementById("submitButton");
    submitButton.textContent = "Salva Modifiche"; 
    submitButton.onclick = function () {
        saveChanges(movieId); 
    };
}

function saveChanges(movieId) {
    const movieCard = document.getElementById(movieId);

    const newTitle = document.getElementById("title").value;
    const newDirector = document.getElementById("director").value;
    const newYear = document.getElementById("year").value;

    movieCard.querySelector("h3").textContent = newTitle;
    movieCard.querySelector("p:nth-child(2)").textContent = `Regista: ${newDirector}`;
    movieCard.querySelector("p:nth-child(3)").textContent = `Anno: ${newYear}`;

    document.getElementById("movieForm").reset();
    const submitButton = document.getElementById("submitButton");
    submitButton.textContent = "Aggiungi Film"; 
    submitButton.onclick = handleFormSubmit;
}

function handleDelete(movieId) {
    const movieCard = document.getElementById(movieId);
    if (movieCard) {
        movieCard.remove();
    } else {
        alert("Errore: film non trovato!");
    }
}

function handleSearch() {
    const searchTerm = document.getElementById("search").value.toLowerCase().trim();

    const movies = document.querySelectorAll(".movieCard");

    movies.forEach(movie => {
        const title = movie.querySelector("h3").textContent.toLowerCase();
        const director = movie.querySelector("p:nth-child(2)").textContent.toLowerCase();

        if (title.includes(searchTerm) || director.includes(searchTerm)) {
            movie.style.display = "block";
        } else {
            movie.style.display = "none";
        }
    });
}

document.getElementById("submitButton").onclick = handleFormSubmit;
