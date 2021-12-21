/* Fetch data from API */
async function fetch_data(cat_name) {
	if (cat_name == 'best'){
		url = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score";
	}
	else{
		url = "http://localhost:8000/api/v1/titles/?genre=" + cat_name + "&sort_by=-imdb_score";
	};	
	const response = await fetch(url);
	const r_json = await response.json();
	const links = await r_json.results.map(movie => {
		return movie.url;
	})
	for (let i = 0; i < 5; i++) {
		const response = await fetch(links[i]);
		const data = await response.json();
		const countries = await data.countries.join(', ');
		const actors = await data.actors.join(', ');
		const genres = await data.genres.join('/');
		const directors = await data.directors.join(', ');
		const html = `<button class="modal-btn"><img data-target="${cat_name}${i}" data-toggle="action-modal" class="jacket" src="${data.image_url}"></button>`;

		const html_b =	`<div id="${cat_name}${i}" class="modal-bg">
			            <div class="modal">
			                <div class="movie">
			                	<span class="title">${data.title}<br/></span>
			                	<span class="genre"> ${genres} | ${countries}<br/></span>
			                    <img class="modal-img" src="${data.image_url}">
			                    <div class="modal-content">
				                    <p><span class="cat-name">Director(s) :</span> ${directors}</p>
				                    <p><span class="cat-name">Duration :</span> ${data.duration}min</p>
				                    <p><span class="cat-name">IMDb Score :</span> ${data.imdb_score}</p>
				                    <p><span class="cat-name">Rated :</span> ${data.rated}</p>
				                    <p><span class="cat-name">Grossing (USD):</span> ${data.worldwide_gross_income}</p>
				                    <p><span class="cat-name2">Actors :</span> ${actors}</p>
				                    <p><span class="cat-name2">Description :</span> ${data.long_description}</p>
				                </div>
			                    <span data-dismiss="action-modal" class="modal-close">X</span>
			                </div>
			          </div>
			        </div>`;

		document.querySelector("#"+cat_name+"-img").insertAdjacentHTML("beforeend", html);	 
		document.querySelector("#"+cat_name).insertAdjacentHTML("beforeend", html_b);       	

	}
	if (cat_name == 'best'){
		url_2 = "http://localhost:8000/api/v1/titles/?page=2&sort_by=-imdb_score";
	}
	else{
		url_2 = "http://localhost:8000/api/v1/titles/?genre=" + cat_name + "&page=2&sort_by=-imdb_score";
	};
	const response_2 = await fetch(url_2);
	const r_json_2 = await response_2.json();
	const links_2 = await r_json_2.results.map(movie2 => {
		return movie2.url;
	})
	for (let i = 0; i < 2; i++) {
		const response = await fetch(links_2[i]);
		const data = await response.json();
		const countries = await data.countries.join(', ');
		const actors = await data.actors.join(', ');
		const genres = await data.genres.join('/');
		const directors = await data.directors.join(', ');
		const html = `<button class="modal-btn"><img data-target="${cat_name}${i+5}" data-toggle="action-modal" class="jacket" src="${data.image_url}"></button>`;

		const html_b =	`<div id="${cat_name}${i+5}" class="modal-bg">
			            <div class="modal">
			                <div class="movie">
			                <span class="title">${data.title}<br/></span>
			                	<span class="genre"> ${genres} | ${countries}<br/></span>
			                    <img class="modal-img" src="${data.image_url}">
			                    <div class="modal-content">
				                    <p><span class="cat-name">Director(s) :</span> ${directors}</p>
				                    <p><span class="cat-name">Duration :</span> ${data.duration}min</p>
				                    <p><span class="cat-name">IMDb Score :</span> ${data.imdb_score}</p>
				                    <p><span class="cat-name">Rated :</span> ${data.rated}</p>
				                    <p><span class="cat-name">Grossing (USD):</span> ${data.worldwide_gross_income}</p>
				                    <p><span class="cat-name2">Actors :</span> ${actors}</p>
				                    <p><span class="cat-name2">Description :</span> ${data.long_description}</p>
				                </div>
			                    <span data-dismiss="action-modal" class="modal-close">X</span>
			                </div>
			          </div>
			        </div>`;

		document.querySelector("#"+cat_name+"-img").insertAdjacentHTML("beforeend", html);	 
		document.querySelector("#"+cat_name).insertAdjacentHTML("beforeend", html_b); 	        	

	}
}

