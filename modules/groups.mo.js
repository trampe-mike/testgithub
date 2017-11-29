'use strict';

var GroupModule = function() {

  var GroupMainPO = require('../PageObject/groupmain.po');
  var LoginPO = require('../PageObject/loginpage.po');
  var configFile = require('../e2e.json');

  this.setUserField = function(textvalue) {
    LoginPO.usernameField.clear().sendKeys(textvalue);
  };

  this.getEmailFieldValue = function(textvalue) {
    LoginPO.usernameField.getAttribute('value').then(function(value) {
    expect(value).toEqual(textvalue)});
  };

  this.getErrorRequireOnEmail = function() {
    expect(LoginPO.errormessageusername.isDisplayed()).toBe(true);
    LoginPO.errormessageusername.getText().then(function(text) {
      expect(text).toEqual(configFile.LOGIN_PAGE.errormessage.login_no_username);
    });
  };

  this.verifysuccessOnEmail = function() {
    expect(LoginPO.emailErrorMessage.isDisplayed()).toBe(false);
  };

  this.verifysuccessOnPassword = function() {
    expect(LoginPO.passwordErrorMessage.isDisplayed()).toBe(false);
  };

  this.verifyElementsDisplayed = function() {
    expect(GroupMainPO.breadcrumbs.isDisplayed()).toBe(true);
    expect(GroupMainPO.addgroup.isDisplayed()).toBe(true);
    expect(GroupMainPO.searchgroup.isDisplayed()).toBe(true);

    expect(GroupMainPO.groupban.isDisplayed()).toBe(true);
    expect(GroupMainPO.groupname.isDisplayed()).toBe(true);
    expect(GroupMainPO.groupadmin.isDisplayed()).toBe(true);
    expect(GroupMainPO.groupprofile.isDisplayed()).toBe(true);
    expect(GroupMainPO.groupparentgroup.isDisplayed()).toBe(true);
    expect(GroupMainPO.groupactions.isDisplayed()).toBe(true);
  };

  this.verifySubmitButtonStatus = function(stat) {
    expect(LoginPO.loginButton.isEnabled()).toBe(stat);
  };

  this.clickSubmitButton = function() {
    expect(LoginPO.loginButton.isPresent()).toBe(true);
    LoginPO.loginButton.click();
  };

};

module.exports = new GroupModule();
