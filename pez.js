var Stack = require('stack');

function pezSort(pezD){
  var red = new Stack();
  var yellow = new Stack();
  var white = new Stack();
  var newList = [];

  for (var i =0; i < pezD.length; i++){
    if (pezD[i] == 'red'){
      red.push(pezD[i]);
    }
    else if (pezD[i] == 'yellow'){
      yellow.push(pezD[i]);
    }
    else {white.push(pezD[i]);}
  }
  var rt = red.top;
  var wt = white.top;
  var top = function(rt, wt){
    if (rt > wt){
      return rt;
    } else {return wt;}
  };

  for (var j = 0; j < top(); j++){
      newList.push(red.dataStore[j]);
      newList.push(white.dataStore[j]);
  }

  console.log("The new list w/out no dang yellow! " + newList);
  return newList;
}

var mstrPez = ['red', 'red', 'yellow', 'white', 'white', 'red', 'yellow', 'white'];
pezSort(mstrPez);
