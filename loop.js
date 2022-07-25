// for loop 
/*A property is enumerable when its internal enumerable flag is set to true.
for(const propertyName in object) {
    // ...
}

*/

var person = {
    firstName: 'John',
    lastName: 'Doe',
    ssn: '299-24-2351'
};


for(var x in person) {
    console.log(x + ':' + person[x]);
    // object[property];

}

// The for...in loop and Array
const items = [10 , 20, 30];
let total = 0;

for(item in items) {
    total += items[item];
}
console.log(total); 

