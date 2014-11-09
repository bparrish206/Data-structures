'use strict';

var linkedL = require('./linkedL');

var cirlist = new linkedL();

cirlist.prototype.head.next = this.head;

module.exports = cirlist;
