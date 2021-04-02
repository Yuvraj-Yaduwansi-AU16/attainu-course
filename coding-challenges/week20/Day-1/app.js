const submit = document.querySelector('.btn-primary')
const inputStr = document.querySelector('#input-str')
const formTag = document.querySelector('#form-tag')

submit.addEventListener('click',(e)=>{
    const inputarr = inputStr.value.split(',')
    const firstStr = inputarr[0];
    const secondStr = inputarr[1];
    if(inputStr.value!='' && inputStr.value.includes(',')){
        if(firstStr.length === secondStr.length){
            let count=0;
            for(let i=0;i<firstStr.length;i++){
                if(firstStr[i].toLowerCase()!= secondStr[i].toLowerCase()) count+=1;
            }
            document.getElementById('output').innerText = count;
        }else{
            
            displaymsg();
        }
    }else displaymsg();
    e.preventDefault();
})

function displaymsg(){
    const msg = '*Please enter valid string with ,';
    const para =document.createElement('p');
    para.innerText = msg;
    para.className = 'text-danger'
    formTag.insertBefore(para,submit)
    setTimeout(()=>para.style.display='none',2000)

}