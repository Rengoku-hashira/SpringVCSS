document.getElementById('search-icon').addEventListener('click', function() {
    var query = document.getElementById('search-input').value;
    if (query) {
        alert('Searching for:' + query);
    } else {
        alert('Please enter a search term');
    }
});



