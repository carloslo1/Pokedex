import { DBConfig } from 'ngx-indexed-db';

export const dbConfig: DBConfig  = {
  name: 'MyAppDB',
  version: 1,
  objectStoresMeta: [{
    store: 'users',
    storeConfig: { keyPath: 'email', autoIncrement: true },
    storeSchema: [
      { name: 'email', keypath: 'email', options: { unique: true } },
      { name: 'password', keypath: 'password', options: { unique: false } }
    ]
  }]
};
