'use strict';

describe('Verify Login Details for successfull login', function() {
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

  it('Verify all elements in the page is displayed', function() {
    LoginModule.verifyElementsDisplayed();
  });

  it('Enter valid username', function() {
    LoginModule.setUserField(configFile.SUPER_ADMIN);
    LoginModule.getEmailFieldValue(configFile.SUPER_ADMIN);
  });

  it('Enter valid password', function() {
    LoginModule.setPasswordField(configFile.SUPER_ADMIN_PASS);
    LoginModule.getPasswordFieldValue(configFile.SUPER_ADMIN_PASS);
  });

  it('Click Login', function() {
    LoginModule.clickSubmitButton();
  });

  it('Verify Login Successfully', function() {
    DashboardModule.verifyLoginSuccessful(true);
  });

});
