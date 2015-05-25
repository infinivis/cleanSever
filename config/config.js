var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'airforcetreeserver-test'
    },
    port: 3000,
    db: 'mongodb://localhost/airforcetreeserver-test-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'airforcetreeserver-test'
    },
    port: 3000,
    db: 'mongodb://localhost/airforcetreeserver-test-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'airforcetreeserver-test'
    },
    port: 3000,
    db: 'mongodb://localhost/airforcetreeserver-test-production'
  }
};

module.exports = config[env];
