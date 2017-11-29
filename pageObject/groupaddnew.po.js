'use strict';

var GroupMainPage = function() {

  var configFile = require('../e2e.json');

  this.breadcrumbs = element(by.css('div.breadcrumbs'));

  //group list table
  this.groupban = element(by.css('.cp-table__cell_ban'));
  this.groupname = element(by.css('.cp-table__cell_name'));
  this.groupadmin = element(by.css('.cp-table__cell_admin'));
  this.groupprofile = element(by.css('.cp-table__cell_profile'));
  this.groupparentgroup = element(by.css('.cp-table__cell_parent'));
  this.groupactions = element(by.css('.cp-table__cell_actions'));

};

module.exports = new GroupMainPage();
