import { ConnectionOptions, Connection } from 'typeorm'

declare module 'egg' {

  interface Context {
    connection: Connection
    getConnection(connectionName?: string): Connection
  }

  interface EntityDirOptions {
    entitiesDir?: string,
    name?: string
  }

  interface EggAppConfig {
    typeorm: {
      /**
       * @description typeorm conn option
       */
      client?: ConnectionOptions
      /**
       * @description typeorm conns option
       */
      clients?: Array<ConnectionOptions>
      /**
       * @description typeorm entity dir
       */
      entities?: Array<EntityDirOptions>
    },
  }
}