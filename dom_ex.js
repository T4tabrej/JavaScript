

// let btn=document.getElementById('btn');
// console.log(btn);
// let btn2=document.getElementsByName('btn-clcik')
// console.log(btn2);

/*
let btn=document.getElementById('btnRate');
let op=document.getElementById('op')
btn.addEventListener('click',()=>{
    //get element by name retrun all the html tag which have the same name 
    let rates=document.getElementsByName('rate')
    // console.log(rates);
    rates.forEach((x)=>{
        // console.log(x.value);
        if (x.checked) {
            console.log(x.value);
            op.innerText=x.value;
        }
    })

})
*/

/*getElement by tagname means it return the tags of same in a html collection



let btn =document.getElementById('btn');
btn.addEventListener('click',()=>{
    //getting all the tag which is label it returns a html collection
    let a=document.getElementsByTagName('label')
    // console.log(a.length);
    //creating array from html collection
    arr=Array.from(a);
    console.log(arr);
    arr.forEach(element => {
        //printing the vale od each element
        console.log(element.htmlFor);
    });
})
*/
/*getting Element by classname
it return the html collection

let a=document.getElementsByClassName('btn btn-primary')
// console.log(a);
let arr=Array.from(a)
// console.log(arr);
arr.forEach((x)=>{
console.log(x.innerHTML);
})

*/

/*query selector 
*/

//return first element of this tag
// let first=document.querySelector('p')
// console.log(first.innerText);

/*it will return  a node list
let all=document.querySelectorAll('div p')
console.log(all);
all.forEach((ele)=>{
console.log(ele.firstChild);
})

*/



/* 
it returns the p which are inside the div


let x=document.querySelectorAll('div p')
// console.log(x);
let arr=Array.from(x)
// console.log(arr);
arr.forEach((ele)=>{
console.log(ele.innerHTML);
})

*/

/*
The following example finds all li elements that are directly inside a <ul> element:


let listItems = document.querySelectorAll('ul> li');
// console.log(listItems);
let arr=Array.from(listItems)
arr.forEach((ele)=>{
console.log(ele.innerText);
})
*/
/*accesing the nth child of li

let secondChild=document.querySelectorAll('li:nth-child(1)')
console.log(secondChild[0].innerText);
*/


/*
getting siblings from current node to next or for the prevoius 
let currentNode=document.querySelector('.current')
let current = document.querySelector('.current');
// let prevSibling = currentNode.previousElementSibling;
// console.log(current);
let nextSibling=currentNode.nextElementSibling;
console.log(nextSibling);
while (nextSibling) {
    console.log(nextSibling.innerText);
    nextSibling=nextSibling.nextElementSibling;
}
*/

// start from   Getting Child Elements of a Node in JavaScript