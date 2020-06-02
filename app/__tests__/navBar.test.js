import React from 'react';
import { render } from '@testing-library/react';
import NavBar from '../components/NavBar/NavBar';
import MovieTitleContext from '../reactContext/movieTitle';


test(("it should render the navBar in line with reactContext"), () =>{
  const {getByText} = render(<MovieTitleContext.Provider value={""}><NavBar/></MovieTitleContext.Provider>);
  const navText = getByText("Rakuten TV");
  expect(navText).toBeInTheDocument();
});

test(("it should render the navBar in line with reactContext"), () =>{
  const {getByText} = render(<MovieTitleContext.Provider value={{movieTitleContext: "miao"}}><NavBar/></MovieTitleContext.Provider>);
  const navText = getByText("miao");
  expect(navText).toBeInTheDocument();
});