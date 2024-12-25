import { render, fireEvent, cleanup } from '@testing-library/react';

import TodoForm from '.';

describe('Test <TodoForm />', () => {
  afterEach(cleanup);
  test('測試輸入文字，按下送出，父層是否有正確接到輸入的文字', async () => {
    const addItem = jest.fn();

    const { getByTestId } = render(<TodoForm onAddItem={addItem} />);

    await fireEvent.change(getByTestId('input'), { target: { value: 'milkmidi' } });
    await fireEvent.submit(getByTestId('form'));
    await expect(addItem).toHaveBeenCalledWith('milkmidi');
  });

  test('測試輸入文字空值，按下送出，父層不應該接到呼叫', async () => {
    const addItem = jest.fn();

    const { getByTestId } = render(<TodoForm addItem={addItem} />);

    await fireEvent.submit(getByTestId('form'));
    await expect(addItem).toHaveBeenCalledTimes(0);
  });
});
