// const ucFirst = (name) => {
//     return 'John';
//   };
  
//   /*
//   Q1: Uppercase the first character
//   Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:
  
//   Expectation:
  
//   ucFirst("john") == "John";

function ucFirst(str) {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
  }
  
  console.log(ucFirst('john'));

//   Q2: Check for spam
  
//   Write a function checkSpam(str) that returns true if str contains 'sex', 'free', ‘viagra’ or ‘porn’, otherwise false.
  
//   The function must be case-insensitive:
  
//   Expectation:
//   checkSpam('buy ViAgRA now') == true
//   checkSpam('free porn') == true
//   checkSpam('freebie') == true
//   checkSpam('free sex') == true
//   checkSpam("innocent rabbit") == false

function checkSpam(str) {
    let lowerStr = str.toLowerCase();
  
    return lowerStr.includes('sex') || lowerStr.includes('free') || lowerStr.includes('viagra') || lowerStr.includes('porn')
  }
  
console.log(checkSpam('buy ViAgRA now'))
console.log(checkSpam('free porn'))
console.log(checkSpam('freebie'))
console.log(checkSpam('free sex'))
console.log(checkSpam('innocent rabbit'))

  
//   Q3: Truncate the text
  
//   Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.
  
//   The result of the function should be the truncated (if needed) string.
  
//   For instance:
  
//   truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"
  
//   truncate("Hi everyone!", 20) = "Hi everyone!"

function truncate(str, maxlength) {
    return (str.length > maxlength) ? 
      str.slice(0, maxlength - 1) + '…' : str;
  }

console.log(truncate("What I'd like to tell on this topic is:", 20));
console.log(truncate("Hi everyone!", 20));

  
//   Q4: Extract the money
  
//   We have a cost in the form "$120". That is: the dollar sign goes first, and then the number.
  
//   Create a function extractCurrencyValue(str) that would extract the numeric value from such string and return it.
  
//   The example:
  
//   alert( extractCurrencyValue('$120') === 120 ); // true


function extractCurrencyValue(str) {
    return +str.slice(1);
  }

  console.log(extractCurrencyValue('$120'));

  
//   Q5: Is array copied?
  
//   What is this code going to show?
  
//   const fruits = ["Apples", "Pear", "Orange"];
  
//   // push a new value into the "copy"
//   const shoppingCart = fruits;
//   shoppingCart.push("Banana");
  
//   // what's in fruits?
//   alert( fruits.length ); // ?

const fruits = ["Apples", "Pear", "Orange"];

const shoppingCart = fruits;

shoppingCart.push("Banana");

alert( fruits.length ); // 4
  
//   Q6: Array operations.
  
//   Let’s try 5 array operations.
  
//   Create an array styles with items “Jazz” and “Blues”.
//   Append “Rock-n-Roll” to the end.
//   Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
//   Strip off the first value of the array and show it.
//   Prepend Rap and Reggae to the array.
//   The array in the process:
  
//   Jazz, Blues
//   Jazz, Blues, Rock-n-Roll
//   Jazz, Classics, Rock-n-Roll
//   Classics, Rock-n-Roll
//   Rap, Reggae, Classics, Rock-n-Roll

let styles = ["Jazz", "Blues"];

console.log(styles);

styles.push("Rock-n-Roll");

console.log(styles);

styles[Math.floor((styles.length - 1) / 2)] = "Classics";

console.log(styles);

alert( styles.shift() );

console.log(styles);

styles.unshift("Rap", "Reggae");

console.log(styles);

  
//   Q7: Translate border-left-width to borderLeftWidth
  
//   Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
  
//   That is: removes all dashes, each word after dash becomes uppercased.
  
//   Examples:
  
//   camelize("background-color") == 'backgroundColor';
//   camelize("list-style-image") == 'listStyleImage';
//   camelize("font-size") == 'fontSize';
//   P.S. Hint: use split to split the string into an array, transform it and join back.

function camelize(str) {
    return str
      .split('-')
      .map(
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join('');
  }

  console.log(camelize("background-color"));
  console.log(camelize("list-style-image"));
  console.log(camelize("font-size"));

  
//   Q8: Filter range
  
//   Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
  
//   The function should not modify the array. It should return the new array.
  
//   For instance:
  
//   let arr = [5, 3, 8, 1];
  
//   let filtered = filterRange(arr, 1, 4);
  
//   alert( filtered ); // 3,1 (matching values)
  
//   alert( arr ); // 5,3,8,1 (not modified)
//----------------------------------------------
// function filterRange(arr, a, b) {
//     return arr.filter(item => (a <= item && item <= b));
//   }
  
//   const arr = [5, 3, 8, 1];
  
//   const filtered = filterRange(arr, 1, 4);
  
//   alert( filtered ); 
  
//   alert( arr ); 
//-----------------------------------------------------
//   Q9: Filter range "in place" (same as Q8 but without creating a new array, instead, remove items from current array)
  
//   Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
  
//   The function should only modify the array. It should not return anything.
  
//   For instance:
  
//   let arr = [5, 3, 8, 1];
  
//   filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
  
//   alert( arr ); // [3, 1]

function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
  
      if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  
  }
  
  let arr = [5, 3, 8, 1];
  
  filterRangeInPlace(arr, 1, 4); 
  
  alert( arr ); 
  
//   Q10: Map to names
  
//   You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.
  
//   For instance:
  
//   let john = { name: "John", age: 25 };
//   let pete = { name: "Pete", age: 30 };
//   let mary = { name: "Mary", age: 28 };
  
//   let users = [ john, pete, mary ];
  
//   let names = ... your code
  
//   alert( names ); // John, Pete, Mary
//   */
  
let john = { name: "John", age: 25 };
let pete = { name: " Pete", age: 30 };
let mary = { name: " Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

alert( names );


