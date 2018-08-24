module.exports = function(config) {
    config.set({
      frameworks: ['mocha'],
      files: [
        {pattern: 'main.js'}
      ],
      reporters: ['mocha'],
      client: {captureConsole: true, mocha: {expose: ['body'], timeout: 300000}},
      captureTimeout: 120000,
      reportSlowerThan: 500,
      browserDisconnectTimeout: 600000,
      browserNoActivityTimeout: 300000,
      browserDisconnectTolerance: 0,
      browserSocketTimeout: 60000
    });
  };
  