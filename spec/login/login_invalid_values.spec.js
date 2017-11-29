'use strict';

describe('Verify Login Details using invalid values unsuccessful', function() {
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

  describe('Invalid Email with valid password', function() {
    it('Enter invalid username', function() {
      LoginModule.setUserField('this_is_not_a_correct_email');
      LoginModule.getEmailFieldValue('this_is_not_a_correct_email');
    });

    it('Enter valid password', function() {
      LoginModule.setPasswordField(configFile.SUPER_ADMIN_PASS);
      LoginModule.getPasswordFieldValue(configFile.SUPER_ADMIN_PASS);
    });

    it('Click Login', function() {
      LoginModule.clickSubmitButton();
    });

    it('Verify "Invalid username/password" error message displayed', function() {
      LoginModule.getErrorValidOnEmail();
    });
  });

  describe('Valid Email with invalid password', function() {
    it('Enter valid username', function() {
      LoginModule.setUserField(configFile.SUPER_ADMIN);
      LoginModule.getEmailFieldValue(configFile.SUPER_ADMIN);
    });

    it('Enter invalid password', function() {
      LoginModule.setPasswordField('notapassword');
      LoginModule.getPasswordFieldValue('notapassword');
    });

    it('Click Login', function() {
      LoginModule.clickSubmitButton();
    });

    it('Verify "Invalid username/password" error message displayed', function() {
      LoginModule.getErrorValidOnEmail();
    });
  });

  describe('Invalid Email with invalid password', function() {
    it('Enter valid username', function() {
      LoginModule.setUserField('this_is_not_a_correct_email');
      LoginModule.getEmailFieldValue('this_is_not_a_correct_email');
    });

    it('Enter invalid password', function() {
      LoginModule.setPasswordField('notapassword');
      LoginModule.getPasswordFieldValue('notapassword');
    });

    it('Click Login', function() {
      LoginModule.clickSubmitButton();
    });

    it('Verify "Invalid username/password" error message displayed', function() {
      LoginModule.getErrorValidOnEmail();
    });
  });

});
