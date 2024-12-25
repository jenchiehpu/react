import { render, fireEvent, cleanup } from '@testing-library/react';

import TodoItem from '.';

describe('<TodoItem />', () => {
  afterEach(cleanup);
  test('測試已完成, 是否有正確將 data-active 加上', async () => {
    const { getByTestId } = render(<TodoItem done />);

    expect(getByTestId('li').dataset.active).toBe('true');
  });

  test('測試 click 後，有沒有接到事件', async () => {
    const toggleItem = jest.fn();

    const { getByTestId } = render(<TodoItem id="fakeId" onToggleItem={toggleItem} />);

    await fireEvent.click(getByTestId('li'));
    expect(toggleItem).toHaveBeenCalledWith('fakeId');
  });

  test('測試 Todo 文字是否有正確', () => {
    const { getByTestId } = render(<TodoItem text="謝謝你9527" />);

    expect(getByTestId('li').textContent).toBe('謝謝你9527');
  });
});
