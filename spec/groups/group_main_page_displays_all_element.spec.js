'use strict';

describe('Verify Group Main page', function() {

  var GroupsModule = require('../../modules/groups.mo');
  var LoginModule = require('../../modules/login.mo');
  var DashboardModule = require('../../modules/dashboard.mo');
  var Utility = require('../../utilities.js');
  var configFile = require('../../e2e.json');

  it('should setup test specs', function() {
    // set up browser, accounts, etc. make sure env is ready to perform this test
    browser.get(configFile.HTTP_HOST + configFile.LOGIN_PAGE.redirectionUrl);
    Utility.setScreenSize();
    expect(browser.getCurrentUrl()).toBe(configFile.HTTP_HOST + configFile.LOGIN_PAGE.redirectionUrl);
  });

  it('should login to corporate portal', function() {
    LoginModule.setUserField(configFile.SUPER_ADMIN);
    LoginModule.setPasswordField(configFile.SUPER_ADMIN_PASS);
    LoginModule.clickSubmitButton();
    DashboardModule.verifyLoginSuccessful(true);
  });

  it('should navigate to group main page', function() {
    DashboardModule.goToGroupPage();
  });

  it('all elements in the page is displayed', function() {
    GroupsModule.verifyElementsDisplayed();
  });

});
