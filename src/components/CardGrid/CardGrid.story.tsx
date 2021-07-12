import { Meta, Story } from '@storybook/react';

import { GridCard } from './GridCard';
import { Grid, CardGrid } from './CardGrid';

export default {
  title: `CardGrid`,
} as Meta;

export const Default: Story = () => <CardGrid />;

export const WithOneCard: Story = () => (
  <Grid>
    <GridCard
      link="www.google.com"
      title="Sample card"
      text="This is a sample card for Storybook"
    />
  </Grid>
);

export const WithTwoCards: Story = () => (
  <Grid>
    <GridCard
      link="www.google.com"
      title="Sample card"
      text="This is a sample card for Storybook"
    />
    <GridCard
      link="www.google.com"
      title="Sample card"
      text="This is a sample card for Storybook"
    />
  </Grid>
);

export const WithThreeCards: Story = () => (
  <Grid>
    <GridCard
      link="www.google.com"
      title="Sample card"
      text="This is a sample card for Storybook"
    />
    <GridCard
      link="www.google.com"
      title="Sample card"
      text="This is a sample card for Storybook"
    />
    <GridCard
      link="www.google.com"
      title="Sample card"
      text="This is a sample card for Storybook"
    />
  </Grid>
);
