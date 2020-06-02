import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import { MemoryRouter, } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";

import movieMock from '../__mocks__/movieMock';
import {getMovie} from '../services/api-calls';

jest.mock('../services/api-calls.js');
const fakeApiRequest = Promise.resolve(movieMock);
getMovie.mockImplementation(() => fakeApiRequest);

afterEach(() => {
  jest.clearAllMocks();
});

test(("it should show the right information"), async () =>{
  const {getByText} = await render(<MemoryRouter><MovieDetails /></MemoryRouter>);
  const title = getByText("Bloodshot");
  const year = getByText("2020");
  const duration = getByText("1h49m");
  const genres0 = getByText("Acción,");
  const genres1 = getByText("Ciencia ficción,");
  const genres2 = getByText("Drama.");
  expect(title).toBeInTheDocument();
  expect(year).toBeInTheDocument();
  expect(duration).toBeInTheDocument();
  expect(genres0).toBeInTheDocument();
  expect(genres1).toBeInTheDocument();
  expect(genres2).toBeInTheDocument();

});

test(("it should link to trailer url"), async () =>{
  const {getByTestId} = await render(<Router><MovieDetails /></Router>);
  await getMovie();
  const button = getByTestId("trailer-button");
  fireEvent.click(button);
  expect(global.window.location.pathname).toContain('/trailer/');
});