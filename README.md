# Next.js Starter

An opinionated Next.js starter template, aiming to provide a solid starting point for scalable, professional-grade frontends.

It includes packages, setups, and configurations for:

- TypeScript
- SCSS modules
- Storybook
- Linting: ESLint, stylelint, commitlint
- Testing: Jest for component-based unit testing and Cypress for end-to-end testing
- Husky git hooks with lint-staged for automated linting, formatting, and testing
- Github Actions (CI, CodeQL analysis, tests)
- Docker: mult-stage Dockerfile plus `.dockerignore`

## Usage

Install dependencies with `yarn`, then `yarn dev` to start the dev server. Run `yarn build` to build (and type-check) a production build; serve it with `yarn start`.

For further commands to interact with the additional tooling, refer to the scripts in `package.json`.

## Notes

By default, Jest unit test files must be named `[filename].test.ts` or `[filename].test.tsx`. The `.spec.` suffix is reserved for Cypress e2e/integratiom test files.

By default, Storybook story files must be named `[filename].story.tsx`. They should be collocated with their respective component.

For Storybook, Next.js, and SCSS modules to work together the following dev dependencies must not be changed from the versions specified in `package.json`: `css-loader`, `postcss-loader`, `sass-loader`, `style-loader` (Please let me know if you know a better workaround!)
