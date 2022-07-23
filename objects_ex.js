// object always contain key value pairs
// empty object

// emp={

// }


emp={
    name:"Innaya",
    gender:'F'
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