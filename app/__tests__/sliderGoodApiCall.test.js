import React from 'react';
import { render } from '@testing-library/react';
import Slider from '../components/Slider/Slider';
import {getList} from '../services/api-calls';
import { MemoryRouter, } from 'react-router-dom';
import listMock from '../__mocks__/getListSuccessCallMock';

jest.mock('../services/api-calls.js');
const fakeApiRequest = Promise.resolve(listMock);
getList.mockImplementation(() => fakeApiRequest);


test('it should show loading message', () => {
  const { getByText } = render(<MemoryRouter><Slider/></MemoryRouter>);
  const loadingMessage = getByText('Loading...');
  expect(loadingMessage).toBeInTheDocument()
});

test('it should show arrows', async () => {
  const { container } = await render(<MemoryRouter><Slider/></MemoryRouter>);
  const arrow = container.querySelector('i');
  expect(arrow).toBeInTheDocument();
});