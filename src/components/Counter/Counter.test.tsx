import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { makeStore } from '@/store';
import { Counter } from './Counter';

describe(`<Counter />`, () => {
  it(`renders the component`, () => {
    const store = makeStore();

    render(
      <Provider store={store}>
        <Counter />
      </Provider>,
    );

    expect(screen.getByText(`0`)).toBeInTheDocument();
  });
});
