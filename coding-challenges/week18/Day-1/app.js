const num1= document.querySelector('#Number1')
const num2= document.querySelector('#Number2')
const attachingelement = document.querySelector('.container')

const add = document.getElementById('add');
add.addEventListener('click',function(e){
    
    const div= document.createElement('div');
    div.className ='container'
    const heading =document.createElement('h1')
    heading.className= 'heading fw-normal m-5 text-center text-warning';
    const sum = parseInt(num1.value) +parseInt( num2.value);
    heading.innerText = `${num1.value}+ ${num2.value} = ${sum}`;
    div.appendChild(heading);
    attachingelement.appendChild(div);
    num1.value='';
    num2.value='';


    e.preventDefault();
})
