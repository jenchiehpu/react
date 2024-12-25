import { render, waitFor, cleanup } from '@testing-library/react';

import { fetchData } from '../../services/api';
import DisplayData from '.';

jest.mock('../../services/api', () => ({
  fetchData: jest.fn(),
}));

describe('DisplayData', () => {
  afterEach(cleanup);

  test('children length', async () => {
    fetchData.mockResolvedValueOnce(['1', '2', '3']);

    const { getByTestId, debug } = render(<DisplayData />);
    expect(fetchData).toHaveBeenCalledTimes(1);
    await waitFor(() => {
      // debug();
      expect(getByTestId('ul').children.length).toBe(3);
    });
  });
});
