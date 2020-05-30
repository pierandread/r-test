import React, {useState, useEffect} from 'react';
import {getMovie} from '../../services/api-calls';
import './movieDetails.css'


function MovieDetails () {
  useEffect(()=>{
    const path = window.location.pathname;
    const movieId = path.replace (/(\/movie\/)/, "");
    console.log(movieId);
    getMovie(movieId).then(res => setMovie(res));
  }, [window.location.pathname])

  const [movie, setMovie] = useState(null);
  const [title, setTitle] = useState('')
  const [year, setYear] = useState('');
  const [plot, setPlot] = useState('');
  const [duration, setDuration] = useState('');
  const [genres, setGenres] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState('');

  if(movie && !title) {setTitle(movie.data.title)};
  if(movie && !plot) {setPlot(movie.data.short_plot)};
  if(movie && !year) {setYear(movie.data.year)};
  if(movie && !duration) {setDuration(movie.data.duration); };
  if(movie && !genres) {let genresArray=[]; let genresObj=movie.data.genres; for (let genre of genresObj){genresArray.push(genre.name)}; setGenres(genresArray); console.log("set G ",  movie.data.genres, " genresArray ", genresArray)};
  if(movie && !backgroundImage) {setBackgroundImage(movie.data.images.snapshot)};

  if (movie){
    return (
      <div>
        <div className='banner' style={{backgroundImage:`url(${backgroundImage})`}}>
          <h1 className='title'>{title}</h1>
        </div>
        <div>
          <p>Year: {year}</p>
          <p>Duration: {duration}</p>
          {genres && <div><p>Genres: </p>{genres.map(((el, idx) => <p key={idx}>{el}</p>))}</div>}
        </div>
        <div>
          <p>{plot}</p>
        </div>      
        <button onClick={()=>{console.log(movie)}}> movie?</button>
      </div>
    )} else {
      return(
        <div>
          <p>loading..</p>
        </div>
      )
    }
}

export default MovieDetails;


