import store from './store';

const BASE_API_URL = '/api';

function getSearchResult(keyword, nextOffset) {
  const url = `${BASE_API_URL}?keyword=${keyword}&offset=${nextOffset}`;
  fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
  })
    .then(resp => resp.json())
    .then(data => store.dispatch({ type: 'LOAD_DATA', payload: data }));
}

export default getSearchResult;
