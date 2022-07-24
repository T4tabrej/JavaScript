//function declaration 
function say(message) {
    console.log(message);
}
//function calling
say("Hello! how are you")

/*Returning a value

Every function in JavaScript implicitly returns undefined unless you explicitly specify a return value. For example:*/

function Bye(x,y){
    console.log(x+y);
}

res=Bye(2,3)
console.log(res);//ans is undefine because it is not returning any thing

// function add(a, b) {
//     return a + b;
// }



/*The arguments object behaves like an array though it is not an instance of the Array type.
For example, you can use the square bracket [] to access the arguments: arguments[0] returns the first argument, arguments[1] returns the second one, and so on.

Also, you can use the length property of the arguments object to determine the number of arguments.*/


function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
sum=add(7,9,5,6)
console.log(sum);


/*Storing functions in variables
Functions are first-class citizens in JavaScript. In other words, you can treat functions like values of other types.

The following defines the add() function and assigns the function name to the variable sum:*/
function sub(a,b){
console.log(a-b);
}
//we can store the function in a variable and then call it from that variable
diff=sub
diff(4,5)

// Passing a function to another function as an argument

// The following declares the average() function that takes three arguments. The third argument is a function:
function average(a, b, fn) {
    return fn(a, b) / 2;
}
let result = average(10, 20, add);
console.log("average = ",result);



// Suppose that you have an array of product objects where each product object has two properties: name and price.


function compareBy(propertyName) {
    return function (a, b) {
      let x = a[propertyName],
        y = b[propertyName];
  
      if (x > y) {
        return 1;
      } else if (x < y) {
        return -1;
      } else {
        return 0;
      }
    };
  }

let products = [
    {name: 'iPhone', price: 900},
    {name: 'Samsung Galaxy', price: 850},
    {name: 'Sony Xperia', price: 700}
];

console.log('Products sorted by name:');
products.sort(compareBy('name'));

console.table(products);

/*Introduction to JavaScript anonymous functions
An anonymous function is a function without a name. The following shows how to define an anonymous function:

(function () {
   //...
});


Note that if you don’t place the anonymous function inside the (), you’ll get a syntax error. The () makes the anonymous function an expression that returns a function object.

An anonymous function is not accessible after its initial creation. Therefore, you often need to assign it to a variable.

For example, the following shows an anonymous function that displays a message:

let show = function() {
    console.log('Anonymous function');
};

show();

*/
let show = function() {
    console.log('Anonymous function');
};

show();

/*Using anonymous functions as arguments

In practice, you often pass anonymous functions as arguments to other functions*/
setTimeout(function(){
console.log("Hello");
},1000)

// In this example, we pass an anonymous function into the setTimeout() function. The setTimeout() function executes this anonymous function one second later.


/*Immediately invoked function execution  If you want to create a function and execute it immediately after the declaration, you can declare an anonymous function like this:
(function() {
    console.log('IIFE');
})();*/
// (function () {
//     console.log("Bye");
// })();

// call the function by adding the trailing parentheses ():

let person = {
    firstName: 'John',
    lastName: 'Doe'
};

(function () {
    console.log(person.firstName + ' ' + person.lastName);
})(person);

// Arrow functions
// ES6 introduced arrow function expression that provides a shorthand for declaring anonymous functions:
let dis1 = function () {
    console.log('Anonymous function');
};
// can be shortened using the following arrow function:

// can be shortened using the following arrow function:
let dis2= () => console.log('Hello! Anonymous function');
dis2()



// Introduction to the JavaScript object methods

// For example, the following adds the greet method to the person object:

let emp = {
    firstName: 'John',
    lastName: 'Doe'
};

emp.greet = function () {
    console.log('Hello Employee!');
}

emp.greet();


// second way
let emp2 = {
    firstName: 'John',
    lastName: 'Doe'
};

function greet() {
    console.log('Hello, World!');
}

emp2.greet = greet;

emp2.greet();

//third way
let emp3 = {
    firstName: 'John',
    lastName: 'Doe',
    greet: function () {
        console.log('Hello, World Again!');
    }
};
emp3.greet();

// Introduction to JavaScript prototype
/*JavaScript has the built-in Object() function. The typeof operator returns 'function' if you pass the Object function to it. For example:

typeof(Object)
Code language: JavaScript (javascript)
Output:

'function'*/
console.log(Object.prototype);

function Person(name) {
    this.name = name;
}

console.log(Person);
console.log(Person.prototype);