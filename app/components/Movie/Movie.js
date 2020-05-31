import React from 'react';
import { Link } from "react-router-dom";
import './movie.css';

function Movie({movie}) {
  return (
    <div className='box'>
      <Link to={"/movie/" + movie.id}>
        <img alt={movie.title} src={movie.images.artwork} className='img'/>
      </Link>
    </div>
  )
}

export default Movie;

// classification: {type: "classifications", id: "7", numerical_id: 7, name: "12", age: 12, …}
// duration: 118
// highlighted_score: {score: 6.5, amount_of_votes: 954, formatted_amount_of_votes: "954"}
// id: "los-angeles-de-charlie-2019"
// images: {artwork: "https://images-3.wuaki.tv/system/artworks/114947/master/los-angeles-de-charlie-2019-1583318439.jpeg", snapshot: "https://images-0.wuaki.tv/system/shots/171304/original/los-angeles-de-charlie-2019-1583318419.jpeg", ribbons: Array(1)}
// label: "3,99 €"
// labels: {audio_qualities: Array(1), hdr_types: Array(1), purchase_types: Array(2), video_qualities: Array(2)}
// numerical_id: 114947
// rating: {average: 4, scale: 5}
// title: "Los ángeles de Charlie (2019)"
// type: "movies"
// year: 2019