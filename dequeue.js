'use strict';

var Dq = function() {
  this.dataStore = [];
};

Dq.prototype.plus = function(element) {
  this.dataStore.unshift(element);
};

Dq.prototype.pop = function() {
  return this.dataStore.pop();
};

modules.exports = Dq;
