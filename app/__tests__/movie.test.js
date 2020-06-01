import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Movie from '../components/Movie/Movie';
import { MemoryRouter, } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import mockMovie from '../__mocks__/movieMock';


test(("it should render the component with the right img"), () =>{
  const {getByAltText} = render(<MemoryRouter><Movie movie={mockMovie}/></MemoryRouter>);
  const image = getByAltText(mockMovie.title);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src", "https://images-3.wuaki.tv/system/artworks/126374/master/adu-1590104150.jpeg")
});

test(("it should redirect to right url on click of img"), () =>{
  const {getByAltText} = render(<Router><Movie movie={mockMovie}/></Router>);
  const image = getByAltText(mockMovie.title);
  fireEvent.click(image);
  expect(global.window.location.pathname).toEqual('/movie/adu');
});