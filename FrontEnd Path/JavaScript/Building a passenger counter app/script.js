// document.getElementById("count-el").innerText = 5;

// let count = 5;
// count = count + 1;
// console.log(count);

let count = 0;
let countEl = document.getElementById("count-el");

function increment(){
    count += 1;
    console.log(count);
    countEl.innerText = count;
}