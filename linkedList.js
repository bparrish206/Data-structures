'use strict';


function Node(element){
  this.element = element;
  this.next = null;
}

function linkedL (){
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
  //this.remove = remove;
  this.display = display;
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
  while(!(currNode.next === null)){
    console.log(currNode.next.element);
    currNode = currNode.next;
  }
};

module.exports = linkedL;
