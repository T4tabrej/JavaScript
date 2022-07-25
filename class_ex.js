class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
let student1=new Person("Tabrej");
console.log(student1.getName());


// Using getter in an object literal
// The following example defines a getter called latest to return the latest attendee of the meeting object:

let meeting={
    attendees:[],
    
    add_attendees(attendee){
       console.log(`${attendee} joind The Meeting`);
       this.attendees.push(attendee);
       return this;
    },

    get latest(){
        count=this.attendees.length;
        return count==0?"Sorry there is no one":this.attendees[count-1]
    }


}

// setInterval(meeting.add_attendees('John'), 1000);
meeting.add_attendees('John').add_attendees('Jane').add_attendees('Peter');

console.log(`The latest attendee is ${meeting.latest}.`);


let stud_name = 'fullName';

class Person1 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get [stud_name]() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let std= new Person1('John', 'Doe');
console.log(std.fullName);


// Implementing JavaScript inheritance using extends and super
/*class Bird extends Animal {
    // ...
 }
*/
class Animal {
    constructor(legs) {
        this.legs = legs;
    }
    walk() {
        console.log('walking on ' + this.legs + ' legs');
    }
}

class Bird extends Animal {
    constructor(legs) {
        super(legs);
    }
    fly() {
        console.log('flying');
    }
}


let bird = new Bird(2);

bird.walk();
bird.fly();

class Dog extends Animal {
    constructor() {
        super(4);
    }
    walk() {
        console.log('walking on ' + this.legs + ' legs');
    }
}

let bingo = new Dog();
bingo.walk(); // go walking

// Introduction to the JavaScript private fields
/*
ES2022 allows you to define private fields for a class. To define a private field, you prefix the field name with the # sign.

For example, the following defines the Circle class with a private field radius:
*/
class Circle {
    #radius;
    constructor(value) {
      this.#radius = value;
    }
    get area() {
      return Math.PI * Math.pow(this.#radius, 2);
    }
  }
  let c1=new Circle(4);
  console.log(c1.area.toFixed(2))


/*   avaScript Private Methods
By default, members of a class are public. ES2020 introduced the private members that include private fields and methods.

To make a public method private, you prefix its name with a hash #. JavaScript allows you to define private methods for instance methods, static methods, and getter/setters.

The following shows the syntax of defining a private instance method:
*/
/*
class MyClass {
    #privateMethod() {
      //...
    }
  }
  */
//  class complete start from arrows function