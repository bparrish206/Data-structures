'use strict';

var Dq = function() {
  this.dataStore = [];
};

Dq.prototype.plus = function(element) {
  return this.dataStore.unshift(element);
};

Dq.prototype.pop = function() {
  return this.dataStore.pop();
};

Dq.prototype.toString = function () {
  return this.dataStore.join('');
};

module.exports = Dq;
