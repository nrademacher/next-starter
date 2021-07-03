import * as codeCoverageTask from '@cypress/code-coverage/task';

const pluginConfig: Cypress.PluginConfig = (
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions,
) => {
  void codeCoverageTask(on, config);
  return config;
};

export default pluginConfig;
