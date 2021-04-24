const api_key1 = "447038df7003d21b79e110e925a8568d";
const request1 = 'http://api.mediastack.com/v1/news?languages=it&keywords=palestra-palestre-Catania-Covid&limit=21&access_key=' + api_key1;

const api_key2 = '21218063-0071ff8a98ffb5ef1f88d9110';
const api_endpoint = 'https://pixabay.com/api/';
const text = "workout";
const numResults = 100;
const request2 = api_endpoint + '?key='  + api_key2 + '&q=' + text + '&per_page=' + numResults;


function onResponse(response){
	return response.json();
}

function onJson(json){
	console.log(json);

	let articoli = document.querySelector('#news');
	articoli.innerHTML = '';

	for (let i = 0; i < 21; i++)
    {

        let titolo = document.createElement('h1');
        let link= document.createElement('a');

        titolo.textContent = json.data[i].title;
        link.textContent = '- Visita il sito -';
        link.addEventListener('click',function(){location.href=json.data[i].url});


        const articolo = document.createElement('div');
        articolo.id=i;


        articolo.appendChild(link);
        articolo.appendChild(titolo);
        articoli.appendChild(articolo);
    }

}

fetch(request1).then(onResponse).then(onJson);

// ----------------------------------------------------------------------------------------------- //

function riduciZoom(event) {
	console.log(event);
	if(event.key === 'Escape')
	{
		zoom.classList.add('hidden');
		img = zoom.querySelector('img');
		img.remove();
		document.body.classList.remove('no-scroll');
	}
}

window.addEventListener('keydown', riduciZoom);

function applicaZoom(event) {
	const image = document.createElement('img');
	image.id = 'immagine_post';
	image.src = event.currentTarget.src;
	zoom.appendChild(image);
	zoom.classList.remove('hidden');
	document.body.classList.add('no-scroll');
}

function onJson2(json) {
    console.log(json);
    const atleti = document.querySelector('#atleti');
    atleti.innerHTML = '';
    const results = json.hits

    for(result of results)
    { 

        if(result.id === 2604149 || result.id === 828726 || result.id === 1282232 || 
            result.id === 1850926  || result.id === 4329901)
        {

        const immagine = result.largeImageURL;
  
      const album = document.createElement('div');
      album.classList.add('imag');
      const img = document.createElement('img');
      img.src = immagine;

      img.addEventListener('click', applicaZoom);

         
      album.appendChild(img);
    
      atleti.appendChild(album);
        }
    }
}

function onResponse2(response) {
    return response.json();
}


fetch(request2).then(onResponse2).then(onJson2);
