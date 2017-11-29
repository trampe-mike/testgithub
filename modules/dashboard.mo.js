'use strict';

var DashboardModule = function() {

  var DashboardPO = require('../PageObject/dashboard.po');
  var configFile = require('../e2e.json');

  this.goToGroupPage = function() {
    expect(DashboardPO.groupsLink.isPresent()).toBe(true);
    DashboardPO.groupsLink.click();
  };

  this.verifyLoginSuccessful = function(status) {
    expect(DashboardPO.userdisplayed.isPresent()).toBe(status);
  };

  this.setUserField = function(textvalue) {
    LoginPO.usernameField.clear().sendKeys(textvalue);
  };

  this.setPasswordField = function(textvalue) {
    LoginPO.passwordfield.clear().sendKeys(textvalue);
  };

  this.getEmailFieldValue = function(textvalue) {
    LoginPO.usernameField.getAttribute('value').then(function (value) {
    expect(value).toEqual(textvalue)});
  };

  this.getPasswordFieldValue = function(textvalue) {
    LoginPO.passwordfield.getAttribute('value').then(function (value) {
    expect(value).toEqual(textvalue)});
  };

  this.getErrorRequireOnEmail = function() {
    expect(LoginPO.emailerrormessage.isDisplayed()).toBe(true);
    LoginPO.emailerrormessage.getText().then(function (text) {
      expect(text).toEqual(configFile.ERROR_MESSAGES.LoginPage.emailRequired);
    });
  };

  this.getErrorValidOnEmail = function() {
    expect(LoginPO.emailerrormessage.isDisplayed()).toBe(true);
    LoginPO.emailerrormessage.getText().then(function (text) {
      expect(text).toEqual(configFile.ERROR_MESSAGES.LoginPage.emailValid);
    });
  };

  this.getErrorRequireOnPassword = function() {
    expect(LoginPO.emailerrormessage.isDisplayed()).toBe(true);
    LoginPO.emailerrormessage.getText().then(function (text) {
      expect(text).toEqual(configFile.ERROR_MESSAGES.LoginPage.passwordRequired);
    });
  };

  this.verifysuccessOnEmail = function() {
    expect(LoginPO.emailerrormessage.isDisplayed()).toBe(false);
  };

  this.verifysuccessOnPassword = function() {
    expect(LoginPO.emailerrormessage.isDisplayed()).toBe(false);
  };

  this.verifyElementsDisplayed = function() {
    expect(LoginPO.titleheader.isDisplayed()).toBe(true);
    expect(LoginPO.descriptionheader.isDisplayed()).toBe(true);
    expect(LoginPO.loginheader.isDisplayed()).toBe(true);
    expect(LoginPO.emailfield.isDisplayed()).toBe(true);
    expect(LoginPO.passwordfield.isDisplayed()).toBe(true);
    expect(LoginPO.forgethassword.isDisplayed()).toBe(true);
    expect(LoginPO.loginbutton.isDisplayed()).toBe(true);
    expect(LoginPO.logo.isDisplayed()).toBe(true);
  };

  this.verifySubmitButtonStatus = function(stat) {
    expect(LoginPO.loginbutton.isEnabled()).toBe(stat);
  };

  this.clickSubmitButton = function() {
    LoginPO.loginbutton.click();
  };

};

module.exports = new DashboardModule();
