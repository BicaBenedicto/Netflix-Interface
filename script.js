const requestAPI = async (search, type='series', page=1) => {
  const movie = (search.includes(' ') ? search.replace(' ', '%20') : search);
  const response = await fetch(`http://www.omdbapi.com/?apikey=312712c4&s=${movie}&type=${type}&page=${page}`)
  const { Search }= await response.json();
  console.log(Search);
  return Search;
}

const DestaqueRender = async (id, search, type = '', index = 1) => {
  const section = document.getElementById(id);
  const block = document.createElement('div');
  block.style.display = 'flex';
  block.className = `d-flex w-100 cards-block-${index} gallery-cell`;
  section.appendChild(block);
  const movie = await requestAPI(search, type, index);
  return movie.forEach(({ Poster, Title }) => {
  const card = document.createElement('div');
  const img = document.createElement('img');
  img.src = Poster;
  img.alt = Title;
  img.className = 'd-block w-100 h-100';

  card.appendChild(img);

  card.style.height = '250px';
  card.style.margin = '10px';
  card.style.width = '200px';

  block.appendChild(card);
  });
}

const headerChange = () => {
  const header = document.querySelector('header.header');
  return header.style.background = 'rgba(0, 0, 0, 0.472)';
}


document.addEventListener('scroll', headerChange);

DestaqueRender('action', 'action', 'movie', 2);
DestaqueRender('action', 'action', 'movie');
DestaqueRender('adventure', 'adventure', 'movie', 2);
DestaqueRender('adventure', 'adventure', 'movie');
DestaqueRender('comedy', 'comedy', 'movie', 2);
DestaqueRender('comedy', 'comedy', 'movie');
DestaqueRender('romance', 'romance', 'movie', 2);
DestaqueRender('romance', 'romance', 'movie');