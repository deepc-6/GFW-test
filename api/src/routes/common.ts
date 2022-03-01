import express from 'express';

/**
 * The abstract class CommonRoutesConfig
 *
 * @remarks
 * Contains the getName function and the abstract function configureRoutes
 */
export abstract class CommonRoutesConfig {
  app: express.Application;

  name: string;

  /**
   * The constructor for the CommonRoutesConfig class
   *
   * @remarks
   * Calls the configureRoutes function
   *
   * @param app - application
   * @param name - name
   */
  constructor(app: express.Application, name: string) {
    this.app = app;
    this.name = name;
    this.configureRoutes();
  }

  /**
   * Returns the name
   *
   * @returns name
   */
  getName() {
    return this.name;
  }

  /**
   * The abstract function configureRoutes
   */
  abstract configureRoutes(): express.Application;
}
