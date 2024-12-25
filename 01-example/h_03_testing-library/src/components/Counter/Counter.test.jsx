import { render, fireEvent, cleanup } from '@testing-library/react';

import Counter from '.';

describe('Test <Counter />', () => {
  // 每次測試後將 render 的 DOM 清空
  afterEach(cleanup);
  test('測試是否正常 render ', async () => {
    // render Component
    // getByTestId 依 data-testid DOM
    // getByText 依文字找 DOM
    // container, 使用 querySelector 找 DOM
    const { getByTestId, getByText, container } = render(<Counter />);

    // 下方三個方法都可以找到顯示計數的 <span />
    expect(getByTestId('display_count').textContent).toBe('0');
    expect(getByText('0').textContent).toBe('0');
    expect(container.querySelector('span').innerHTML).toBe('0');

    await fireEvent.click(getByText('Increase'));
    expect(getByTestId('display_count').textContent).toBe('1');

    await fireEvent.click(getByText('Decrease'));
    expect(getByTestId('display_count').textContent).toBe('0');
  });

  test('Render with props', async () => {
    const { getByTestId, getByText } = render(<Counter defaultCount={10} />);

    expect(getByTestId('display_count').textContent).toBe('10');

    await fireEvent.click(getByText('Increase'));
    expect(getByTestId('display_count').textContent).toBe('11');

    await fireEvent.click(getByText('Decrease'));
    expect(getByTestId('display_count').textContent).toBe('10');
  });
});
