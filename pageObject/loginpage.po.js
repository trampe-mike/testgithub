'use strict';

var LoginPage = function() {

  var configFile = require('../e2e.json');

  this.header = element(by.css('h3.login__title'));
  this.usernameLabel = element(by.css('label[for="username"]'));
  this.passwordLabel = element(by.css('label[for="password"]'));
  this.usernameField = element(by.css('#username'));
  this.passwordField = element(by.css('#password'));
  this.forgotpasswordLink = element(by.css('.login__forgot-password-link'));
  this.loginButton = element(by.css('.cp-btn_login'));

  this.errormessage = element(by.css('.login-error__msg'));
  this.errormessageusername = element(by.css('.login-error_middle'));
  this.errormessagepassword = element(by.css('.login-error_low'));
};

module.exports = new LoginPage();
