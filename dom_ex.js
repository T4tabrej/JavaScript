

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

/*getting child of elements



let content=document.querySelector('.menu')
// let firstChild=content.firstChild.nodeType;
//it will return the first child of menu bt we have to name first as class
let firstChild=content.firstElementChild;
// console.log(firstChild);
//it will return the last child of menu bt we have to name last as class
let lastChild=content.lastElementChild
// console.log(lastChild);


// The following example selects all child elements of the element with the Id main:

let children = content.children;
let arr=Array.from(children);
arr.forEach((item)=>{
console.log(item.innerText);
})
// console.log(children);

*/

/*create element


*/

// 1.creating div 
let div=document.createElement('div');
div.innerHTML='<p>Hello Welcome this div creating first<p/>'
//giving id to the div
div.id='content'

//giving classname to the div
div.className='note'

//creating new text node
let text=document.createTextNode("this is creating text node example");
div.appendChild(text);

//adding element to div
let h2 = document.createElement('h2');
h2.textContent = 'Add h2 element to the div';
div.appendChild(h2);
// adding list element to menu1
let menu1=document.getElementById('menu1')
let li=document.createElement('li')
li.textContent='products'
menu1.appendChild(li)
//adding multiple list items
let arr=['menu','aboutus','contactus'];
for(i=0;i<3;i++){
let l=document.createElement('li')
l.textContent=arr[i]
menu1.appendChild(l)
}
document.body.appendChild(div)
let x=document.getElementById('content')


// let x=document.querySelector('.note')
console.log(x);


//insert before an element
menu1=document.querySelector('#menu1');
let l=document.createElement('li')
li.textContent="Adding Before ele";
menu1.insertBefore(l,menu1.firstElementChild)

//setting a cookie
// document.cookie="key:value"
document.cookie = `${encodeURIComponent("username")}=${encodeURIComponent("tabrej")}`;
console.log(document.cookie);

//local storage
window.localStorage.setItem('theme','dark');
console.log(window.localStorage);
// 2) The length property

// To get the number of name-value pairs, you use the length property like this:

console.log(window.localStorage.length); // 1
// 3) The getItem() method
console.log(localStorage.getItem('theme'));
/*4) The removeItem() method

To remove a name-value pair by a key, you use the removeItem()*/
localStorage.removeItem('theme')
console.log(localStorage);

/*5) Loop over keys of the localStorage object

The following stores three name-value pairs to the localStorage:
*/
localStorage.setItem('theme','light');
localStorage.setItem('backgroundColor','white');
localStorage.setItem('color','#111');
// console.log(localStorage.getItem('color'));
let keys=Object.keys(localStorage)
// console.log(key);
for (let key of keys) {
   console.log(localStorage.getItem(key));
}
/*
Storing objects

The Storage type stores only string data. To store objects, you need to convert them into strings using the JSON.stringify() method. For example:
*/
const settings = {
    backgroundColor: '#fff',
    color: '#111',
    theme: 'light'
};

localStorage.setItem('settings', JSON.stringify(settings));

console.log(localStorage.getItem('settings'));

// The following retrieves the value from the localStorage and converts it back to the object using the JSON.parse() method.

let storedSettings = JSON.parse(localStorage.getItem('settings'));
console.log(storedSettings);
// Remove a name-value pair by calling the removeItem() method.
// And remove all values by calling the clear() method.
// localStorage.removeItem('settings')
localStorage.clear()
console.log("Checking the local Storage ",localStorage);
