import React from 'react';
import { render } from '@testing-library/react';
import Slider from '../components/Slider/Slider';
import {getList} from '../services/api-calls';

jest.mock('../services/api-calls.js');
const fakeApiRequest = Promise.resolve({"errors": "Rejected omg!"});
getList.mockImplementation(() => fakeApiRequest);


test('it should show No result text if call is rejected', async () => {
  const { getByText } = await render(<Slider/>);
  const rejectMessage = getByText('No movies for this category');
  expect(rejectMessage).toBeInTheDocument()
  expect(getList).toHaveBeenCalledTimes(1)
});