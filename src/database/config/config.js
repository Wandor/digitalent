/* eslint-disable func-names */
require('dotenv').config();

module.exports = {
  development: {
    server: process.env.SERVER,
    username: process.env.DB_USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.SERVER,
    dialect: process.env.DBTYPE,
    node_env: process.env.NODE_ENV,
    PORT: process.env.PORT,
    requestTimeout: 300000,
    dialectOptions: {
      // for reading from database
      options: {
        instanceName: process.env.INSTANCE_NAME,
        trustServerCertificate: true,
        requestTimeout: 300000,
        useUTC: false,
      },
    },
    logQueryParameters: true,
    logging(str) {
      // do your own logging
      console.log(str);
    },
    // timezone: '+03:00',
    pool: {
      max: 30,
      min: 0,
      acquire: 60000,
      idle: 10000,
    },

  },
  test: {
    server: process.env.SERVER,
    username: process.env.DB_USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.SERVER,
    dialect: process.env.DBTYPE,
    node_env: process.env.NODE_ENV,
    PORT: process.env.PORT,
    dialectOptions: {
      // for reading from database
      options: {
        instanceName: process.env.INSTANCE_NAME,
        trustServerCertificate: true,
        requestTimeout: 300000,
        useUTC: false,
      },
    },
    // logging: true,
    // logQueryParameters: true,
    // eslint-disable-next-line object-shorthand
    logging: function (str) {
      // do your own logging
      console.log(str);
    },
    // timezone: '+03:00',
    pool: {
      max: 30,
      min: 0,
      acquire: 60000,
      idle: 10000,
    },
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.SERVER,
    dialect: process.env.DBTYPE,
    node_env: process.env.NODE_ENV,
    requestTimeout: 300000000,
    dialectOptions: {
      useUTC: false,
      options: {
        useUTC: false, // for reading from database
        requestTimeout: 300000,
      },
    },
    // timezone: '+03:00',
    pool: {
      max: 30,
      min: 0,
      acquire: 60000,
      idle: 10000,
    },
  },
};
