/* Fetch data from API */
function fetchData(cat_name) {
	fetch("http://localhost:8000/api/v1/titles/?genre=" + cat_name + "&sort_by=-imdb_score")
	.then(response => {
		if (!response.ok) {
			throw Error('Erreur');
		}
		return response.json();
	})
	.then(data => {
		console.log(data.results);
		const links = data.results.map(movie => {
			return movie.url
		})	
		console.log(links)
		return links
	})
	.then(function(links_list) {
		var action_links = links_list
		return action_links
	})
	.then(links => {
		for (let i = 0; i < 5; i++) {
		fetch(links[i])
		.then(response =>{
			if (!response.ok) {
				throw Error('Erreur');
			}
			return response.json();
		})
		.then(data => {
			console.log(data);
			return `<button class="modal-btn"><img data-target="${cat_name}${i}" data-toggle="action-modal" src="${data.image_url}"></button>

			        <div id="${cat_name}${i}" class="modal-bg">
			            <div class="modal">
			                <div class="movie">
			                    <img src="${data.image_url}">
			                    <p><span class="cat-name">Title :</span> ${data.title}</p>
			                    <p><span class="cat-name">Genre :</span> ${data.genres}</p>
			                    <p><span class="cat-name">Country :</span> ${data.countries}</p>
			                    <p><span class="cat-name">Duration :</span> ${data.duration}</p>
			                    <p><span class="cat-name">Score :</span> ${data.imdb_score}</p>
			                    <p><span class="cat-name">Rated :</span> ${data.rated}</p>
			                    <p><span class="cat-name">Actors :</span> ${data.actors}</p>
			                    <p><span class="cat-name">Grossing (USD):</span> ${data.worldwide_gross_income}</p>
			                    <p><span class="cat-name">Description :</span> ${data.long_description}</p>
			                    <span data-dismiss="action-modal" class="modal-close">X</span>
			                </div>
			          </div>
			        </div>`;
	}).then(html => {
		console.log(html);
		document.querySelector("#"+cat_name).insertAdjacentHTML("beforeend", html);

	})
	}})
	.catch(error => {
		console.log(error);
	});
};

fetchData('action');
fetchData('animation');


/* Modal window */
document.addEventListener('click', function (e) {
    e = e || window.event;
    var target = e.target || e.srcElement;

    if (target.hasAttribute('data-toggle') && target.getAttribute('data-toggle') == 'action-modal') {
        if (target.hasAttribute('data-target')) {
            var m_ID = target.getAttribute('data-target');
            var modal = document.getElementById(m_ID)
            modal.classList.add('bg-active');
            e.preventDefault();
        }
    }

    // Close modal window with 'data-dismiss' attribute or when the backdrop is clicked
    if ((target.hasAttribute('data-dismiss') && target.getAttribute('data-dismiss') == 'action-modal') || target.classList.contains('modal')) {
        var modal = document.querySelector('[class="modal-bg bg-active"]');
        modal.classList.remove('bg-active');
        e.preventDefault();
    }
}, false);

document.addEventListener('click', function (e) {
    e = e || window.event;
    var target = e.target || e.srcElement;

    if (target.hasAttribute('data-toggle') && target.getAttribute('data-toggle') == 'animation-modal') {
        if (target.hasAttribute('data-target')) {
            var m_ID = target.getAttribute('data-target');
            var modal = document.getElementById(m_ID)
            modal.classList.add('bg-active');
            e.preventDefault();
        }
    }

    // Close modal window with 'data-dismiss' attribute or when the backdrop is clicked
    if ((target.hasAttribute('data-dismiss') && target.getAttribute('data-dismiss') == 'animation-modal') || target.classList.contains('modal')) {
        var modal = document.querySelector('[class="modal-bg bg-active"]');
        modal.classList.remove('bg-active');
        e.preventDefault();
    }
}, false);


/*function fetchData() {
	fetch("http://localhost:8000/api/v1/titles/?genre=action&sort_by=-imdb_score")
	.then(response =>{
		if (!response.ok) {
			throw Error('Erreur');
		}
		return response.json();
	})
	.then(data => {
		console.log(data.results);
		const links = data.results.map(movie => {
			return movie.url
		})	
		console.log(links)
		return links
	})
	.then(function(links_list) {
		var action_links = links_list
		return action_links
	})
	.then(links => {
		for (let i = 0; i < 5; i++) {
		fetch(links[i])
		.then(response =>{
			if (!response.ok) {
				throw Error('Erreur');
			}
			return response.json();
		})
		.then(data => {
			console.log(data);
	})}})
	.catch(error => {
		console.log(error);
	});
};

fetchData();*/