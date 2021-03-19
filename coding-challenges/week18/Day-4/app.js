const numInput = document.querySelector('#num-input');
const queueArray = [];

const mainCOntainer = document.querySelector('.main');

const addQueue = document.querySelector('.add');
const removeQueue = document.querySelector('.remove');


const div = document.createElement('div');
div.className = 'container';

addQueue.addEventListener('click', pushToQueue);
removeQueue.addEventListener('click', removeFromQueue);

function pushToQueue(e){

    e.preventDefault();
    const inputValue = parseInt(numInput.value);
    if(isNaN(inputValue)){
        displayMsg('*PLease Enter a Number');
        
    }else{

    queueArray.push(inputValue);
    updateQueueArray();

    }
}

function removeFromQueue(e){
    e.preventDefault();
    if(queueArray.length == 0){
        displayMsg('*Stack is Empty');

    }else{
        
        queueArray.shift();
        updateQueueArray();
    
    }

}

function updateQueueArray(){
    var spanElements = queueArray.map(function(item){
        return '<span class="h1 fs-1">'+item+'</span>';


    })
    div.innerHTML = spanElements;
    div.firstChild.style.color = 'red';
    div.lastChild.style.color = 'green';
    mainCOntainer.appendChild(div);
    numInput.value = '';

}

function displayMsg(msg){
    const divElement = document.querySelector('.mb-3');
    const labelElement = document.querySelector('.form-control');
    const para = document.createElement('p');
    para.innerText = msg;
    para.className = ' alert text-danger fs-5'
    divElement.insertBefore( para,labelElement);
    setTimeout(clearMsg, 1500);
}

function clearMsg(){
    document.querySelector('.alert').remove();

}
