let ranks=['A','B','C','D','E']
/*first type of  iterator
ranks.forEach((element)=>{
console.log(element);
})
*/
/* second type of  iterator
for( i=0;i<ranks.length;i++){
console.log(ranks[i]);
}
*/
/* third type of iterator
for (const x of ranks) {
    console.log(x);
}
*/

/*
Iteration protocols

There are two iteration protocols: iterable protocol and iterator protocol.


Iterator protocol

An object is an iterator when it implements an interface (or API) that answers two questions:

Is there any element left?
If there is, what is the element?

Technically speaking, an object is qualified as an iterator when it has a next() method that returns an object with two properties:

 done: a boolean value indicating whether or not  there are any more elements that could be iterated upon.
 value: the current element.
Each time you call the next(), it returns the next value in the collection:

{ value: 'next value', done: false }

{done: true: value: undefined}

The value of the done property indicates that there is no more value to return and the value of the property is set to undefined.
*/

/*
let oddNumbers=new Sequence(1,20,2);
oddNumbers.array.forEach(element => {
    console.log(element);
});
*/

/*
To access the index of the array elements inside the loop, you can use the for...of statement with the entries() method of the array.

The array.entries() method returns a pair of [index, element] in each iteration. For 


let colors = ['Red', 'Green', 'Blue'];

for (const [index, ele] of colors.entries()) {
    console.log(`${ele} is at index ${index}`);
}

*/

const ratings = [
    {user: 'John',score: 3},
    {user: 'Jane',score: 4},
    {user: 'David',score: 5},
    {user: 'Peter',score: 2},
];

let sum = 0;
for (const {score} of ratings) {
    sum += score;
    // console.log(user);
}

console.log(`Total scores: ${sum}`); 