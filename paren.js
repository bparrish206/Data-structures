var Stack = require('stack');

function findParen(nums){
  var s = new Stack();
  var tracker =[];
  for (var i = 0; i < nums.length; i++ ){
    s.push(nums[i]);
  }
  var open = nums.indexOf('(');
  while(open != -1){
  tracker.push(open);
  open = nums.indexOf('(', open +1);
}

  var close = nums.indexOf(')');
  while(close != -1){
    tracker.push(close);
    close = nums.indexOf(')' +1);
  }
  console.log("The unmatched paren is at index " + tracker[tracker.length -1]);
}

findParen('3(3295(28)');
