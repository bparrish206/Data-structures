
var linkedL = require('./linkedL');

function Node(element){
  this.element = element;
  this.next = 0;
}

var dlist = new linkedL;

Node.prototype.previous = null;

dlist.prototype.insert = function(item){
  var newNode = new Node(Element);
  var current = this.find(item);
  newNode.next = current.next;
  newNode.previous = current;
  current.next = newNode;
};

dlist.prototype.remove = function(item){
  var currNode = this.find(item);
  if (!(currNode.next == null)){
    currNode.previous.next = currNode.next;
    currNode.next.previous = currNode.previous;
    currNode.next = null;
    currNode.previous = null;
  }
};

dlist.prototype.findLast = function(){
  var currNode = this.head;
  while(!(currNode.next == null)) {
    currNode = currNode.next;
  }
  return currNode;
};

dlist.prototype.dispReverse(){
  var currNode = this.head;
  currNode = this.findLast();
  while(!(currNode.previous == null)){
    console.log(currNode.element);
    currNode = currNode.previous;
  }
}



module.exports = dlist;
