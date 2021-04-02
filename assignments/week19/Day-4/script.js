class UI{
    static displaymsg(msg){
        const txt = document.createElement('section')
        txt.innerHTML = `
        <div class="alert alert-danger" role="alert">
        ${msg}
        </div>`
        document.querySelector('.main').insertBefore(txt,document.querySelector('.img-container'))
        setTimeout(()=>txt.style.display='none',2000)        
    }
}

class ContentLoaders{
        // Click Events Variables
        static submit = document.querySelector('#form-submit')
        static cardNum = document.querySelector('#card-number')
        static cardName = document.querySelector('#card-name')
        static btnMonth = document.querySelector('#btn-month')
        static btnYear = document.querySelector('#btn-year')
        static CVVinput = document.querySelector('#cvv-input')
        static removeData = document.querySelector('.remove-all')
        
        
        // Appending Data to Card
        // For All Spans Of Card Number
        static firstSpan = document.querySelector('#first')
        static secondSpan = document.querySelector('#second')
        static thirdSpan = document.querySelector('#third')
        static fourthSpan = document.querySelector('#fourth')
    
        static monthDisp = document.querySelector('#card-month-display')
        static yearDisp = document.querySelector('#card-year-display')
        // For Name
        static holdersName = document.querySelector('.name')
        
        
        
        static main = document.querySelector('.main')
        static imgContainer = document.querySelector('.img-container')
        static input;
        
        static array = ['January','Feburary','March','April','May','June','July','August','September','October','November','December'];
        static numvalue='';
        static namevalue='';
        static count=0;
        static CVVcount=0;
    
    static AllCOntent(){
        ContentLoaders.submit.addEventListener('click',ContentLoaders.submitFunction)
        ContentLoaders.cardNum.addEventListener('keyup',ContentLoaders.cardNumKeyUp)
        ContentLoaders.cardName.addEventListener('blur',ContentLoaders.cardNameBlur)
        ContentLoaders.btnMonth.addEventListener('click',ContentLoaders.btnMonthClick)
        ContentLoaders.btnYear.addEventListener('click',ContentLoaders.btnYearClick)
        ContentLoaders.CVVinput.addEventListener('blur',ContentLoaders.CVVinputBlur)
        ContentLoaders.CVVinput.addEventListener('keyup',ContentLoaders.CVVinputKeyUp)
        ContentLoaders.CVVinput.addEventListener('focus',ContentLoaders.CVVinputFocus)
        
        document.addEventListener('click',(e)=>{
            if(e.target.classList.contains('month-dropdown')){
                const clickedMonth = e.target.innerText;
                ContentLoaders.array.forEach((month ,idx)=>{
                    if(month===clickedMonth){
                        if(idx<10){  
                            ContentLoaders.monthDisp.innerText= `0${idx}`;
                        }else{
                            ContentLoaders.monthDisp.innerText= `${idx}`;
                        }
                    }
                })     
                
            }if(e.target.classList.contains('year-dropdown')){
                const clickedYear = e.target.innerText;
                ContentLoaders.yearDisp.innerText= clickedYear%100;
            }
        })
    }
    
    static submitFunction(e){
        if(ContentLoaders.count!=16 || ContentLoaders.CVVcount !=3 || ContentLoaders.namevalue===''|| ContentLoaders.monthDisp.innerText === 'MM' || ContentLoaders.yearDisp.innerText ==='YY') UI.displaymsg('Invalid Data')
        else{
            UI.displaymsg('Data entered Successfully')
            setTimeout(()=>location.reload() , 2000)
    
        }
        e.preventDefault();
    }
    static cardNumKeyUp(e){
        if( e.which == 8 || e.which == 46 ) ContentLoaders.count-=1; else ContentLoaders.count+=1;
        
        ContentLoaders.numvalue = ContentLoaders.cardNum.value;
        
        if(ContentLoaders.count===4) ContentLoaders.firstSpan.innerText = ContentLoaders.numvalue;
        if(ContentLoaders.count ===8) ContentLoaders.secondSpan.innerText = 'XXXX';    
        if(ContentLoaders.count ===12) ContentLoaders.thirdSpan.innerText = 'XXXX';    
        if(ContentLoaders.count ===16) ContentLoaders.fourthSpan.innerText = ContentLoaders.numvalue%(Math.pow(10,4));
        if(ContentLoaders.count>16) UI.displaymsg('Please Check Your Card Number!');
        
    }
    static cardNameBlur(e){
        
        ContentLoaders.namevalue = ContentLoaders.cardName.value;
        ContentLoaders.holdersName.innerText = ContentLoaders.namevalue;   
    }

    static btnMonthClick(){
        document.querySelector('#month-dropdown').innerHTML='';
        ContentLoaders.array.forEach((mon)=>{
            const li = document.createElement('li');
            li.innerHTML = `<a class="dropdown-item month-dropdown" href="#">${mon}</a>`
            document.querySelector('#month-dropdown').appendChild(li)
        })
    }
    
    static btnYearClick(){
        document.querySelector('#year-dropdown').innerHTML='';
        const Yeararray = ['22','23','24','26','27','28','29','30','31','32','33','34','35'];
        Yeararray.forEach((year)=>{
            const li = document.createElement('li');
            li.innerHTML = `<a class="dropdown-item year-dropdown" href="#">20${year}</a>`
            document.querySelector('#year-dropdown').appendChild(li)
        })
    }
    
    static CVVinputFocus(e){
        ContentLoaders.removeData.style.opacity ='0';
        
        const div = document.createElement('div')
        div.style.position='absolute';
        div.style.top='40%';
        div.style.width='30vw';
        div.className='cvv-class';
        
        const heading = document.createElement('h3')
        heading.innerText='CVV'
        heading.className='text-light fs-4'
        ContentLoaders.input = document.createElement('h3');
        ContentLoaders.input.className= 'bg-light';
        div.appendChild(heading)
        div.appendChild(ContentLoaders.input)
        ContentLoaders.imgContainer.appendChild(div)
        if (ContentLoaders.CVVcount===3) ContentLoaders.input.innerText='XXX';
        
        
    }
    
    static CVVinputBlur(e){
        ContentLoaders.removeData.style.opacity ='1.0';
        document.querySelector('.cvv-class').remove();
        
    }
    
    static CVVinputKeyUp(e){
        if( e.which == 8 || e.which == 46 ) ContentLoaders.CVVcount-=1; else ContentLoaders.CVVcount+=1;
        
        ContentLoaders.numvalue = ContentLoaders.CVVinput.value;
        if (ContentLoaders.CVVcount===3) ContentLoaders.input.innerText='XXX';
        if(ContentLoaders.CVVcount>3) {
            ContentLoaders.CVVcount = 0;
            ContentLoaders.CVVinput.value='';
            ContentLoaders.input.innerText='';
            UI.displaymsg('Please Check Your CVV Number!') 
        }  
        
    }
}

ContentLoaders.AllCOntent();





