

function Node(element){
  this.element = element;
  this.next = 0;
}

function linkedL (){
  this.head = new Node("head");
}

linkedL.prototype.find = function (item){
  var currNode = this.head;
  while (currNode.element != item){
    currNode = currNode.next;
  }
  return currNode.next;
};

linkedL.prototype.insert = function (newElement, item){
  var newNode = new Node(newElement);
  var current = this.find(item);
  newNode.next = current.next;
  current.next = newNode;
};

linkedL.prototype.display = function(){
  var currNode = this.head;
  while(!(currNode.next == null)){
    console.log(currNode.next.element);
    currNode = currNode.next;
  }
};

linkedL.prototype.findPrevious = function(item){
  var currNode = this.head;
  while(!(currNode.next == null) &&
    (currNode.next.element != item)) {
      currNode = currNode.next;
    }
    return currNode;
};

linkedL.prototype.remove = function(item){
  var prevNode = this.findPrevious(item);
  if (!(prevNode.next == null)){
    prevNode.next = prevNode.next.next;
  }
};


module.exports = linkedL;
