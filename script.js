document.addEventListener('DOMContentLoaded',()=>{
   document.getElementById('submitInfo').addEventListener('click', ()=>{
        console.log('click');
           let input = document.getElementById('fullName');
           console.log(input);
            console.log(typeof input.innerHTML);
            let name = input.innerHTML;
            console.log(name.length);
           })
   })