document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submitInfo').addEventListener('click', () => {
        console.log('click')
    });
})


function openBlock2() {
    document.getElementById('block1').style.display = 'none';
    document.getElementById('block2').style.display = 'block';
}
function openBlock3() {
    document.getElementById('block2').style.display = 'none';
    document.getElementById('block3').style.display = 'block';
}
function openBlock4() {
    document.getElementById('block3').style.display = 'none';
    document.getElementById('block4').style.display = 'block';
}
function openBlock5() {
    document.getElementById('block4').style.display = 'none';
    document.getElementById('block5').style.display = 'block';
}



let array = [];
let inputCount = 0;

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
        array[i] = textField + " " + data[i].value;
        inputCount++;

    }
}

function showSummary() {
    for (let i = 0; i < array.length; i++) {

        let html = array[i];
        document.getElementById('summary').insertAdjacentHTML("beforebegin", '<p></p>' + array[i]);
    }
}

function getInfo(id) {
    return document.getElementById(id).value;
}




