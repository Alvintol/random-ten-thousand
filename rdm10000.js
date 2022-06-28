// Generate a list of the integers 1 - 10,000 in random order
// Create IIFE
// Initialize empty state of number list
// Create loop that generates numbers  
// Create random number call
// Create duplicate list number check

// immediately invoked function expression
(() => {
  
  // Initial state of number list 
  const list = [];

  // Variable number length for easier length change
  const maxNum = 10000;

  // Random number generator
  const randomNum = () => Math.ceil(Math.random() * maxNum)

  console.log('start', `\n`, list)

  // Continuous loop that persists while the list of integers is less than desired length
  while (list.length < maxNum) {

    // Locally generated number for each loop instance
    const newNum = randomNum();
    
    // Duplicate integer check in current state of list[]
    if (!list.find(num => num === newNum)) {

    // if krandomly generated number is unique. Add to list
      list.push(newNum)
    }
  }

  console.log(...list, `\n`, 'end' )
})()