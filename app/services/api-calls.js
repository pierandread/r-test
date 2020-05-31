const corsOriginUrl = "https://cors-anywhere.herokuapp.com/";
const url = 'https://gizmo.rakuten.tv';

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

export async function postTrailer(movieId){
  const fetchUrl = `${corsOriginUrl}${url}/v3/me/streamings?classification_id=5&device_identifier=web&locale=es&market_code=es`;
  const payload = {
    audio_language:"SPA",
    audio_quality:"2.0",
    content_id: movieId,
    content_type:"movies",
    device_serial: "device_serial_1",
    device_stream_video_quality:"FHD",
    player:"web:PD-NONE",
    subtitle_language:"MIS",
    video_type:"trailer"
    };
    const response = await fetch(fetchUrl, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}