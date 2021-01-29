document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submitInfo').addEventListener('click', () => {
        console.log('click')
    });
})

function openBlock2(){
    document.getElementById('block1').style.display = 'none';
    document.getElementById('block2').style.display = 'block';
}
function openBlock3(){
    document.getElementById('block2').style.display = 'none';
    document.getElementById('block3').style.display = 'block';
}
function openBlock4(){
    document.getElementById('block3').style.display = 'none';
    document.getElementById('block4').style.display = 'block';
}
function openBlock5(){
    document.getElementById('block4').style.display = 'none';
    document.getElementById('block5').style.display = 'block';
}


let array = [];
function addArray(){
    let data = document.querySelectorAll('.search')
    for (let i = 0; i < data.length; i++){
        array[i] = data[i].value;
    }
    console.log(array);
}

function showSummary(){
    for (let i = 0; i < array.length; i++){
        let html = array[i];
        document.getElementById('summary').insertAdjacentHTML("beforeend", ' ' + html + ' ');
    }
}

function getInfo(id){
    return document.getElementById(id).value;
}




