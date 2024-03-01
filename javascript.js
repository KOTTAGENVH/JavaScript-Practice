console.log("first js program");

let a = 5
let b = '5'
let c = 5
console.log(a + c)
console.log(a == b)
console.log(a + b)
console.log(a === b)

console.log("second js program");

let d = 5
const e = 5
const array = [a, b, c];

const arr = [4, 5, 'hello'];

const addout = (...arr) => console.log(arr[0] + arr[1], arr[2]);

addout(...arr);

console.log("third js program (map)");

const f = [1, 2, 3, 4, 5]

// Create a new array which multiplies every element by 2

const g = f.map(function (item) { return item * 2 })

console.log(g) // [2,4,6,8,10]


console.log("forth js program(palindrome)");

const palindrome = (str) => {
    const str1 = str.split('').reverse().join('');
    console.log("Non modified", str);
    console.log("Modified", str1);
}

palindrome('madams');


console.log("fifth js program(filter)");

// Return the words with more than 6 letters
const words = ['react', 'script', 'interview', 'style', 'javascript']

const ans = words.filter((word) => word.length > 6)
const spec = words.filter((word) => word == "javascript")
console.log(ans) // ['interview', 'javascript']
console.log(spec) // ['javascript']

let newArr = []

for (let i = 0; i < words.length; i++) {
    if (words[i].length > 6) {
        newArr.push(words[i])
    }
}
console.log(newArr)

console.log("sixth js program (reduce)");

const numbers = [1, 2, 3, 4, 5]

// Sum all the numbers in the array
const sum = numbers.reduce((acc, curr) => acc + curr, 0)
console.log(sum) // 15

console.log("seventh js program (find)");

const numbers1 = [1, 2, 3, 4, 5]

// Find the first number greater than 3
const ans1 = numbers1.find((item) => item > 3)
console.log(ans1) // 4

console.log("eighth js program (findIndex)");

const numbers2 = [1, 2, 3, 4, 5]

// Find the index of the first number greater than 3
const ans2 = numbers2.findIndex((item) => item > 3)
console.log(ans2) // 3

console.log("ninth js program (some)");

const numbers3 = [1, 2, 3, 4, 5]

// Check if some number is greater than 3
const ans3 = numbers3.some((item) => item > 3)
console.log(ans3) // true

console.log("tenth js program (every)");

const numbers4 = [1, 2, 3, 4, 5]

// Check if every number is greater than 3
const ans4 = numbers4.every((item) => item > 3)
console.log(ans4) // false

console.log("eleventh js program (includes)");

const numbers5 = [1, 2, 3, 4, 5]

// Check if the array includes 3
const ans5 = numbers5.includes(3)
console.log(ans5) // true

console.log("twelveth js program (flat)");

const numbers6 = [1, 2, 3, [4, 5]]

// Flatten the array
const ans6 = numbers6.flat()
console.log(ans6) // [1,2,3,4,5]

console.log("thirteenth js program (flatMap)");

const numbers7 = [1, 2, 3, 4, 5]

// Flatten the array and multiply each element by 2
const ans7 = numbers7.flatMap((item) => item * 2)
const ans23 = number7.map((utem) => item * 2)
const ans24 = function () {
    return number7.map(function (item) {
        return item * 2;
    });
};
console.log(ans7) // [2,4,6,8,10]

console.log("fourteenth js program (sort)");

const numbers8 = [1, 2, 3, 4, 5]

// Sort the array
const ans8 = numbers8.sort((a, b) => b - a)
console.log(ans8) // [1,2,3,4,5]

console.log("fifteenth js program (forEach)");
// Return a new array where even numbers are multiplied by 2 
let arrs = [1, 2, 3, 4, 5, 6, 7]

function consoleEven(arr) {
    let data = arrs.map((num) => (num % 2 === 0 ? num * 2 : num * 1))

    console.log(data)  // [1,  4, 3, 8, 5, 12, 7]
}


// ? is the ternary operator. If the condition is true - first statement is returned otherwise the second one.


consoleEven(arrs)


function consoleEven(arrs) {
    let data = arrs.forEach((num) => (num % 2 === 0 ? num * 2 : num * 1))
    console.log(data) // undefined
}

consoleEven(arrs)

function consoleEven(arrs) {
    let data = arrs
        .map((num) => (num % 2 === 0 ? num * 2 : num * 1))
        .map((item) => (item % 2 === 0 ? item / 2 : item / 1))

    console.log(data)
}

consoleEven(arrs)

console.log("sixteenth js program (function test)");

const u = (name) => {
    console.log(`My name is ${name}`)
}

const greet = () => {
    const prefix = 'Mr'
    return (name) => {
        console.log(`${prefix} ${name}, welcome!`)
    }
}

console.log(greet()('Jack'))

console.log("seventeenth js program (clousures)");
const greets = () => {
    const prefix = 'Mr'
    return (name) => {
        console.log(`${prefix} ${name}, welcome!`)
    }
}

console.log(greets()('Jack'))


function Counter() {
    var count = 0
    this.incrementCount = function () {
        count++
        console.log(count)
    }
}

console.log(this.count) // Error: count is not defined
var adder = new Counter()
adder.incrementCount() // 1


console.log("eighteenth js program (this)");

const student_1 = {
    name: 'Randall',
    displayName_1: function displayName() {
        console.log(this.name)
    }
}
const student_2 = {
    name: 'Raj',
    displayName_2: function displayName() {
        console.log(this.name)
    }
}

student_1.displayName_1()
student_2.displayName_2()
student_1.displayName_1.call(student_2)

console.log("nineteenth js program (timers)");
setTimeout(() => {
    console.log('Here - I am after 2 seconds')
}, 2000);

const timer = setInterval(() => {
    console.log('I will keep on coming back until you clear me')
}, 2000);

clearInterval(timer)

console.log("twentieth js program (star pattern)");

const star = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log('*'.repeat(i))
    }
}

star(5)

console.log("twenty first js program (how to get passengers names)");

const passengers = [
    {
        id: 1,
        passengerName: "Freddie Mercury",
        isVegetarianOrVegan: false,
        connectedFlights: 2,
    },
    {
        id: 2,
        passengerName: "Amy Winehouse",
        isVegetarianOrVegan: true,
        connectedFlights: 4,
    },
    {
        id: 3,
        passengerName: "Kurt Cobain",
        isVegetarianOrVegan: true,
        connectedFlights: 3,
    },
    {
        id: 3,
        passengerName: "Michael Jackson",
        isVegetarianOrVegan: true,
        connectedFlights: 1,
    },
];

const passengerNames = [];
for (let i = 0; i < passengers.length; i++) {
    passengerNames.push(passengers[i].passengerName)
}
console.log("passengers", passengerNames);

console.log("twenty second js program (sort in decending order and follow a fiboaacci series)");

const numbers9 = [1, 2, 3, 4, 5]

// Sort the array
const ans9 = numbers9.sort((a, b) => b - a)
console.log(ans9) // [1,2,3,4,5]

const fib = (n) => {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2)
}

console.log(fib(5))


// Generate Fibonacci series and replace array elements
for (let i = 0; i < numbers9.length; i++) {
    numbers9[i] = fib(i + 1);
}

console.log(numbers9);

console.log("twenty third js program (javascript module pattern)");

const counter = (function () {
    let count = 0
    return {
        incrementCount: function () {
            count++
            console.log(count)
        },
        getCount: function () {
            console.log(count)
        }
    }
}
)()

counter.incrementCount() // 1


