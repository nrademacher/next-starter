import { render } from '@testing-library/react';
import { Welcome } from './Welcome';

it(`renders html`, () => {
  const { container } = render(<Welcome />);
  expect(container.firstChild).toBeInstanceOf(HTMLElement);
});
