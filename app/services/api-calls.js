const corsOriginUrl = "https://cors-anywhere.herokuapp.com/";
const url = 'https://gizmo.rakuten.tv/';

export async function getList (id) {
  const fetchUrl = `${corsOriginUrl}${url}/v3/lists/${id}?classification_id=5&device_identifier=web&locale=es&market_code=es`;
  const response = await fetch(fetchUrl)
    .then(res => res.json())
    .catch(error => console.log(error));
  console.log(response);
  return response;
}

export async function getMovie(id) {
  const fetchUrl = `${corsOriginUrl}${url}/v3/movies/${id}?classification_id=5&device_identifier=web&locale=es&market_code=es`;
  const response = await fetch(fetchUrl)
    .then(res => res.json())
    .catch(error => console.log(error));
  console.log(response);
  return response;
}