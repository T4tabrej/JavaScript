/*An JavaScript array has the following characteristics:

First, an array can hold values of mixed types. For example, you can have an array that stores elements with the types number, string, and boolean.
Second, the size of an array is dynamic and auto-growing. In other words, you don’t need to specify the array size upfront.
*/

// let scores = new Array();



// If you know the number of elements that the array will hold, you can create an array with an initial size as shown in the following example:

// let scores = Array(10);


// To create an array and initialize it with some elements, you pass the elements as a comma-separated list into the Array() constructor.
let scores = new Array(9,10,8,7,6);
console.log(scores);

let athletes = new Array(3); // creates an array with initial size 3
let scores1 = new Array(1, 2, 3); // create an array with three numbers 1,2 3
let signs = new Array('Red'); // creates an array with one element 'Red'

console.log(athletes);
console.log(scores);
console.log(signs);

// Second way to create array
let student=["atif","sadiya","shifa"];
console.log(student);
// Accessing JavaScript array elements

console.log(student[0]); 
student[1]="sana"
console.log(student);
// size of Array
console.log(student.length)//3



// Basic operations on arrays
// 1) Adding an element to the end of an array
student.push("Innaya")
console.log(student);

// 2) Adding an element to the beginning of an array
// To add an element to the beginning of an array, you use the unshift() method:
student.unshift("Rounaque");
console.log(student);

// 3) Removing an element from the end of an array

// To remove an element from the end of an array, you use the pop() method:
removed_ele=student.pop()
console.log(removed_ele);
console.log(student);

// 4) Removing an element from the beginning of an array

// To remove an element from the beginning of an array, you use the shift() method:
removed_ele1=student.shift()
console.log(removed_ele1);
console.log(student);

// 5) Finding an index of an element in the array
// To find the index of an element, you use the indexOf() method:
// if data is not present in the array it will return the value -1
console.log(student.indexOf("shifa"));


// 6) Check if an value is an array

// To check if a value is an array, you use Array.isArray() method:

console.log(Array.isArray(student));