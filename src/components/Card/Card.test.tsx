import { render } from '@testing-library/react';

import { Card } from './Card';

it(`renders a title`, () => {
  const { container } = render(
    <Card link="www.google.com" title="Test card" text="This is a test card" />,
  );
  expect(container.firstChild).toBeTruthy();
});