// {   "meta": {
//       "rights": [],
//       "heartbeats": [],
//       "already_seens": [],
//       "wishlists": [],
//       "likes": [],
//       "warnings": []
//   },
//   "data": {
//       "type": "movies",
//       "id": "si-yo-fuera-rico-2019",
//       "numerical_id": 117960,
//       "title": "Si Yo Fuera Rico (2019)",
//       "original_title": "Si yo fuera rico",
//       "year": 2019,
//       "short_plot": "A Santi le toca un pastón en la lotería: ¡25 Millones! Maravilloso, si no fuera por el régimen de gananciales en pleno proceso de divorcio de Maite. ¿Será Santi capaz de ocultar semejante millonada hasta que el divorcio sea efectivo?",
//       "plot": "A Santi le toca la lotería… y no precisamente un pellizco, sino un pastón: ¡25 Millones! Todo maravilloso si no fuera por un pequeno detalle: el régimen de gananciales en pleno proceso de divorcio de Maite. ¿Será Santi capaz de ocultar semejante millonada a su ex y a todo su entorno hasta que el divorcio sea efectivo?",
//       "duration": 93,
//       "highlight": null,
//       "duration_in_seconds": 5613,
//       "ultraviolet_enabled": false,
//       "groups": [],
//       "actors": [
//           {
//               "type": "people",
//               "id": "alex-garcia",
//               "numerical_id": 146769,
//               "photo": "https://images-3.wuaki.tv/system/photos/146769/original/alex-garcia-1525324613.jpeg",
//               "name": "Álex García",
//               "born_at": null
//           },
//           {
//               "type": "people",
//               "id": "alexandra-jimenez",
//               "numerical_id": 29863,
//               "photo": "https://images-3.wuaki.tv/system/photos/29863/original/alexandra-jimenez-1525304465.jpeg",
//               "name": "Alexandra Jiménez",
//               "born_at": null
//           },
//           {
//               "type": "people",
//               "id": "paula-echevarria",
//               "numerical_id": 165802,
//               "photo": "https://images-1.wuaki.tv/system/photos/165802/original/paula-echevarria-1547089328.jpeg",
//               "name": "Paula Echevarría",
//               "born_at": null
//           },
//           {
//               "type": "people",
//               "id": "adrian-lastra",
//               "numerical_id": 135952,
//               "photo": "https://images-2.wuaki.tv/system/photos/135952/original/adrian-lastra-1525312962.jpeg",
//               "name": "Adrian Lastra",
//               "born_at": null
//           },
//           {
//               "type": "people",
//               "id": "antonio-resines",
//               "numerical_id": 6924,
//               "photo": "https://images-0.wuaki.tv/system/photos/6924/original/antonio-resines-1525282898.jpeg",
//               "name": "Antonio Resines",
//               "born_at": null
//           },
//           {
//               "type": "people",
//               "id": "diego-martin",
//               "numerical_id": 5820,
//               "photo": "https://images-3.wuaki.tv/system/photos/5820/original/diego-martin-1525281641.jpeg",
//               "name": "Diego Martín",
//               "born_at": null
//           },
//           {
//               "type": "people",
//               "id": "jordi-sanchez",
//               "numerical_id": 29358,
//               "photo": "https://images-1.wuaki.tv/system/photos/29358/original/jordi-sanchez-1525304131.jpeg",
//               "name": "Jordi Sánchez",
//               "born_at": null
//           }
//       ],
//       "awards": [],
//       "classification": {
//           "type": "classifications",
//           "id": "8",
//           "numerical_id": 8,
//           "name": "16",
//           "age": 16,
//           "adult": false,
//           "description": "Mostrar sólo los contenidos autorizados para los niños de hasta 16 años",
//           "default": false
//       },
//       "countries": [
//           {
//               "type": "countries",
//               "id": "11",
//               "numerical_id": 11,
//               "name": "España"
//           }
//       ],
//       "deep_links": {},
//       "extras": [],
//       "directors": [
//           {
//               "type": "people",
//               "id": "alvaro-fernandez-armero",
//               "numerical_id": 1745,
//               "photo": "https://images-2.wuaki.tv/system/photos/1745/original/alvaro-fernandez-armero-1525276866.jpeg",
//               "name": "Álvaro Fernández Armero",
//               "born_at": null
//           }
//       ],
//       "genres": [
//           {
//               "type": "genres",
//               "id": "comedia",
//               "numerical_id": 23,
//               "name": "Comedia",
//               "adult": false,
//               "erotic": false,
//               "additional_images": {
//                   "icon": "https://images-1.wuaki.tv/system/brandable_photos/6359/original/1461243667-1461243667.png"
//               }
//           }
//       ],
//       "images": {
//           "artwork": "https://images-0.wuaki.tv/system/artworks/117960/master/si-yo-fuera-rico-2019-1584399585.jpeg",
//           "snapshot": "https://images-1.wuaki.tv/system/shots/173462/original/si-yo-fuera-rico-2019-1584639696.jpeg",
//           "ribbons": []
//       },
//       "offline_enabled_for_est": true,
//       "offline_enabled_for_rent": true,
//       "offline_enabled_for_svod": false,
//       "order_options": [
//           {
//               "type": "order_options",
//               "id": "1058768",
//               "numerical_id": 1058768,
//               "legacy_instance_type": null,
//               "legacy_instance_id": null,
//               "periodic_points_reward_amount": 0,
//               "price": "3,99 €",
//               "price_without_currency": 3.99,
//               "points": {
//                   "cost": 399,
//                   "reward": 3
//               },
//               "purchase_type": {
//                   "type": "purchase_types",
//                   "id": "1",
//                   "numerical_id": 1,
//                   "is_recurring": false,
//                   "name": "Alquiler 48H",
//                   "label": "ALQUILER 48H",
//                   "kind": "rental",
//                   "expires_after_in_seconds": 172800,
//                   "available_time_in_seconds": 172800
//               },
//               "video_quality": {
//                   "type": "video_qualities",
//                   "id": "SD",
//                   "numerical_id": 2,
//                   "name": "SD",
//                   "abbr": "SD",
//                   "position": 0,
//                   "image": "https://images-1.wuaki.tv/system/logos/2/original/sd-1456155688.png"
//               },
//               "external_tiers": [
//                   {
//                       "type": "microsoft_store",
//                       "id": "9P30JJT99V5D",
//                       "price": "4,49 €"
//                   },
//                   {
//                       "type": "itunes",
//                       "id": "tv.wuaki.alternatetier3",
//                       "price": "3,99 €"
//                   }
//               ],
//               "warnings": [],
//               "order_option_display_info": {}
//           },
//           {
//               "type": "order_options",
//               "id": "1058767",
//               "numerical_id": 1058767,
//               "legacy_instance_type": null,
//               "legacy_instance_id": null,
//               "periodic_points_reward_amount": 0,
//               "price": "4,99 €",
//               "price_without_currency": 4.99,
//               "points": {
//                   "cost": 499,
//                   "reward": 4
//               },
//               "purchase_type": {
//                   "type": "purchase_types",
//                   "id": "1",
//                   "numerical_id": 1,
//                   "is_recurring": false,
//                   "name": "Alquiler 48H",
//                   "label": "ALQUILER 48H",
//                   "kind": "rental",
//                   "expires_after_in_seconds": 172800,
//                   "available_time_in_seconds": 172800
//               },
//               "video_quality": {
//                   "type": "video_qualities",
//                   "id": "HD",
//                   "numerical_id": 1,
//                   "name": "HD",
//                   "abbr": "HD",
//                   "position": 1,
//                   "image": "https://images-0.wuaki.tv/system/logos/1/original/hd-1456155687.png"
//               },
//               "external_tiers": [
//                   {
//                       "type": "microsoft_store",
//                       "id": "9NGB600ZWF23",
//                       "price": "5,49 €"
//                   },
//                   {
//                       "type": "itunes",
//                       "id": "tv.wuaki.alternatetier4",
//                       "price": "4,99 €"
//                   }
//               ],
//               "warnings": [],
//               "order_option_display_info": {}
//           }
//       ],
//       "rating": {
//           "average": 4,
//           "scale": 5
//       },
//       "critic_reviews": {
//           "meta": {
//               "pagination": {
//                   "page": 1,
//                   "count": 0,
//                   "per_page": 18,
//                   "offset": 0,
//                   "total_pages": 0
//               }
//           },
//           "data": []
//       },
//       "user_reviews": {
//           "meta": {
//               "pagination": {
//                   "page": 1,
//                   "count": 0,
//                   "per_page": 18,
//                   "offset": 0,
//                   "total_pages": 0
//               }
//           },
//           "data": []
//       },
//       "scores": [
//           {
//               "type": "scores",
//               "id": "459339",
//               "numerical_id": 459339,
//               "href": "https://www.themoviedb.org/movie/630709",
//               "amount_of_votes": 38,
//               "formatted_amount_of_votes": "38",
//               "score": 6.1,
//               "highlighted": true,
//               "site": {
//                   "type": "sites",
//                   "id": "39",
//                   "numerical_id": 39,
//                   "name": "The Movie Database",
//                   "show_image": false,
//                   "scale": 10,
//                   "image": "https://images-0.wuaki.tv/system/images/39/original/the-movie-database-1488534865.png"
//               }
//           },
//           {
//               "type": "scores",
//               "id": "472306",
//               "numerical_id": 472306,
//               "href": "https://www.imdb.com/title/tt9010802/?ref_=nv_sr_srsg_0",
//               "amount_of_votes": 180,
//               "formatted_amount_of_votes": "180",
//               "score": 5.3,
//               "highlighted": false,
//               "site": {
//                   "type": "sites",
//                   "id": "1",
//                   "numerical_id": 1,
//                   "name": "IMDb",
//                   "show_image": false,
//                   "scale": 10,
//                   "image": "https://images-0.wuaki.tv/system/images/1/original/imdb-1481731825.png"
//               }
//           }
//       ],
//       "subscription_plans": [],
//       "svod_schedules": [],
//       "tags": [],
//       "view_options": {
//           "support": {
//               "audio_qualities": [
//                   {
//                       "type": "audio_qualities",
//                       "id": "2.0",
//                       "numerical_id": 2,
//                       "name": "2.0 (Stereo)",
//                       "abbr": "2.0",
//                       "image": "https://images-1.wuaki.tv/system/logos/2/original/2-0-stereo-1456155689.png"
//                   }
//               ],
//               "video_qualities": [
//                   {
//                       "type": "video_qualities",
//                       "id": "HD",
//                       "numerical_id": 1,
//                       "name": "HD",
//                       "abbr": "HD",
//                       "position": 1,
//                       "image": "https://images-0.wuaki.tv/system/logos/1/original/hd-1456155687.png"
//                   },
//                   {
//                       "type": "video_qualities",
//                       "id": "SD",
//                       "numerical_id": 2,
//                       "name": "SD",
//                       "abbr": "SD",
//                       "position": 0,
//                       "image": "https://images-1.wuaki.tv/system/logos/2/original/sd-1456155688.png"
//                   }
//               ],
//               "hdr_types": [
//                   {
//                       "type": "hdr_types",
//                       "id": "NONE",
//                       "numerical_id": 1,
//                       "name": "SDR",
//                       "abbr": "NONE",
//                       "image": null
//                   }
//               ]
//           },
//           "public": {
//               "trailers": [
//                   {
//                       "hdr_types": [
//                           {
//                               "type": "hdr_types",
//                               "id": "NONE",
//                               "numerical_id": 1,
//                               "name": "SDR",
//                               "abbr": "NONE",
//                               "image": null
//                           }
//                       ],
//                       "streaming_drm_types": [
//                           {
//                               "type": "streaming_drm_types",
//                               "id": "DASH-NONE"
//                           },
//                           {
//                               "type": "streaming_drm_types",
//                               "id": "SS-NONE"
//                           }
//                       ],
//                       "audio_qualities": [
//                           {
//                               "type": "audio_qualities",
//                               "id": "2.0",
//                               "numerical_id": 2,
//                               "name": "2.0 (Stereo)",
//                               "abbr": "2.0",
//                               "image": "https://images-1.wuaki.tv/system/logos/2/original/2-0-stereo-1456155689.png"
//                           }
//                       ],
//                       "subtitle_languages": [
//                           {
//                               "type": "languages",
//                               "id": "MIS",
//                               "numerical_id": 1,
//                               "name": "Sin subtítulos",
//                               "abbr": "MIS"
//                           }
//                       ],
//                       "video_qualities": [
//                           {
//                               "type": "video_qualities",
//                               "id": "HD",
//                               "numerical_id": 1,
//                               "name": "HD",
//                               "position": 1,
//                               "abbr": "HD",
//                               "image": "https://images-0.wuaki.tv/system/logos/1/original/hd-1456155687.png"
//                           },
//                           {
//                               "type": "video_qualities",
//                               "id": "SD",
//                               "numerical_id": 2,
//                               "name": "SD",
//                               "position": 0,
//                               "abbr": "SD",
//                               "image": "https://images-1.wuaki.tv/system/logos/2/original/sd-1456155688.png"
//                           }
//                       ],
//                       "audio_languages": [
//                           {
//                               "type": "languages",
//                               "id": "SPA",
//                               "numerical_id": 57,
//                               "name": "Español",
//                               "abbr": "SPA"
//                           }
//                       ]
//                   },
//                   {
//                       "hdr_types": [
//                           {
//                               "type": "hdr_types",
//                               "id": "NONE",
//                               "numerical_id": 1,
//                               "name": "SDR",
//                               "abbr": "NONE",
//                               "image": null
//                           }
//                       ],
//                       "streaming_drm_types": [
//                           {
//                               "type": "streaming_drm_types",
//                               "id": "PD-NONE"
//                           }
//                       ],
//                       "audio_qualities": [
//                           {
//                               "type": "audio_qualities",
//                               "id": "2.0",
//                               "numerical_id": 2,
//                               "name": "2.0 (Stereo)",
//                               "abbr": "2.0",
//                               "image": "https://images-1.wuaki.tv/system/logos/2/original/2-0-stereo-1456155689.png"
//                           }
//                       ],
//                       "subtitle_languages": [
//                           {
//                               "type": "languages",
//                               "id": "MIS",
//                               "numerical_id": 1,
//                               "name": "Sin subtítulos",
//                               "abbr": "MIS"
//                           }
//                       ],
//                       "video_qualities": [
//                           {
//                               "type": "video_qualities",
//                               "id": "SD",
//                               "numerical_id": 2,
//                               "name": "SD",
//                               "position": 0,
//                               "abbr": "SD",
//                               "image": "https://images-1.wuaki.tv/system/logos/2/original/sd-1456155688.png"
//                           }
//                       ],
//                       "audio_languages": [
//                           {
//                               "type": "languages",
//                               "id": "SPA",
//                               "numerical_id": 57,
//                               "name": "Español",
//                               "abbr": "SPA"
//                           }
//                       ]
//                   }
//               ],
//               "previews": [],
//               "adverts": []
//           },
//           "private": {
//               "streams": [
//                   {
//                       "hdr_types": [
//                           {
//                               "type": "hdr_types",
//                               "id": "NONE",
//                               "numerical_id": 1,
//                               "name": "SDR",
//                               "abbr": "NONE",
//                               "image": null
//                           }
//                       ],
//                       "streaming_drm_types": [
//                           {
//                               "type": "streaming_drm_types",
//                               "id": "PD-WVN"
//                           },
//                           {
//                               "type": "streaming_drm_types",
//                               "id": "DASH-CENC"
//                           },
//                           {
//                               "type": "streaming_drm_types",
//                               "id": "SS-PR"
//                           }
//                       ],
//                       "audio_qualities": [
//                           {
//                               "type": "audio_qualities",
//                               "id": "2.0",
//                               "numerical_id": 2,
//                               "name": "2.0 (Stereo)",
//                               "abbr": "2.0",
//                               "image": "https://images-1.wuaki.tv/system/logos/2/original/2-0-stereo-1456155689.png"
//                           }
//                       ],
//                       "subtitle_languages": [
//                           {
//                               "type": "languages",
//                               "id": "MIS",
//                               "numerical_id": 1,
//                               "name": "Sin subtítulos",
//                               "abbr": "MIS"
//                           }
//                       ],
//                       "video_qualities": [
//                           {
//                               "type": "video_qualities",
//                               "id": "HD",
//                               "numerical_id": 1,
//                               "name": "HD",
//                               "position": 1,
//                               "abbr": "HD",
//                               "image": "https://images-0.wuaki.tv/system/logos/1/original/hd-1456155687.png"
//                           },
//                           {
//                               "type": "video_qualities",
//                               "id": "SD",
//                               "numerical_id": 2,
//                               "name": "SD",
//                               "position": 0,
//                               "abbr": "SD",
//                               "image": "https://images-1.wuaki.tv/system/logos/2/original/sd-1456155688.png"
//                           }
//                       ],
//                       "audio_languages": [
//                           {
//                               "type": "languages",
//                               "id": "SPA",
//                               "numerical_id": 57,
//                               "name": "Español",
//                               "abbr": "SPA"
//                           }
//                       ]
//                   }
//               ],
//               "offline_streams": [
//                   {
//                       "hdr_types": [
//                           {
//                               "type": "hdr_types",
//                               "id": "NONE",
//                               "numerical_id": 1,
//                               "name": "SDR",
//                               "abbr": "NONE",
//                               "image": null
//                           }
//                       ],
//                       "streaming_drm_types": [
//                           {
//                               "type": "streaming_drm_types",
//                               "id": "PD-CENC"
//                           }
//                       ],
//                       "audio_qualities": [
//                           {
//                               "type": "audio_qualities",
//                               "id": "2.0",
//                               "numerical_id": 2,
//                               "name": "2.0 (Stereo)",
//                               "abbr": "2.0",
//                               "image": "https://images-1.wuaki.tv/system/logos/2/original/2-0-stereo-1456155689.png"
//                           }
//                       ],
//                       "subtitle_languages": [
//                           {
//                               "type": "languages",
//                               "id": "MIS",
//                               "numerical_id": 1,
//                               "name": "Sin subtítulos",
//                               "abbr": "MIS"
//                           }
//                       ],
//                       "video_qualities": [
//                           {
//                               "type": "video_qualities",
//                               "id": "SD",
//                               "numerical_id": 2,
//                               "name": "SD",
//                               "position": 0,
//                               "abbr": "SD",
//                               "image": "https://images-1.wuaki.tv/system/logos/2/original/sd-1456155688.png"
//                           }
//                       ],
//                       "audio_languages": [
//                           {
//                               "type": "languages",
//                               "id": "SPA",
//                               "numerical_id": 57,
//                               "name": "Español",
//                               "abbr": "SPA"
//                           }
//                       ]
//                   }
//               ]
//           }
//       },
//       "additional_images": {},
//       "labels": {
//           "audio_qualities": [
//               {
//                   "type": "audio_qualities",
//                   "id": "2.0",
//                   "numerical_id": 2,
//                   "name": "2.0 (Stereo)",
//                   "abbr": "2.0",
//                   "image": "https://images-1.wuaki.tv/system/logos/2/original/2-0-stereo-1456155689.png"
//               }
//           ],
//           "hdr_types": [
//               {
//                   "type": "hdr_types",
//                   "id": "NONE",
//                   "numerical_id": 1,
//                   "name": "SDR",
//                   "abbr": "NONE",
//                   "image": null
//               }
//           ],
//           "purchase_types": [
//               {
//                   "type": "purchase_types",
//                   "id": "1",
//                   "numerical_id": 1,
//                   "is_recurring": false,
//                   "name": "Alquiler 48H",
//                   "label": "ALQUILER 48H",
//                   "kind": "rental",
//                   "expires_after_in_seconds": 172800,
//                   "available_time_in_seconds": 172800
//               }
//           ],
//           "video_qualities": [
//               {
//                   "type": "video_qualities",
//                   "id": "SD",
//                   "numerical_id": 2,
//                   "name": "SD",
//                   "abbr": "SD",
//                   "position": 0,
//                   "image": "https://images-1.wuaki.tv/system/logos/2/original/sd-1456155688.png"
//               },
//               {
//                   "type": "video_qualities",
//                   "id": "HD",
//                   "numerical_id": 1,
//                   "name": "HD",
//                   "abbr": "HD",
//                   "position": 1,
//                   "image": "https://images-0.wuaki.tv/system/logos/1/original/hd-1456155687.png"
//               }
//           ]
//       }
//   }
// }