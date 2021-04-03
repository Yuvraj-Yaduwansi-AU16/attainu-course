(async function load(){
    const apidata = await fetch('https://jsonplaceholder.typicode.com/users')
    const usersdata = await apidata.json();
    usersdata.forEach((element , idx) => {
        let arrayStr = element.name.split(' ');
        let firstName = arrayStr[0];
        let lastName = arrayStr[1];
        const row = document.getElementById(`${idx}`)
        for(let i=1;i<=2;i++){
            const td = document.createElement('td');
            if(i===1) td.innerText= firstName
            else td.innerText = lastName
            row.appendChild(td);
        }
    });
})();

class Event{
    static keydownEvent(){
        const input = document.getElementById('input-field');
        input.addEventListener('keyup',(e)=>{
            let checkStr = e.target.value;
            checkStr = checkStr.toLowerCase();
            const trNodeList = document.querySelectorAll('tr');
            for (let i = 1; i <=10 ; i++) {
                const firstName =trNodeList[i].children[1].innerText.toLowerCase();
                const lastName =trNodeList[i].children[2].innerText.toLowerCase();
                if(firstName.includes(checkStr)|| lastName.includes(checkStr)){
                    trNodeList[i].style.display= 'table-row';
                }
                else trNodeList[i].style.display = 'none';
                
            }
        });

    }
}
Event.keydownEvent();
