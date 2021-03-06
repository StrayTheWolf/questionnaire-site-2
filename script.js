'use strict'
document.addEventListener('DOMContentLoaded', () => {

    const elements = document.querySelectorAll('.search');
    elements.forEach(item => {

        const name = item.getAttribute('id')
        item.addEventListener('input', (event) => {

            localStorage.setItem(name, item.value);
        });

        item.value = localStorage.getItem(name);
    })
    showDataIfLocalHas();
})

function switchBlock(hide, show) {
    document.getElementById(hide).style.display = 'none';
    document.getElementById(show).style.display = 'block';
}

function addArray() {
    let data = document.querySelectorAll('.search')

    let array = [];
    let inputCount = 0;

    for (let i = 0; i < data.length; i++) {
        if (inputCount === 9) {
            array[i] = "Страна " + data[i].value;
            inputCount++
            continue;
        }
        if (inputCount === 10) {
            array[i] = "Город " + data[i].value;
            inputCount++
            continue;
        }
        let textField = data[inputCount].labels[0].innerText;
        array[i] = textField + " : " + data[i].value;
        inputCount++;

        console.log(array);
    }
    return array
}

function showSummary() {
    let filledArray = addArray();
    for (let i = 0; i < filledArray.length; i++) {
        let html = filledArray[i];
        document.getElementById('summary').insertAdjacentHTML("beforebegin", '<p></p>' + html);
    }
}

function showDataIfLocalHas() {
    if (localStorage.length >= 1) {
        console.log(localStorage.length)
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('block1').style.display = 'none';
        document.getElementById('header-title').style.display = 'none';
    }
}
