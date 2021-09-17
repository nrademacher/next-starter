// https://github.com/vercel/next.js/tree/canary/examples/with-redux

import type { ChangeEvent } from 'react';

export const useForm =
  <TContent>(defaultValues: TContent) =>
  (handler: (content: TContent) => Promise<void>) =>
  async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.persist();

    const form = event.target as HTMLFormElement;
    const elements = Array.from(form.elements) as HTMLInputElement[];
    const data = elements
      .filter((element) => element.hasAttribute(`name`))
      .reduce(
        (object, element) => ({
          ...object,
          [`${element.getAttribute(`name`)}`]: element.value,
        }),
        defaultValues,
      );
    await handler(data);

    form.reset();
  };
