'use strict';

var Utility = function() {

  var configFile = require('./e2e.json');

  this.setScreenSize = function() {
    browser.driver.manage().window().maximize();
  };

  this.randomFirstName = function randomEmail(fname) {
    var textw = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    for( var i=0; i < 5; i++ ) {
      textw += possible.charAt(Math.floor(Math.random() * possible.length));
    };

    var res = fname + textw;
    return res;
  };

  this.OpenNewTab = function() {
    browser.actions().sendKeys(protractor.Key.CONTROL +'t').perform();
  };

  this.closeSelectedBrowser = function(windowIndex) {
    browser.getAllWindowHandles().then(function (handles) {
      browser.switchTo().window(handles[windowIndex]).then(function() {
        browser.close();
      });
    });
  };

  this.getString = function(obj, start, len) {
    var stringResult = obj.substr(start, len);
    return stringResult;
  };

  this.autoGenerateEmail = function(local_part, domain_part) {
    var randVal = Date.now();
    var autoGenerateEmail = local_part + randVal + domain_part;
    return autoGenerateEmail;
};

  this.autoGenerateMobile = function(prefix_2digits, length) {
    var autoGenerateMobile = '';
    for (var i = 0; i < (length - 2); i++) {
      autoGenerateMobile += Math.floor(Math.random() *10);
    };
    return prefix_2digits + autoGenerateMobile;
  };

};

module.exports = new Utility();
