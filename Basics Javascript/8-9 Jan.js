let today = "Saturday"
let amount = 3000
let workDone = true
let salary = 0
today = "Saturday"

if (today == "Friday" && workDone == true){
  salary = amount
  console.log(`Today you will be paid ${amount}`)
}

//  we can omit braces around our execution code if there's only one line to execute, otherwise, we need braces. brace {}
if (today == "Friday" && workDone == true) console.log(`Your salary on ${today} is ${amount}`)

let a = `Hello ${today}`;
console.log(a)

let firstName = "John";
let lastName = "Doe";

let text = `Welcome  ${firstName}, ${lastName}!`;
console.log(text)

if (today == "Friday" && workDone == true) {
  salary = amount
  console.log(`Today, you will be paid ${salary}`)
} else if (today == "Saturday"){
  console.log(` I just paid you yesterday`)
}
else {
    console.log(`You will not be paid today!.`)
  
}

// Ternary operator, which is one line conditional statement
// (condition)? ifConditionTrue : otherwise.
// (condition) ? ifConditionTrue : ifConditionFalse.

console.log(today);
// reassign the value of our variable 'today' to 'Friday'
today = 'monday';
isPayDay=(today == "Friday") ? 'Today is payday' : "I'm poor."
console.log(`${isPayDay}`)

//switch cases
switch(today){
  case "Sunday":
    console.log(`Shouldn't you be at church right now?!`)
  break
  case "Monday":
    console.log("It is the begining of the week!")
  break
  case "Tuesday":
    console.log("You already ask me about the salary")
  break
  case "Wednesday":
    console.log("Another day...")
  break
  case "Thursday":
    console.log("One more day before weekend")
  break
  case "Friday":
    console.log(`Today you are paid ${amount}`)
  break
  case "Saturday":
    console.log(`Yesterday you are paid ${amount}`)
  break
  default:
    console.log(`Have you entered the day?`)
  break
}

console.log("////")
console.log("FUNCTION")
//function definition
function greeting(){
  console.log(`Hi, welcome to the class!`)
}

//calling or invoking the function
greeting()

// dayoOfWeek and name are called parameters
function moreGreeting(dayOfWeek,name){
  console.log(`Hi ${name}, welcome to the class on ${dayOfWeek}, happy to have you here!`)
}

//invoke moreGreeint function
moreGreeting('Monday','CharlieBrown')
moreGreeting('Saturday','Trung')

//more functions
function honors(gpa){
  if (gpa > 4.5){
    honors = 'Trung'
  } else {
    honors = `it's not  you Trung. But you learned alot.`
  }
  return honors
}

let aa = honors(4.9) // 4.9 is an arguement, not a parameter
// the console did not show the output or value of honors(4.9), the action of invoke honors(4.9) return the output and store it in the memory.
// to show the value or output of the function honors(4.9), we need to console.log(honors(4.9)). or assign the value of honors(4.9) to another variable,eg, like in this example, the value is assigned to the variable aa, then console.log(aa) will show the value of the function honors(4.9)
console.log(aa)

//1 line function
function anotherGreeting(conterter,showName) {
  console.log(`Welcome ${conterter}, you're are the next contestant on ${showName}`)
}

anotherGreeting('Trinh','MathTest')

function bmi(height,weight) {
  return weight/height**2
}
console.log(bmi(1.70,70))

let bea = anotherGreeting('Bea',"History Test")  //when we assign the value of function another, we also invoke the function
bea
console.log('---')
//  // return undefined because we're trying to console.log(console.log())
console.log('---')
bea
 // since the value of bea contain the function which execute a console.log in the function then calling the variable also executes the function call which in turn executes the console.log()

 function triple(inputValue){
   return 2*inputValue
 }

 function square(inputValue){
   return inputValue*inputValue
 }

 let square_result = square(5)
 let tripple_result = triple(5)
 console.log(square_result)
 console.log(tripple_result)

 console.log("/////")
 console.log("LOOPS")
 console.log("1.FOR LOOP")

let b = 30
for( let i = 13;i<= 29;i++){  //have input, check if input correct, then do action inside {}, then increment, then repeat loop
  console.log(`I have ${i} apples, I need to pick ${b-i} apples more`)
}

console.log(`  /////`)
console.log("2.WHILE LOOP")
// Ctrl+C cancel loop program
let i = 0
while (i < 0){  // have input, check if requirement is true then execute inside {}
  console.log(i)
  i++ //incrementing is very important, without an increment statement, you will get an infinite loop with same value, not incrementing value
}

console.log(`  /////`)
console.log("3.DO .. WHILE LOOP") //execute inside {} first then check the condition, if true, repeat the loop
let t = 0
do {
  console.log("Happy birthday, Mr.President")
  console.log(`b is ${t}`)
} while (t < 0 )

console.log(`  /////`)
console.log("4.BREAK") // break let us run the loop until the counter reach the break value, instead of the condition value

let breakVar = 8
for (let counter = 0; counter < 33; counter++){ // counter = 7, true ~~ counter = 8 , true
  console.log(counter)                          // counter = 7       ~~ counter = 8
  console.log("__")
  if (counter == breakVar) {                    //                   ~~ counter = break = 8 >> stop loop
    break
  }
  console.log(`Why counter go to ${counter}`)  // counter = 7
  console.log(`This is break loop`)  // counter = 7
}                                               // couter +1 = 8, back to the beginning

console.log(`  /////`)
console.log("5.CONTINUE") // continue let us skip the iteration that equal to the value of iteration and run the rest of the loop until it reach the condition


