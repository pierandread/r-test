import React from 'react';
import { render } from '@testing-library/react';
import Trailer from '../components/Trailer/Trailer';
import {postTrailer} from '../services/api-calls';


jest.mock('../services/api-calls.js');
const fakeApiRequest = Promise.resolve({
  "data": {
  "type": "streamings",
  "id": "c4319a2a-8201-4016-ac39-acc8891f07d9",
  "heartbeat": {},
  "stream_infos": [
      {
          "player": "web:PD-NONE",
          "display_aspect_ratio": "1.777777777777778",
          "all_subtitles": [],
          "cdn": "LIMELIGH",
          "url": "https://prod-stpeter-pmd.limelight.cdn.rakuten.tv/6/e/e/6eefc2859d08e4c7af51de44a1bdd7b3-mc-0-137-0-0_SD_TRAILER_PAR_1_1/6eefc2859d08e4c7af51de44a1bdd7b3-mc-0-137-0-0_SD_TRAILER_PAR_1_1.mp4?e=1591053249&h=fe3787d7aea924fa696d749ed63e9399",
          "wrid": "934c113e-7602-48a6-b68b-69c859245117",
          "video_quality": "SD"
      }
    ]
  }
});
postTrailer.mockImplementation(() => fakeApiRequest);

afterEach(() => {
  jest.clearAllMocks();
});

test('it show loading and call the API', () => {
  const { getByText } = render(<Trailer/>);
  const loadingText = getByText('Loading...');
  expect(loadingText).toBeInTheDocument()
  expect(postTrailer).toHaveBeenCalledTimes(1);
});

test('it show the right videoUrl and call the API', async () => {
  const { getByTestId } = render(<Trailer/>);
  await postTrailer();
  const sourceTrailer = getByTestId('source-trailer');
  expect(sourceTrailer).toHaveAttribute("src", "https://prod-stpeter-pmd.limelight.cdn.rakuten.tv/6/e/e/6eefc2859d08e4c7af51de44a1bdd7b3-mc-0-137-0-0_SD_TRAILER_PAR_1_1/6eefc2859d08e4c7af51de44a1bdd7b3-mc-0-137-0-0_SD_TRAILER_PAR_1_1.mp4?e=1591053249&h=fe3787d7aea924fa696d749ed63e9399")
});

