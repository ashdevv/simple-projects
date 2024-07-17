let input = document.getElementById("input-text");
const add = document.getElementById("btn-add");
let headerList = document.getElementById("list-header");

add.addEventListener('click', handleSubmit)
function handleSubmit(){
    let inputValue =input.value;
    headerList.innerHTML += `<li>${inputValue}</li>`;
    console.log(input.value);
}













// let input = document.getElementById("input-text");
// const add = document.getElementById("btn-add");
// let li = document.getElementById("list");


// add.onclick = function(){
//     inputValue = input.value;
//     li.textContent += `${inputValue}`;
//     console.log(inputValue);
// }
