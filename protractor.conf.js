'use strict';

let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  onPrepare: function () {
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      }
    }));
    jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
        savePath: './result/',
        screenshotsFolder: 'images'
    }));
  },

  getPageTimeout: 120000,

  capabilities: {
    browserName: 'chrome',
  },

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: [ './spec/log*/lo*.spec.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 260000,
    isVerbose: true,
    includeStackTrace: true
  }

};
