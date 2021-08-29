# Next Starter

An opinionated Next.js starter templated with industry-standard tooling, intended mainly for medium to large-scale projects.

- TypeScript
- SCSS modules
- Storybook
- Linting: ESLint, stylelint, commitlint
- Testing: Jest for component-based unit testing and Cypress for end-to-end testing
- Husky git hooks with lint-staged for automated linting, formatting, and testing
- Github Actions (CI, CodeQL analysis, tests)
- Dockerfile

## Usage

**Note:** [pnpm](https://pnpm.io/) is used for this project because it has quite a lot of dependencies, so I wanted the fastest/most efficient package manager available.

Install dependencies with `pnpm install`, then `pnpm dev` to start the dev server. Run `pnpm build` to build (and type-check) a production build; serve it with `pnpm start`.

For further commands to interact with the additional tooling, refer to the scripts in `package.json`.
