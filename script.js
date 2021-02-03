'use strict'
document.addEventListener('DOMContentLoaded',()=>{
    const elements = document.querySelectorAll('.search');
    elements.forEach(item =>{
        const name = item.getAttribute('id')
        item.addEventListener('input',(event)=>{
            localStorage.setItem(name, item.value);
        });
        item.value = localStorage.getItem(name);
    })
})

let array = [];
let inputCount = 0;

function switchBlock(hide, show){
    document.getElementById(hide).style.display = 'none';
    document.getElementById(show).style.display = 'block';
}

function addArray() {
    let data = document.querySelectorAll('.search')

    for (let i = 0; i < data.length; i++) {
        if(inputCount === 9){
            array[i] = "Страна " + data[i].value;
            inputCount++
            continue;
        }
        if(inputCount === 10){
            array[i] = "Город " + data[i].value;
            inputCount++
            continue;
        }
        let textField = data[inputCount].labels[0].innerText;
        array[i] = textField + " : " + data[i].value;
        inputCount++;

    }
}

function showSummary() {
    for (let i = 0; i < array.length; i++) {

        let html =  array[i];
        document.getElementById('summary').insertAdjacentHTML("beforebegin", '<p></p>' + html);
    }
}




