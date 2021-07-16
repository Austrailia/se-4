// 1. Write a JavaScript function isArray() to check whether an `input` is an array or not.

// a. Test case 1:
//  Input: [1, 2, 3, 54]
//  Output: true

// b. Test case 2:
//  Input: 35
//  Output: false

const is_array = function(input) {
    if (toString.call(input) === "[object Array]")
      return true;
    return false;   
      };
  console.log(is_array('21'));
  console.log(is_array([1, 2, 4, 0]));

// 2. Write a simple JavaScript program  joinArray() to join all elements of the following array into a string. 

// a. Test case 1:
//  Input: [“orange”, “apple”, “grape”]
//  Output: “orange$apple$grape”

myFoods = ["orange", "apple", "grape"]
console.log(myFoods.join('$'));


// 3. Write a JavaScript program to find the index of a number in a sorted array (DO NOT USE indexOf).

// a. Test case 1:
//   Input: [1, 2, 3, 4, 5], 5
//   Output: Index of 5 is 4

// b. Test case 2:
//   Input: [1, 2, 3, 4, 5, 6], 2
//   Output: Index of 2 is 1

function findIndex(arr, num) {
      let sortedArray = arr.sort((a, b) => a - b)
      let index = sortedArray.findIndex((currentNum) => num <= currentNum)
  
      return index === -1 ? arr.length : index
  }
  
  console.log(findIndex([1, 2, 3, 4, 5], 5));
  console.log(findIndex([1, 2, 3, 4, 5], 2));

// 4. Write a JavaScript program to compute the sum of an array of integers.

// a. Test case 1:
//   Input: [1, 2, 3, 4, 5]
//   Output: 15

// b. Test case 2:
//   Input: [2, 7, 10]
//   Output: 19

const array_sum = function(my_array) {
    if (my_array.length === 1) {
      return my_array[0];
    }
    else {
        return my_array.pop() + array_sum(my_array);
    }
  };
  
  console.log(array_sum([1,2,3,4,5,6]));

// 5. Write a Javascript program to compute the product of an array of integers.

// a. Test case 1:
//   Input:[1, 2, 3, 4, 5]
//   Output: 120

// b. Test case 2:
//   Input: [2, 3]
//   Output: 6

var array = [1, 2, 3, 4, 5],
    p = 1,
    i;
for (i = 0; i < array.length; i += 1) 
   {
    p *= array[i];
    }
console.log('Product : ' +p); 

// 6. Write a JavaScript program to remove duplicate items from an array.

// a. Test case 1:
//   Input: [1, 1, 2, 3, 7, 7, 0]
//   Output: [1, 2, 3, 7, 0]

// b. Test case 2:
//   Input: [“Peter”, “James”, “Bob”, “Peter”]
//   Output: [“Peter”, “James”, “Bob”]


function removeDuplicates(num) {
    var x,
        len=num.length,
        out=[],
        obj={};
   
    for (x=0; x<len; x++) {
      obj[num[x]]=0;
    }
    for (x in obj) {
      out.push(x);
    }
    return out;
  }
  const myNumsArray = [1, 1, 2, 3, 7, 7, 0];
  result = removeDuplicates(myNumsArray);
  console.log(result);

  const myNamesArray = ['Peter', 'James', 'Bob', 'Peter'];
  result = removeDuplicates(myNamesArray);
  console.log(result);

// 7. Find the leap years in a given range of years.

// a. Test case 1:
//   Input: 2000, 2018
//   Output: [2000, 2004, 2008, 2012, 2016]

// b. Test case 2:
//   Input: 2013, 2015
//   Output: []

function leap_year_range(st_year, end_year) {
    var year_range = [];
    for (var i = st_year; i <= end_year; i++)
    {
         year_range.push(i);
    }
    var new_array = [];

year_range.forEach(function(year)
{ 
   if (test_LeapYear(year)) 
   new_array.push(year);
});

return new_array;
 }

function test_LeapYear(year) {
if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
            return year;
    } else {
            return false;
    }
}

console.log(leap_year_range(2000,2018));


// 8. Write a JavaScript program to calculate the n-th fibonacci number: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55.

// a. Test case 1:
//   Input: 0
//   Output: 1

// b. Test case 2:
//   Input: 4
//   Output: 5

// c. Test case 3:
//   Input: 3
//   Output: 3


function fib(n) {
    let arr = [0, 1];
  
    if (n <= 2) return 1;
  
    for (let i = 2; i <= n; i++) {
      arr[i] = arr[i - 1] + arr[i - 2];

    }
  
    return arr[n];
  }
  
  console.log(fib(0));