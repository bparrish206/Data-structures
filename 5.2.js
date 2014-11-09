'use strict';

var Dq = require('./Dq');

var sq = new Dq();

function isPal(str){
  var strL = str.length;
  for (var i = 0; i < strL; i++){
    sq.plus(str[i]);
  }
  console.log(sq.toString());
if (str == sq.toString()){
  console.log("Yes " + str + " is a palindrome");
} else {console.log("No " + str+ " is not a palindrome");}

}

isPal('mooom');