async function fetch_top_movie(){
	const response = await fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score");
	const r_json = await response.json();
	const link = await r_json.results.map(movie => {
		return movie.url;
	})
	const response2 = await fetch(link[0]);
	const data = await response2.json();
		const countries = await data.countries.join(', ');
		const actors = await data.actors.join(', ');
		const genres = await data.genres.join('/');
		const directors = await data.directors.join(', ');

		const html = `<button class="modal-btn top-modal-btn" data-target="top-modal" data-toggle="action-modal" class="top-jacket"> ⓘ More info</button>`;
		const html_b =	`<span class="top-title">${data.title}</span>
		                	<span class="top-genre"> (${genres} | ${countries})<br/></span>
			                    <img class="img-top" src="${data.image_url}">
			                    <div class="top-movie-content">
				                    <p><span class="best">Description :</span> ${data.long_description}</p>
				                </div>`;
		const html_c =	`<div id="top-modal" class="modal-bg">
			            <div class="modal">
			                <div class="movie">
			                <span class="title">${data.title}<br/></span>
			                	<span class="genre"> ${genres} | ${countries}<br/></span>
			                    <img class="modal-img" src="${data.image_url}">
			                    <div class="modal-content">
				                    <p><span class="cat-name">Director(s) :</span> ${directors}</p>
				                    <p><span class="cat-name">Duration :</span> ${data.duration}min</p>
				                    <p><span class="cat-name">IMDb Score :</span> ${data.imdb_score}</p>
				                    <p><span class="cat-name">Rated :</span> ${data.rated}</p>
				                    <p><span class="cat-name">Grossing (USD):</span> ${data.worldwide_gross_income}</p>
				                    <p><span class="cat-name2">Actors :</span> ${actors}</p>
				                    <p><span class="cat-name2">Description :</span> ${data.long_description}</p>
				                </div>
			                    <span data-dismiss="action-modal" class="modal-close">X</span>
			                </div>
			          </div>
			        </div>`;

	 
		document.querySelector("#top-movie").insertAdjacentHTML("beforeend", html_b);
		document.querySelector("#top-movie").insertAdjacentHTML("beforeend", html);
		document.querySelector("#top-movie-modal").insertAdjacentHTML("beforeend", html_c);
}

fetch_data('best');
fetch_data('action');
fetch_data('animation');
fetch_data('sci-fi');
fetch_top_movie();


/* Modal window */
document.addEventListener('click', function (e) {
    e = e || window.event;
    var target = e.target || e.srcElement;

    if (target.hasAttribute('data-toggle') && target.getAttribute('data-toggle') == 'action-modal') {
        if (target.hasAttribute('data-target')) {
            var m_ID = target.getAttribute('data-target');
            var modal = document.getElementById(m_ID);
            modal.classList.add('bg-active');
            document.body.style.overflow = "hidden";
    		document.body.style.height = "100%";
            e.preventDefault();
        }
    }

    if ((target.hasAttribute('data-dismiss') && target.getAttribute('data-dismiss') == 'action-modal') || target.classList.contains('modal')) {
        var modal = document.querySelector('[class="modal-bg bg-active"]');
        modal.classList.remove('bg-active');
        document.body.style.overflow = "auto";
    	document.body.style.height = "auto";
        e.preventDefault();
    }
}, false);


/*Scroll functions */
function scroll_cat(){
    buttonRight = document.getElementById('right-scroll-button');
    buttonLeft = document.getElementById('left-scroll-button');
    console.log(buttonRight);
    buttonRight.onclick = function () {
      document.getElementById('best-img').scrollLeft += 300;
    };
    buttonLeft.onclick = function () {
      document.getElementById('best-img').scrollLeft -= 300;
    }
    ;
}
function scroll_cat2(){
    buttonRight = document.getElementById('right-scroll-button2');
    buttonLeft = document.getElementById('left-scroll-button2');
    console.log(buttonRight);
    buttonRight.onclick = function () {
		document.getElementById('action-img').scrollLeft += 300;
    };
    buttonLeft.onclick = function () {
    	document.getElementById('action-img').scrollLeft -= 300;
    };
}
function scroll_cat3(){
    buttonRight = document.getElementById('right-scroll-button3');
    buttonLeft = document.getElementById('left-scroll-button3');
    console.log(buttonRight);
    buttonRight.onclick = function () {
    	document.getElementById('animation-img').scrollLeft += 300;
    };
    buttonLeft.onclick = function () {
    	document.getElementById('animation-img').scrollLeft -= 300;
    };
}
function scroll_cat4(){
    buttonRight = document.getElementById('right-scroll-button4');
    buttonLeft = document.getElementById('left-scroll-button4');
    console.log(buttonRight);
    buttonRight.onclick = function () {
    	document.getElementById('sci-fi-img').scrollLeft += 300;
    };
    buttonLeft.onclick = function () {
    	document.getElementById('sci-fi-img').scrollLeft -= 300;
    };
}

scroll_cat();
scroll_cat2();
scroll_cat3();
scroll_cat4();


/* Menu */
let dropdownBtn = document.querySelector('.deroulant');
let menuContent = document.querySelector('.myDropdown');
dropdownBtn.addEventListener('click',()=>{
   if(menuContent.style.visibility==="hidden"){
      menuContent.style.visibility="visible";
   } else {
      menuContent.style.visibility="hidden";
   }
})
