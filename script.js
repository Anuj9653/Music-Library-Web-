// Search functionality
document.querySelector('.search-bar').addEventListener('input', function(event) {
    const searchTerm = event.target.value.toLowerCase();
    const albums = document.querySelectorAll('.album-item');
    const playlists = document.querySelectorAll('.playlist-item');
    const genres = document.querySelectorAll('.genre-item');

    // Filter albums
    albums.forEach(function(album) {
        const title = album.querySelector('p').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            album.style.display = 'block';
        } else {
            album.style.display = 'none';
        }
    });

    // Filter playlists
    playlists.forEach(function(playlist) {
        const title = playlist.querySelector('p').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            playlist.style.display = 'block';
        } else {
            playlist.style.display = 'none';
        }
    });

    // Filter genres
    genres.forEach(function(genre) {
        const title = genre.querySelector('p').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            genre.style.display = 'block';
        } else {
            genre.style.display = 'none';
        }
    });
});

// Play track functionality (simple example)
const playButtons = document.querySelectorAll('.play-button');
playButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        const audio = new Audio(button.dataset.track);
        audio.play();
    });
});


