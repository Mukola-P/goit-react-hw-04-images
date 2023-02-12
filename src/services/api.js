const API_KEY = '29413010-960115206a758a8cef91eacf5';
const BASE_URL = 'https://pixabay.com/api/';

function fetchImages(query, page) {
  return fetch(
    `${BASE_URL}/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
}
export default fetchImages;
