'use strict';

describe('Verify Login Details using invalid values unsuccessful', function () {
  var LoginModule = require('../../modules/login.mo');
  var LoginPO = require('../../PageObject/loginpage.po');
  var DashboardModule = require('../../modules/dashboard.mo');
  var Utility = require('../../utilities.js');
  var configFile = require('../../e2e.json');

  it('should setup test specs', function() {
    // set up browser, accounts, etc. make sure env is ready to perform this test
    browser.get(configFile.HTTP_HOST + configFile.LOGIN_PAGE.redirectionUrl);
    Utility.setScreenSize();
    expect(browser.getCurrentUrl()).toBe(configFile.HTTP_HOST + configFile.LOGIN_PAGE.redirectionUrl);
  });

  describe('Blank email', function() {
    it('Enter blank username', function() {
      LoginModule.setUserField('t');
      LoginPO.usernameField.sendKeys(protractor.Key.BACK_SPACE);
      LoginModule.getEmailFieldValue('');
    });

    it('Verify "Username is empty" error message displayed', function() {
      LoginModule.getErrorRequireOnEmail();
    });
  });

  describe('Blank password', function() {
    it('Enter blank password', function() {
      LoginModule.setPasswordField('t');
      LoginPO.passwordField.sendKeys(protractor.Key.BACK_SPACE);
      LoginModule.getPasswordFieldValue('');
    });

    it('Verify "Password is empty" error message displayed', function() {
      LoginModule.getErrorRequireOnPassword();
    });
  });

  describe('Blank email with blank password', function() {
    it('Enter blank username', function() {
      LoginModule.setUserField('t');
      LoginPO.usernameField.sendKeys(protractor.Key.BACK_SPACE);
      LoginModule.getEmailFieldValue('');
    });

    it('Enter blank password', function() {
      LoginModule.setPasswordField('t');
      LoginPO.passwordField.sendKeys(protractor.Key.BACK_SPACE);
      LoginModule.getPasswordFieldValue('');
    });

    it('Verify error messages displayed', function() {
      LoginModule.getErrorRequireOnEmail();
      LoginModule.getErrorRequireOnPassword();
    });
  });

});
