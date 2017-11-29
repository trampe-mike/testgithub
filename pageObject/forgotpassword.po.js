'use strict';

var ForgotpasswordPage = function() {

  var configFile = require('../e2e.json');

  this.header = element(by.css('h3.dialog__title'));
  this.resetLabel = element(by.css('label[for="resetMode"]'));
  this.emailLabel = element(by.css('label[for="email"]'));
  this.phoneLabel = element(by.css('label[for="email"]'));
  this.emailOption = element(by.css('[type="radio", value="0"]'));
  this.phoneOption = element(by.css('[type="radio", value="1"]'));
  this.emailField = element(by.css('#email'));
  this.phoneField = element(by.css('#phone'));
  this.cancelButton = element(by.css('a[routerlink=" /login "]'));
  this.sendresetLink = element(by.css('.cp-btn__label '));

  this.errormessage = element(by.css('.login-error__msg'));

};

module.exports = new ForgotpasswordPage();
