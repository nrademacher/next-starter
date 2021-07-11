import { render } from '@testing-library/react';

import { GridCard } from './GridCard';

it(`renders a title`, () => {
  const { container } = render(
    <GridCard
      link="www.google.com"
      title="Test card"
      text="This is a test card"
    />,
  );
  expect(container.firstChild).toBeTruthy();
});
