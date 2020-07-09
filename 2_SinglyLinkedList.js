const LinkedList = require('./1_LinkedList');

function main() {
  /*
    Write a function 'main'.
    Within the function, using the linked list class above,
    create a linked list with the name 'SSL'
    and add the following items to your linked list:
  */
  const SSL = new LinkedList();

  const addItems = [
    "Apollo",
    "Boomer",
    "Helo",
    "Husker",
    "Starbuck"
  ];

  addItems.forEach(i => {
    SSL.insertLast(i);
  });

  // Add 'Tauhida' to the list
  SSL.insertLast("Tauhida");

  // Remove 'Husker' from the list
  SSL.remove("Husker");

  // Implement a function called 'insertBefore()'
  // in the class that inserts a new node
  // before a given node containing a key
  SSL.insertBefore("Boomer", "Athena");

  // Implement a function called 'insertAfter()'
  // in the class that inserts an item
  // at a specific position in the linked list
  SSL.insertAfter("Helo", "Hotdog")
}

main();