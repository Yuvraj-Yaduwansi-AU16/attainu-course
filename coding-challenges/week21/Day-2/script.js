(async function load(){
    const quiz = await fetch('https://opentdb.com/api.php?amount=5&category=11&type=multiple')
    const data = await quiz.json();
    Load.dataContent = data.results;
    Load.loadUI();

})();


class Load{
    static headingCnt=1;
    static dataContent;
    static ans;
    static userInputAns;
    static key=0;
    static correctAnsCnt=0
    static prevbtn = document.getElementById('btn-prev')
    static loadHeading(){
        document.querySelector('.ques-heading').innerText = `Question : ${Load.headingCnt}`;
        Load.headingCnt+=1
    }
    static getUSerOption(e){
        e.preventDefault();
        if (document.getElementById('1-input').checked) {
            Load.userInputAns = document.getElementById('1').innerText;
        }
        if (document.getElementById('2-input').checked) {
            Load.userInputAns = document.getElementById('2').innerText;
        }
        if (document.getElementById('3-input').checked) {
            Load.userInputAns = document.getElementById('3').innerText;
        }
        if (document.getElementById('4-input').checked) {
            Load.userInputAns = document.getElementById('4').innerText;
        }
        if(Load.userInputAns === Load.ans) Load.correctAnsCnt+=1;
        Load.loadUI();
        

        }

    static loadUI(){
        if(Load.headingCnt<=5){
            Load.loadHeading();
            const ques = Load.dataContent[Load.key].question;
            Load.ans = Load.dataContent[Load.key].correct_answer;
            console.log(Load.ans);
            const options = Load.dataContent[Load.key].incorrect_answers;
            document.getElementById('question').innerText = ques;
            options.push(Load.ans)
            Load.shuffle(options);
            Load.key+=1;

        }else Load.displayResult();            

    }

    static loadOptions(options){
        let id = 1
        for (const iterator of options) {
            document.getElementById(`${id}`).innerText = iterator;
            id+=1;
        }
    }

    static  shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        Load.loadOptions(a);
    }

    static displayResult(){
        const div = document.createElement('div')
        div.className ='text-center'
        const h3 = document.createElement('h3')
        h3.innerText = `You Got ${Load.correctAnsCnt} answers correct out of 5.`
        const a = document.createElement('a')
        a.href=''
        a.className = 'btn btn-success';
        a.innerText ='Play Again';
        div.appendChild(h3)
        div.appendChild(a)
        const body = document.getElementById('main-body')
        const container = document.querySelector('.container')
        body.insertBefore(div,container)
        container.style.display = 'none';
    }
    
}
document.getElementById('btn-next').addEventListener('click',Load.getUSerOption)