for (let counter = 0; counter < 14; counter++){ // counter = 7, true ~~ counter = 8 , true
  console.log(counter)                          // counter = 7       ~~ counter = 8
  console.log("__")
  if (counter == breakVar) {    //              ~~ counter = continue = 8 = skip  
                                //                 everything from this to the end of the program and  
                                //                 jump to next iteration
    continue
  }
  console.log(`Why counter go to ${counter}`)
  console.log(`This is continue loop`)          // counter = 7 ~~ console.log(counter) doesn't execute 
                                                // counter ++ = 9
}             

console.log(`  /////`)
console.log("5.ARRAY") 
// INDEX IS SINGULAR; indices is plural
// let, const are not global
// var is global, if you inside condition, can be reused outside later
let cars = ['Audi','BMW','Mercedes','Toyota','Volkswagen','Benley']
myFavCar= cars[5]
console.log(myFavCar) // we can overwrite value of the index in this array
cars[5] = 'Volvo'
myFavCar = cars[5]
console.log(myFavCar)


myString = "Saturday"
console.log(myString[1]) // strings are similar to arrays excepts that, for strings, there is one character for each index

multiArray = [1,2,true,'orange',['a','b','c']]
//change 'b' to 'B'
smallArray = multiArray[4]
console.log(smallArray)     //['a','b','c']
console.log(smallArray[1])  // 'b'
small_b = smallArray[1]
big_b = small_b.toUpperCase()
console.log(big_b)          // 'B'
console.log("___")
multiArray[4][1] = "B"
console.log(multiArray)

anotherMultiArray = [0,[1,[2,[3,[4,['We are COBOL genius']]]]]]
console.log(anotherMultiArray[1])   //[ 1, [ 2, [ 3, [Array] ] ] ]
                                    // nodejs shows details of 3 nest array
console.log(anotherMultiArray[1][1])        //[ 2, [ 3, [ 4, [Array] ] ] ]
console.log(anotherMultiArray[1][1][1])     //[ 3, [ 4, [ 'We are COBOL genius' ] ] ]
console.log(anotherMultiArray[1][1][1][1])  //[ 4, [ 'We are COBOL genius' ] ]
console.log(anotherMultiArray[1][1][1][1][1])  //[ 'We are COBOL genius' ]
console.log(anotherMultiArray[1][1][1][1][1][0])//'We are COBOL genius' 
anotherMultiArray[1][1][1][1][1] = 'We are Javascript genius'
console.log(anotherMultiArray[1][1][1][1][1])

// iterate each element of the arrays
for (let i = 0; i < cars.length; i++){
  console.log(`car brand: ${cars[i]}`)
}

function printKeyandValue(key,value){ //callback function
  console.log(value, key)
}
// let cars = ['Audi','BMW','Mercedes','Toyota','Volkswagen','Benley']
cars.forEach(printKeyandValue)
// general structure: arrayName.forEach(callback_function we want to apply to each element)
//callback function is a function that is passed as an arguement for another function
// in this case, printKeyandValue(key,value) is the call back function
// essentially, it's a function used as an arguement for another function
// returns
// Audi 0
// BMW 1
// Mercedes 2
// Toyota 3
// Volkswagen 4
// Volvo 5

console.log("______") 
console.log(" Print out each element in car's array using 'of' syntax")
for (let i of cars){   // i = cars[index]
  console.log(i) // i is the value of the each index that is iterate
}                 // i = "BMW"
console.log("______")

console.log(" Print out each element in car's array using 'in' syntax")
for (let i in cars){   // i is the index that is iterate from the array
  console.log(i) // i = 0 , 1  , 2
  console.log(cars[i]) // BMW, Mercedes
}
// for 'of' = values
// for 'in' = indices

console.log("______")

cars.push("Porsche") // add the item to the last position of the array
console.log(cars)


carVar = cars.pop() // pop is the method which require parentheses () when calling it
                    // remove the last item from the array

console.log(cars) 
console.log(carVar)

L = cars.length // since lenght is a property, it does not take paretheses () after calling it
console.log(L) // lenght of the array

console.log(cars.includes("Volvo")) //true  // if a specific item in the array

// string with "+" operator is called string concatenation , add 2 strings together
// ${variableName} is called string interpolation; more powerful

console.log(`BMW is located in the ${cars.indexOf("BMW")}st index of the array`)

testBrand = "BMW"
// this function will find the index of the specific keyword
function placeintheArray(testBrand, array){
  if (array.indexOf(testBrand) == 0) {
    suffix = 'st'
  } else if (array.indexOf(testBrand) == 1){
    suffix = 'nd'
  } else if (array.indexOf(testBrand) == 2){
    suffix = 'rd'
  } else {
    suffix = "th"
  }
  return `${testBrand} is located in the ${array.indexOf(testBrand)+1}${suffix} index in the array`
}

console.log(placeintheArray(testBrand,cars))

foods = ['smoked deer','SunSide Egg',"Fried Rice","French Fried","Sausage","Smoked Salmon",]

console.log(placeintheArray("SunSide Egg",foods))
sortedFoods = foods.sort()  // sort is a method
                            // array is sorted in alphabet order, upper case letter first, then 
                            // lowercase letter
console.log(sortedFoods)
console.log("______")
let reversedFoods = foods.reverse()
console.log(reversedFoods)

let joinedFoods = foods.join("!@#$%") // join all the elements of the array into one long string
                                      // smoked deer!@#$%SunSide Egg!@#$%Smoked 
                                      // Salmon!@#$%Sausage!@#$%Fried Rice!@#$%French Fried
console.log(joinedFoods)
 