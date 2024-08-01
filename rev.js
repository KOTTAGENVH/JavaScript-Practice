const arr = [1, 2, 3, 4, 5];

//MAP
function mapping() {
  return arr.map(x => x * 2);
}

console.log(mapping()); // [2, 4, 6, 8, 10]

//FILTER
function filter(){
    return arr.filter(x => x>2);
}

console.log(filter()); // [3, 4, 5]

const stringarray = ['javascript', 'script', 'interview', 'style', 'javascript'];

function filterstring(){
    const uniqueString = new Set();
    return stringarray.filter(x => {
        if(uniqueString.has(x)){
            return x;
        } else {
            uniqueString.add(x);
            return uniqueString
        }
       
    });
}

console.log(filterstring()); // ['javascript']

const word = 'madams';

function palindrome(word){
    const reverseword = word.split('').reverse().join('');
    if(word === reverseword){
        return true;
    } else {
        return false;
    }
}

console.log(palindrome(word)); // true

function uniqueWord() {
    const chars = word.split('');
    
    // Create an object to count occurrences of each character
    const charCount = chars.reduce((count, char) => {
        count[char] = (count[char] || 0) + 1;
        return count;
    }, {});
    
    // Use filter to get only unique letters that appear exactly once
    const uniqueLetters = Object.keys(charCount).filter(char => charCount[char] === 1);
    
    return uniqueLetters;
}

console.log(uniqueWord()); // ['d', 'm', 's'] (Letters appearing exactly once)

//dictionary

const dictionary = {
    'a': 1,
    'b': 2,
    'c': 3
}

// Add a new key-value pair
dictionary['d'] = 4;
console.log(dictionary); // { a: 1, b: 2, c: 3, d: 4 }

// Update an existing key-value pair
dictionary['b'] = 20;

// Delete a key-value pair
delete dictionary['c'];