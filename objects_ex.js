// object always contain key value pairs
// empty object

// emp={

// }


emp = {
    name: "Innaya",
    gender: 'F'
};

// console.log(emp);

// 1) The dot notation (.)
// objectName.propertyName
console.log(emp.name);


// 2) Array-like notation ( [])
console.log(emp['name']);


// 3)Deleting a property of an object
// delete objectName.propertyName;
delete emp.gender;
console.log(emp);

// 4)Checking if a property exists
// propertyName in objectName

// The in operator returns true if the propertyName exists in the objectName.

let employee = {
    firstName: 'Peter',
    lastName: 'Doe',
    employeeId: 1
};

console.log('ssn' in employee);
console.log('employeeId' in employee);



//Object Property types

/*Objects have two types of properties: data and accessor properties.

1) Data properties

A data property contains a single location for a data value. A data property has four attributes:

 [[Configurarable]] – determines whether a property can be redefined or removed via delete operator.
 [[Enumerable]] – indicates if a property can be returned in the for...in loop.
 [[Writable]] – specifies that the value of a property can be changed.
 [[Value]] – contains the actual value of a property.
By default, the [[Configurable]] , [[Enumerable]]And [[Writable]] attributes set to true for all properties defined directly on an object. The default value of the[[Value]] attribute is undefined.

*/

let person = {
    firstName: 'John',
    lastName: 'Doe'
};


/*

To change any attribute of a property, you use the Object.defineProperty() method.

The Object.defineProperty() method accepts three arguments:

An object.
A property name of the object.
A property descriptor object that has four properties: configurable, enumerable, writable, and value.

*/

let person1 = {};
person1.age = 25;
console.log("Before", person1.age);

delete person1.age;

console.log("After", person1.age);

// The following example creates a person object and adds the ssn property to it using the Object.defineProperty() method:

// 'use strict';

let person2 = {};

Object.defineProperty(person2, 'ssn', {
    configurable: false,
    value: '012-38-9119'
});
console.log(person2.ssn);


/*By default, the enumerable attribute of all the properties defined on an object is true. t means that you can iterate over all object properties using the for...in loop like this:



*/
let person3 = {};
person3.age = 25;
person3.ssn = '012-38-9119';


//it will not read the value of age
Object.defineProperty(person3,'age',{
    enumerable:false
})

for (let property in person3) {
    console.log(property);
}

// Define multiple properties: Object.defineProperties()
var product = {};

Object.defineProperties(product, {
    name: {
        value: 'Smartphone'
    },
    price: {
        value: 799
    },
    tax: {
        value: 0.1
    },
    netPrice: {
        get: function () {
            return this.price * (1 + this.tax);
        }
    }
});
// console.log(product.netPrice);
console.log('The net price of a ' + product.name + ' is ' + product.netPrice.toFixed(2) + ' USD');

// JavaScript object property descriptor

/* it will return the all property value which are enumrable ,configurable,writeable etc
The  Object.getOwnPropertyDescriptor() method allows you to get the descriptor object of a property. The Object.getOwnPropertyDescriptor() method takes two arguments:

An object
A property of the object
It returns a descriptor object that describes a property. The descriptor object has four properties: configurable, enumerable, writable, and value.

*/
let person4 = {
    firstName: 'John',
    lastName: 'Doe'
};


let descriptor = Object.getOwnPropertyDescriptor(person4, 'firstName');

console.log(descriptor);