declare namespace Cypress {
  export type PluginConfig = Cypress.PluginConfig;
  export type PluginEvents = Cypress.PluginEvents;
  export type PluginConfigOptions = Cypress.PluginConfigOptions;
}

declare module '@cypress/code-coverage/task' {
  const task: Cypress.PluginConfig;
  export = task;
}
