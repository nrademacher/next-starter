import { render } from '@testing-library/react';

import { Footer } from './Footer';

it(`renders correct alt text for logo`, () => {
  const { getByAltText } = render(<Footer />);
  expect(getByAltText(`Vercel Logo`)).toBeTruthy();
});
