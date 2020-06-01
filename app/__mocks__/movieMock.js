const mockMovie= {
  "type": "movies",
  "id": "adu",
  "numerical_id": 126374,
  "title": "Adú",
  "year": 2020,
  "duration": 119,
  "label": "3,99 €",
  "classification": {
      "type": "classifications",
      "id": "8",
      "numerical_id": 8,
      "name": "16",
      "age": 16,
      "adult": false,
      "description": "Mostrar sólo los contenidos autorizados para los niños de hasta 16 años",
      "default": false
  },
  "images": {
      "artwork": "https://images-3.wuaki.tv/system/artworks/126374/master/adu-1590104150.jpeg",
      "snapshot": "https://images-0.wuaki.tv/system/shots/183278/original/adu-1590108964.jpeg",
      "ribbons": []
  },
  "highlighted_score": {
      "score": 7,
      "amount_of_votes": 33,
      "formatted_amount_of_votes": "33"
  },
  "rating": {
      "average": 4,
      "scale": 5
  },
  "labels": {
      "audio_qualities": [
          {
              "type": "audio_qualities",
              "id": "2.0",
              "numerical_id": 2,
              "name": "2.0 (Stereo)",
              "abbr": "2.0",
              "image": "https://images-1.wuaki.tv/system/logos/2/original/2-0-stereo-1456155689.png"
          }
      ],
      "hdr_types": [
          {
              "type": "hdr_types",
              "id": "NONE",
              "numerical_id": 1,
              "name": "SDR",
              "abbr": "NONE",
              "image": null
          }
      ],
      "purchase_types": [
          {
              "type": "purchase_types",
              "id": "1",
              "numerical_id": 1,
              "is_recurring": false,
              "name": "Alquiler 48H",
              "label": "ALQUILER 48H",
              "kind": "rental",
              "expires_after_in_seconds": 172800,
              "available_time_in_seconds": 172800
          }
      ],
      "video_qualities": [
          {
              "type": "video_qualities",
              "id": "SD",
              "numerical_id": 2,
              "name": "SD",
              "abbr": "SD",
              "position": 0,
              "image": "https://images-1.wuaki.tv/system/logos/2/original/sd-1456155688.png"
          },
          {
              "type": "video_qualities",
              "id": "HD",
              "numerical_id": 1,
              "name": "HD",
              "abbr": "HD",
              "position": 1,
              "image": "https://images-0.wuaki.tv/system/logos/1/original/hd-1456155687.png"
          }
      ]
  }
};

export default mockMovie;