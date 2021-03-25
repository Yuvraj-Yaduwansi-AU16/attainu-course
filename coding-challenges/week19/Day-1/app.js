const generate = document.querySelector('.generate');

document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('.result').style.display = 'none'

})

generate.addEventListener('click',(e)=>{
    document.querySelector('.result').style.display = 'block'
    const string = document.querySelector('#stringinput').value;
    let stack = [];
    
    for(let i = 0; i < string.length; i++) {
        if(string[i] !== '#') {
            stack.push(string[i]);
        } else if(stack.length > 0) {
            stack.pop();
        };
    };
    document.querySelector('.output-string').innerText = stack.join('');
    document.querySelector('.input-string').innerText = string;
    document.querySelector('#stringinput').value = '';
    e.preventDefault();
});