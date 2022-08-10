

// let btn=document.getElementById('btn');
// console.log(btn);
// let btn2=document.getElementsByName('btn-clcik')
// console.log(btn2);

let btn=document.getElementById('btnRate');
let op=document.getElementById('op')
btn.addEventListener('click',()=>{
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