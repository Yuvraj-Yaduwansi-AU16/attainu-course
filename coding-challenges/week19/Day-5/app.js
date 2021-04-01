const imgBtn = document.querySelector('.btn-success')
const imgDiv = document.querySelector('.img-div')
const mainDiv = document.querySelector('.main')
const sectionDiv = document.querySelector('.card-section')
const img = document.querySelector('.card-img-top')
const cardText = document.querySelector('.card-text')
let count= 0;



document.addEventListener('DOMContentLoaded',()=> imgDiv.style.display = 'none')


imgBtn.addEventListener('click',(e)=>{
    count+=1;
    if (count%2==0) oldMethod(); 
    else newMethod();
    
    imgDiv.style.display = 'block'
    e.preventDefault();
})

async function newMethod(){
    
    try {
        const fetchObj = await fetch('https://dog.ceo/api/breeds/image/random')
        const responseObj = await fetchObj.json();
        img.src = responseObj.message
        cardText.innerText = 'Async/Await';
        
    } catch (error) {
        displaymsg()   
    }
    
    
}

function oldMethod(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((resolve)=> resolve.json())
    .then((data)=>{
        img.src = data.message
        cardText.innerText = 'Then/Catch';
        
        
    })
    .catch(()=> displaymsg())
}

function displaymsg(){
    const errorDiv =document.createElement('div');
    errorDiv.className = 'container my-4';
    const errorTxt =document.createElement('h4');
    errorTxt.innerText = '*Failed to load Image';
    errorTxt.className = 'text-center text-warning';
    errorDiv.appendChild(errorTxt);
    mainDiv.insertBefore(errorDiv,sectionDiv)

    setTimeout(()=> errorDiv.style.display='none',2000)

    
}