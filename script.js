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
};



document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submitInfo').addEventListener('click', () => {

        let name = getInfo('fullName')
        console.log(name);


        (function() {
            let inputs = document.querySelectorAll('.search');
            let arrayData = [];

            function save() {
                for (let i = 0; i < inputs.length; i++) {
                    arrayData[i] = inputs[i].value;
                }
                console.log(arrayData);
            }
            save();
        })();

    })

})