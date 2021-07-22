let api_key = 'Votre clé ';

searchButton = document.getElementById("boutton");
form = document.getElementById('form');

form.addEventListener('submit', function( e ) {
    
    e.preventDefault();
    searchContent = document.getElementById('site-search').value;
    console.log(searchContent);

    let url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchContent}&language=fr-FR`;

    document.getElementById('main').innerHTML = "";

    init();

    async function init() {
        let result = await displayinfo(url);

        if (result) {
            console.log(result);

            poster = result.results;

            poster.forEach((element) => {
            
                $('#main').append('<div class="card m-3" style="width: 18rem;"><img src="https://image.tmdb.org/t/p/w500'+ element.poster_path +'" class="card-img-top" alt="'+ element.title +'"><div class="card-body"><h5 class="card-title">'+ element.title +'</h5><p class="card-text">'+ element.release_date +'</p></div></div>');

            })
            

        }
    }

    async function displayinfo(url) {
        return fetch(url)
            .then((response) => response.json())
            .catch((error) => console.log(error))
    }

})
