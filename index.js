// Task 1: Print Numbers
// Write a JavaScript program that uses a for loop to print all numbers from 1 to 10 to the console.
for(let i = 1; i < 10; i++){
  console.log(i)
}




// Task 2: Odd Numbers
// Write a JavaScript program that uses a for loop to print all odd numbers from 15 to 40 to the console.
for(let a = 15; a < 40;){
  console.log(a)
  a += 2
}



// Task 3: Sum of Numbers
// Write a JavaScript program that calculates and prints the sum of all numbers from 10 to 20 using a for loop.
for(let b = 10; b < 20; b++){
  console.log(b)
  b += 1
}





// Task 4: Array Iteration
// Create an array of numbers (e.g., [1, 2, 3, 4, 5]) and write a JavaScript program that uses a for loop to iterate through the array and print each element to the console.

let array = [1, 2, 3, 4, 5]
for(let c = 0; c < array.length; c++){
  console.log(array[c])
}


// Task 5: Array Sum
// Create an array of numbers and write a JavaScript program that calculates and prints the sum of all the elements in the array using a for loop.
let array2 = [1, 2, 3, 4, 5]
let sum = 0
for(let d = 0; d < array2.length; d++){
  console.log(array2[d])
  sum += array2[d]
  console.log(sum)
}







// Stretch: Element counter
// Create an array of numbers
// Prompt the user for a number and write a for loop that tracks how many times that number is in the array
// e.g. 5 for [5, 1, 2, 5] --> 2

let array3 = [1, 2, 3, 4, 5]
let num = prompt("Enter a number:")
let count = 0
for(let e = 0; e < array3.length; e++){
  console.log(array3[e])
  if(array3[e] == num){
    count += 1
    console.log(count)
    
  
  }
}




