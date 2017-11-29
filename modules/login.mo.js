'use strict';

var LoginModule = function() {

  var LoginPO = require('../PageObject/loginpage.po');
  var configFile = require('../e2e.json');

  this.setUserField = function(textvalue) {
    LoginPO.usernameField.clear().sendKeys(textvalue);
  };

  this.setPasswordField = function(textvalue) {
    LoginPO.passwordField.clear().sendKeys(textvalue);
  };

  this.getEmailFieldValue = function(textvalue) {
    LoginPO.usernameField.getAttribute('value').then(function(value) {
    expect(value).toEqual(textvalue)});
  };

  this.getPasswordFieldValue = function(textvalue) {
    LoginPO.passwordField.getAttribute('value').then(function(value) {
    expect(value).toEqual(textvalue)});
  };

  this.getErrorRequireOnEmail = function() {
    expect(LoginPO.errormessageusername.isDisplayed()).toBe(true);
    LoginPO.errormessageusername.getText().then(function(text) {
      expect(text).toEqual(configFile.LOGIN_PAGE.errormessage.login_no_username);
    });
  };

  this.getErrorValidOnEmail = function() {
    expect(LoginPO.errormessage.isDisplayed()).toBe(true);
    LoginPO.errormessage.getText().then(function(text) {
      expect(text).toEqual(configFile.LOGIN_PAGE.errormessage.login_invalid);
    });
  };

  this.getErrorRequireOnPassword = function() {
    expect(LoginPO.errormessagepassword.isDisplayed()).toBe(true);
    LoginPO.errormessagepassword.getText().then(function(text) {
      expect(text).toEqual(configFile.LOGIN_PAGE.errormessage.login_no_password);
    });
  };

  this.verifysuccessOnEmail = function() {
    expect(LoginPO.emailerrormessage.isDisplayed()).toBe(false);
  };

  this.verifysuccessOnPassword = function() {
    expect(LoginPO.passworderrormessage.isDisplayed()).toBe(false);
  };

  this.verifyElementsDisplayed = function() {
    expect(LoginPO.header.isDisplayed()).toBe(true);
    expect(LoginPO.usernameLabel.isDisplayed()).toBe(true);
    expect(LoginPO.passwordLabel.isDisplayed()).toBe(true);
    expect(LoginPO.usernameField.isDisplayed()).toBe(true);
    expect(LoginPO.passwordField.isDisplayed()).toBe(true);
    expect(LoginPO.forgotpasswordLink.isDisplayed()).toBe(true);
    expect(LoginPO.loginButton.isDisplayed()).toBe(true);
  };

  this.verifySubmitButtonStatus = function(stat) {
    expect(LoginPO.loginButton.isEnabled()).toBe(stat);
  };

  this.clickSubmitButton = function() {
    expect(LoginPO.loginButton.isPresent()).toBe(true);
    LoginPO.loginButton.click();
  };

};

module.exports = new LoginModule();
