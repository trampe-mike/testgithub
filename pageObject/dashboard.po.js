'use strict';

var DashboardPage = function() {

  var configFile = require('../e2e.json');

  this.header = element(by.css('h3.dialog__title'));

  //MENU
  this.dashboardLink = element(by.css('a[routerlink="/dashboard"]'));
  this.groupsLink = element(by.css('a[routerlink="/groups"]'));
  this.profilesLink = element(by.css('span.nav__icon_profile'));
  this.manageprofilesLink = element(by.css('a[routerlink="/profiles"]'));
  this.managelistLink = element(by.css('a[routerlink="/bw-lists"]'));
  this.subscriptionsLink = element(by.css('a[routerlink="/subscriptions"]'));
  this.applicationusersLink = element(by.css('a[routerlink="/application-users"]'));

  this.breadcrumbs = element(by.css('.breadcrumbs'));
  this.userdisplayed = element(by.css('.current-user'));

  this.changepassword = element(by.css('a[routerlink="/change-password"]'));
  this.logout = element(by.cssContainingText('.dropdown-item', 'Log out'));

  this.errormessage = element(by.css('.login-error__msg'));

};

module.exports = new DashboardPage();
