function fetchData() {
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
			return `<p> Title : ${data.title}</p>`;
	}).then(html => {
		console.log(html);
	})
	}})
	.catch(error => {
		console.log(error);
	});
};

fetchData();



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