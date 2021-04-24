
function Ricerca(event){

  const barraRicerca = event.currentTarget;
  const c=document.querySelector('#contenuti');
  const titoli = c.querySelectorAll('h1');
  
  for(titolo of titoli)
  {
    if(titolo.textContent.toLowerCase().search(barraRicerca.value.toLowerCase()) === -1)
    {
      titolo.parentNode.parentNode.classList.add('hidden');
    }
    else{
      titolo.parentNode.parentNode.classList.remove('hidden');
    }
  }
}

/* -------------------------------------------------------------------------------------------------------------------------------------------------*/

function RemPref(event){
  const pref = document.querySelector('#preferiti');
  pref.removeChild(event.currentTarget.parentNode.parentNode);
  const s = document.querySelector('article h1');
  if(pref.childElementCount === 0)
  {
      pref.classList.add('hidden');
      s.classList.add('hidden');
  }
}

/* -------------------------------------------------------------------------------------------------------------------------------------------------*/


function AddPref(event){
    const pref = document.querySelector('#preferiti');
    const titoli = pref.querySelectorAll('h1');
  
    for(titolo of titoli)
    if(titolo.textContent === event.currentTarget.parentNode.querySelector('h1').textContent)
    {
        return;
    }

    pref.classList.add('pref');
    const s = document.querySelector('#pre');
    s.classList.remove('hidden');

  if(pref.classList.contains('hidden'))
  {
    pref.classList.remove('hidden');
  }
  
  for(let i = 0; i < lista_contenuti.length; i++)
  {
  const box = event.currentTarget.parentNode.parentNode;

  if(lista_contenuti[i].titolo === box.querySelector('h1').textContent)
      {
      const titolo = lista_contenuti[i].titolo;
      const preferiti = rimuovi;
      const foto_src = lista_contenuti[i].immagine;
      const descrizione = lista_contenuti[i].descrizione;
      const contenuto = document.createElement('div');
      const titolo_preferiti = document.createElement('div');
      const title = document.createElement('h1');
      title.textContent = titolo;
      const pre = document.createElement('img');
      pre.src = preferiti;
      pre.addEventListener('click', RemPref);
      titolo_preferiti.appendChild(title);
      titolo_preferiti.appendChild(pre);
      contenuto.appendChild(titolo_preferiti);
      const image = document.createElement('img');
      image.src = foto_src;
      image.classList.add('immagine');
      contenuto.appendChild(image);
      const descr = document.createElement('p');
      descr.textContent = descrizione;
      descr.classList.add('descrizione');
      contenuto.appendChild(descr);
      const pref = document.querySelector('#preferiti');
      pref.appendChild(contenuto);
      }
  }
  const tags = pref.querySelectorAll('h1');
}
 
/* -------------------------------------------------------------------------------------------------------------------------------------------------*/


function MenoDettagli(event){
    const p = event.currentTarget;
    p.textContent = piu_dettagli;
    p.classList.add('piu_dettagli');
    p.classList.remove('meno_dettagli');
    p.removeEventListener('click', MenoDettagli);
    p.addEventListener('click', MostraDettagli);
    const dettagli = p.parentNode.querySelector('.descrizione');
    dettagli.classList.add('hidden');

}


/* -------------------------------------------------------------------------------------------------------------------------------------------------*/


function MostraDettagli(event){
    const p = event.currentTarget;
    p.textContent = meno_dettagli;
    p.classList.remove('piu_dettagli');
    p.classList.add('meno_dettagli');
    p.removeEventListener('click', MostraDettagli);
    p.addEventListener('click', MenoDettagli);
    const dettagli = p.parentNode.querySelector('.descrizione');
    dettagli.classList.remove('hidden');
}

/* -------------------------------------------------------------------------------------------------------------------------------------------------*/


function CreateContenuto(t , p, foto, desc, d ) {
    const contenuto = document.createElement('div');
    const titolo_preferiti = document.createElement('div');
    const titolo = document.createElement('h1');
    titolo.textContent = t;
    const preferiti = document.createElement('img');
    preferiti.src = p;
    preferiti.addEventListener('click', AddPref);
    titolo_preferiti.appendChild(titolo);
    titolo_preferiti.appendChild(preferiti);
    contenuto.appendChild(titolo_preferiti);
    const image = document.createElement('img');
    image.src = foto;
    image.classList.add('immagine');
    contenuto.appendChild(image);
    const descr = document.createElement('p');
    descr.textContent = desc;
    descr.classList.add('hidden');
    descr.classList.add('descrizione');
    contenuto.appendChild(descr);
    const piu_dett = document.createElement('p');
    piu_dett.textContent = d;
    piu_dett.classList.add('piu_dettagli');
    piu_dett.addEventListener('click', MostraDettagli);
    contenuto.appendChild(piu_dett);
    

    return contenuto;
}

/* -------------------------------------------------------------------------------------------------------------------------------------------------*/

const barraRicerca = document.querySelector('input[type="text"]');
barraRicerca.addEventListener('keyup',Ricerca);

const contenuti = document.querySelector('#contenuti');


for (let i=0; i < lista_contenuti.length; i++){
const titolo = lista_contenuti[i].titolo;
const preferiti = piu;
const foto_src = lista_contenuti[i].immagine;
const descrizione = lista_contenuti[i].descrizione;
const piu_dett = piu_dettagli;
const contenuto = CreateContenuto(titolo, preferiti, foto_src,descrizione, piu_dett);
contenuti.appendChild(contenuto);
}


/*-----------------------------------------------------------------------------------------------------------------------------------------------*/
