// Generate a list of the integers 1 - 10,000 in random order
// Create IIFE
// Initialize empty state of number list
// Create loop that generates numbers  
// Create random number call


// immediately invoked function expression
(() => {
  
  // Initial state of number list 
  const list = [];

  // Variable number length for easier length change
  const maxNum = 10;
  const randomNum = () => Math.ceil(Math.random() * maxNum)

  console.log('start', `\n`, list)

  while (list.length < maxNum) {
    list.push(list.length + 1)
    console.log(randomNum())
  }

  console.log(...list, `\n`, 'end' )
})()