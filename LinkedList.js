class _Node {
  constructor(value, next){
    this.value = value;
    this.next = next;
  }
}

class _LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item){
    this.head = new _Node(item, this.head);
    console.log(`'${item}' added in FIRST position...`)
    return null;
  }
  insertBefore(key, item){
    if (this.head === null){
      console.log('List is empty')
      return null;
    }
    if (this.head.value === key){
      this.insertFirst(item);
      return null;
    }
    let currNode = this.head.next;
    let prevNode = this.head;

    while(currNode !== null){
      if (currNode.value === key){
        let newNode = new _Node(item);
        newNode.next = prevNode.next;
        prevNode.next = newNode;
        console.log(`'${item}' added BEFORE '${key}'...`)
        return;
      }
      prevNode = currNode;
      currNode = currNode.next;
    }
    console.log('Key not found in this list')
  }
  insertAfter(key, item){
    if (this.head === null){
      console.log('List is empty');
      return null;
    } 
    let currNode = this.head;
    
    while (currNode !== null){
      if (currNode.value === key){
        let newNode = new _Node(item);
        newNode.next = currNode.next;
        currNode.next = newNode;
        console.log(`'${item}' added AFTER '${key}'...`)
        return null;
      }
      currNode = currNode.next;
    }
    console.log(`Key ${key} not found in list`)
  }
  insertAt(index, item){
    let position = 0;
    let currNode = this.head;
    let prevNode = this.head;

    while (position < index){
      prevNode = currNode;
      currNode = currNode.next;
      position++;
    }
		console.log(`'${item}' added AT node ${index}...`)
		this.insertBefore(currNode.value, item);
  }
  insertLast(item){
    if (this.head === null) {
      this.insertFirst(item)
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null){
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
    console.log(`'${item}' added in LAST position...`)
  }

  find(item) {
    let currNode = this.head;

    if (!this.head) {
      console.log('List is empty')
      return null;
    }

    while (currNode.value !== item){
      if (currNode.next === null) {
        console.log('Item not found...')
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    console.log(`${item} FOUND`)
    return currNode;
  }

  remove(item) {
    if (!this.head){
      return null;
    }

    if (this.head.value === item){
      this.head = this.head.next;
      return;
    }

    let currNode = this.head;
    let prevNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)){
      prevNode = currNode;
      currNode = currNode.next;
    }

    if (currNode === null) {
      console.log('Item not found');
      return;
    }

    console.log(`\n'${item}' REMOVED`)
    prevNode.next = currNode.next;
  }

  display() {
    if (this.head === null){
      console.log('List is empty');
      return null;
    } else {
      let currNode = this.head;
      let nodeArr = [];

      while (currNode !== null){
        currNode.next === null
          ? nodeArr.push(`${currNode.value}`)
          : nodeArr.push(`${currNode.value} ->`);
        currNode = currNode.next;
      }
      console.log(`\nDISPLAY list values:\n\t${nodeArr}`);
      return nodeArr;
    }
  }
  size(){
    let count = 0;
    let currNode = this.head;

    while (currNode !== null){
      count++;
      currNode = currNode.next;
    }
    console.log(`\nList SIZE: ${count}`)
    return count;
  }
  isEmpty(){
    if (this.head === null){
      console.log('List is empty')
      return true;
    } else {
      console.log('List is NOT empty')
      return false;
    }
  }
  findPrevious(key){
    if (this.head === null){
      console.log('Linked list is empty');
      return null;
    } else {
      if (this.head.value === key){
        console.log('This is the first item, and therefore cannot return a previous value');
        return null;
      } else {
        let currNode = this.head.next;
        let prevNode = this.head;

        while (currNode !== null){
          if (currNode.value === key){
            console.log(`\nPREVIOUS value to '${key}' found: ${prevNode.value}`)
            return prevNode;
          }
          prevNode = currNode;
          currNode = currNode.next;
        }
      }
    }
    console.log(`The key '${key}' does not exist in this list`);
    return null;
  }

  findLast() {
    if (this.head === null){
      return this.isEmpty();
    } else {
      let currNode = this.head;
      
      while (currNode.next !== null){
        currNode = currNode.next;
      }

      console.log(`\nLAST node in the list: ${currNode.value}`)
      return currNode;
    }
  }

  reverseList(list){
    if (this.head === null){
      console.log('List is empty');
      return null;
    }
    let nextNode = this.head.next;
    let followingNode;
    let currNode = this.head;

    currNode.next = null;

    while (nextNode !== null){
      followingNode = nextNode.next;
      nextNode.next = currNode;
      currNode = nextNode;
      nextNode = followingNode;
    }
    this.head = currNode;
    console.log(`\nREVERSED list`)
  }

  thirdFromTheEnd(){
    if (this.head === null){
      console.log('List is empty');
      return null;
    }
    
    let currNode = this.head;
    
    if (currNode.next === null || currNode.next.next === null){
      console.log('List is not long enough');
      return null;
    }

    currNode = this.findPrevious(this.findPrevious(this.findLast().value).value).value;

    console.log(`\nTHIRD node from the end: ${currNode}`);
    return currNode;
  }

  middle() {
    if (this.head === null){
      console.log("List is empty");
      return null;
    }

    let size = this.size();
    let currNode = this.head;

    if (size % 2 === 0) {
      let bothMid = [];

      for (let i = 0; i <= Math.floor(size/2); i++){
        if (i === Math.floor(size/2)-1 || i === Math.floor(size/2)){
          bothMid.push(currNode.value);
        }
        currNode = currNode.next;
      }
      console.log(`Even: MIDDLE values are ${bothMid[0]} & ${bothMid[1]}`)
      return bothMid;
    } else {
      for (let i = 0; i < Math.floor(size/2); i++){
        currNode = currNode.next;
      }
      console.log(`Odd: MIDDLE value is ${currNode.value}`);
      return currNode;
    }
  }

  cycleList() {
    let currNode = this.head;
    let nextNode = this.head;

    while (currNode && nextNode && nextNode.next){
      currNode = nextNode.next;
      nextNode = nextNode.next.next;

      if (currNode === nextNode){
        console.log('CYCLE detected');
        return true;
      }
    }
    console.log('No CYCLE detected');
    return false;
  }
}


