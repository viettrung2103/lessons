//1. E1: My first JS function
// Write a function that returns the sum of three numbers.
console.log("__")
console.log("E1")
function sumOfThree(a,b,c){
  return a+b+c
}
let sum = sumOfThree(10,20,30)
console.log(sum)

console.log("__")
console.log("E1")
// 2. E2: My first JS loop
// Write a program that will output (in the console) the numbers from 10 to 20.
// Do it using for, while and do-while loops.
console.log("__")
console.log("E2")
console.log("2.1")
console.log("FOR")
let b = 20
for (let a = 10; a <= b; a++){
  console.log(a)
}
console.log("WHILE")
let a = 10
while ( a <= b){
  console.log(a)
  a++
}
console.log("DO.. WHILE")
let c = 10
do{
  console.log(c)
  c++
} while( c <= b)
// Modify one of your loops so that your program will output only even numbers.
console.log("__")
console.log("2.2")
let d = 0
for (let a = 10; a <= b; a++){
  if (a % 2 == 0){
     d = a
     console.log(d)
  }
  
}
// Modify your code again so that it becomes a function with two arguments, determining range of numbers to output (from a to b).
console.log("__")
console.log("2.3")
function printEvenNums(start,end){
  for (let i = start; i <= end; i++){
    if (i % 2 == 0){
      let t = i
      console.log(t)
    }
  }
}

printEvenNums(0,35)
console.log("__")
console.log("E3")
// . E3: My first JS array
// Create an array containing 10 numbers.
console.log("_____")
console.log("3.1")
numbers = [0,1,2,3,4,5,6,7,8,9]
console.log(numbers)
// Remove the last element from the array and log it to the console.
console.log("_____")
console.log("3.2")
lastnum = numbers.pop()
console.log(lastnum)
// Add a new element to the end of the array.
console.log("_____")
console.log("3.3")
numbers.push(10)
console.log(numbers)
// Change the value of the array's second element to zero.
console.log("_____")
console.log("3.4")
numbers[1] = 0
console.log(numbers)
// Use a loop to change the value of every third element of the array to one.
console.log("_____")
console.log("3.5")
let counter = 1
while (counter <= numbers.length){
  if (counter % 3 == 0){
    let index = counter -1
    numbers[index] = 1
    console.log(numbers)
    counter++
  } else {
    counter++
  }  
}
console.log(numbers)
// After each of the operations, output your whole array to the console to see what happens