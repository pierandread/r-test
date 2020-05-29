const url = 'https://gizmo.rakuten.tv/';

export async function getList (id) {
  const fetchUrl = `${url}/v3/lists/${id}?classification_id=5&device_identifier=web&locale=es&market_code=es`
  const response = await fetch(fetchUrl)
    .then(res => res.json())
    .catch(error => console.log(error));
  console.log(response);
  return response;
}