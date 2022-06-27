// Generate a list of the integers 1 - 10,000 in random order
// Create IIFE
// Initialize empty state of number list
// Create loop that generates numbers  


// immediately invoked function expression
(() => {
  
  // Initial state of number list 
  const list = [];
  const length = 10;
  console.log('start', `\n`, list)

  while (list.length < length) {
    list.push(list.length + 1)
  }

  console.log(...list, `\n`, 'end' )
})()