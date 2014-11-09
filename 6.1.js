'use strict';

var linkedL = require('./linkedL');

var cities = new linkedL();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Alma", "Russelville");
cities.display();
