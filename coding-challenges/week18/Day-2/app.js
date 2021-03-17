const inputText= document.querySelector('#Text')
const history = document.querySelector('.history')

const stackPush = document.getElementById('push');
const stackPop = document.getElementById('pop');


stackPush.addEventListener('click',function(e){

    if(inputText.value === ''){
        alert('You need to enter value to push into the stack')
    }else{

        const heading =document.createElement('h2')
        heading.className= 'heading fw-normal m-5 text-center text-warning fs-1';
        console.log(inputText.value);
        heading.innerText = `${inputText.value}`;
        history.appendChild(heading);
        inputText.value='';
    
    
        e.preventDefault();
    }
    
    
});

stackPop.addEventListener('click',function(e){

    const lastElement = history.lastElementChild;
    
    if(lastElement != null){
        
        lastElement.remove();
    }else{
        alert('Stack is Empty')
    }


    e.preventDefault();

});