function getInfo(id){
    return document.getElementById(id).value;
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



document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submitInfo').addEventListener('click', () => {

    })
})