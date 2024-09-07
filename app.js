//TASK 2 SAMPLE CODE

console.log("Hello, World!");
let name = "Alyssa Faye Quidangen";
console.log("My name is " + name);
//output: Hello, World! My name is Alyssa Faye Quidangen

//TASK 4

//VARIABLES

let age = 18;
console.log("I am " + age + " years old");
// output: I am 18 years old

let course = ("Bachelor of Science in Computer Science");
console.log("My course is " + course);
//output: My course is Bachelor of Science in Computer Science

let section = ("BSCS 2A"); 
console.log("My section is " + section);
//output: My section is BSCS 2A

const food = ("shanghai");
console.log("My favorite food is " + food)
//output: My favorite food is shanghai

let hobbies = ["reading","writing", "listening to music"]
console.log("My hobbies: " + hobbies)
//output: My hobbies: reading,writing,listening to music

//NUMBERS

//Addition
let num1 = 143;
let num2 = 121;
let sum = num1 + num2;
console.log("The sum of " + num1 + " and " + num2 + " is equal to " + sum);
//output: The sum of 143 and 121 is equal to 264

//Subtraction
const Num1 = 500;
const Num2 = 100;
const difference = Num1 - Num2;
console.log("The difference of " + Num1 + " and " + Num2 + " is equal to " + difference);
//output: The difference of 500 and 100 is equal to 400

//Multiplication
const Number1 = 12;
const Number2 = 25;
const product = Number1 * Number2;
console.log("The product of " + Number1 + " and " + Number2 + " is equal to " + product);
//output: The product of 12 and 25 is equal to 300

//Division
const favNumber1 = 10000;
const favNumber2 = 2;
const quotient = favNumber1 / favNumber2;
console.log("The quotient of " + favNumber1 + " and " + favNumber2 + " is equal to " + quotient);
// output: The quotient of 10000 and 2 is equal to 5000

let randNumber1 = 125;
let randNumber2 = 4;
let modulus = randNumber1 % randNumber2;
console.log("The remainder of " + randNumber1 + " and " + randNumber2 + " is " + modulus);
//output: The remainder of 125 and 4 is 1

let anNumber1 = 10;
let anNumber2 = 2;
let exponentiation = anNumber1 ** anNumber2;
console.log(anNumber1 + " raised to the power of " + anNumber2 + " is equal to " + exponentiation);
//output: 10 raised to the power of 2 is equal to 100

//BOOLEANS

let a = 5;
let b = 10;

let isLess = a > b;
let isGreater = a < b;
let isEqual = a == b;
let isNotEqual = a != b;
console.log(isLess); // output: false
console.log(isGreater); // output: true
console.log(isEqual); //output: false
console.log(isNotEqual); //output: true

let isPresent = true;
let isAbsent = false;
console.log(isPresent); //output: true
console.log(isAbsent); //output: false

let j;
console.log(Boolean(j));
//output: false //undefined

let isComplete = 10 > 9;
let isIncomplete = 20 < 10;
console.log(Boolean(isComplete)); //output: true
console.log(Boolean(isIncomplete)); // output: false

//COMPARISON

let c = 20;
let d = 19;
let e = 30;

let isCGreaterThanD = c > d;
let isCLessThanD = c < d;
let isCEqualToD = c == d;
let isCNotEqualToD = c !== d;
let isCGreaterThanOrEqualToD = c >= d;
let isCLessThanOrEqualToD = c <= d;
let isCGreaterThanE = c > e;
let isCLessThanE = c > e;
let isDGreaterThanE = c > e;
let isDLessThanE = c > e;

console.log("Is C greater than D?", isCGreaterThanD);
console.log("Is C less than D?", isCLessThanD);
console.log("Is C equal to D?", isCEqualToD);
console.log("Is C not equal to D?", isCNotEqualToD);
console.log("Is C greater than or equal to D?", isCGreaterThanOrEqualToD);
console.log("Is C less than or equal to D?", isCLessThanOrEqualToD);
console.log("Is C greater than E?", isCGreaterThanE);
console.log("Is C less than E?", isCGreaterThanE);
console.log("Is D greater than E?", isCGreaterThanE);
console.log("Is D less than E?", isCGreaterThanE);

//output:
//Is C greater than D? true
//Is C less than D? false
//Is C equal to D? false
//Is C not equal to D? true
//Is C greater than or equal to D? true
//Is C less than or equal to D? false
//Is C greater than E? false
//Is C less than E? false
//Is D greater than E? false
//Is D less than E? false