// CREATE A SINGLY LINKED LIST
function main() {
  // Within the function, using the linked list class above,
  // create a linked list with the name 'SSL'
  const SSL = new _LinkedList();

  // and add the following items to your linked list:
  const addItems = [
    "Apollo",
    "Boomer",
    "Helo",
    "Husker",
    "Starbuck"
  ];

  addItems.map(i => {
    SSL.insertLast(i);
  });
  SSL.display();

  // Add 'Tauhida' to the list
  SSL.insertLast("Tauhida");
  SSL.display();

  // Remove 'Husker' from the list
  SSL.remove("Husker");
  SSL.display();

  // Implement a function called 'insertBefore()'
  // in the class that inserts a new node
  // before a node containing a given key
  SSL.insertBefore("Boomer", "Athena");
  SSL.display();

  // Implement a function called 'insertAfter()'
  // in the class that inserts a new node
  // after a  node containing a given key
  SSL.insertAfter("Helo", "Hotdog")
  SSL.display();

  // Implement a function called 'insertAt()'
  // in the class that inserts an item
  // at a specific position in the linked list
  SSL.insertAt(3, "Kat");
  SSL.display();

  // Remove 'Tauhida' from the list
  SSL.remove("Tauhida")
  SSL.display();


  // SUPPLEMENTAL FUNCTIONS FOR A LINKED LIST
  SSL.display();
  SSL.size();
  SSL.isEmpty();
  SSL.findPrevious("Helo");
  SSL.findLast();

  // MYSTERY PROGRAM
  /*
    function WhatDoesThisProgramDo(lst) {
      let current = lst.head;
      while (current !== null) {
        let newNode = current;
        while (newNode.next !== null) {
          if (newNode.next.value === current.value) {
            newNode.next = newNode.next.next;
          }
          else {
            newNode = newNode.next;
          }
        }
        current = current.next;
      }
    }
  */
  // This program parses the linked list searching
  // for nodes with duplicate values placed next
  // to each other. If found, it makes the pointer
  // aim to the next in line, effectively removing
  // any duplicates.

  // Linear O(n) complexity


  // REVERSE A LIST
  SSL.reverseList(SSL);
  SSL.display();

  // 3rd FROM THE END
  SSL.thirdFromTheEnd();
  
  // MIDDLE OF A LIST
  SSL.middle(); // even output
  SSL.remove("Boomer");
  SSL.middle(); // odd output

  //CYCLE IN A LIST
  console.log('\n\n--- CYCLE LIST ---\n')
  const CycleList = new _LinkedList();
  
  addItems.map(i => {
    CycleList.insertLast(i);
  });
  CycleList.display();
  CycleList.cycleList();
}

main();