const calculate = document.getElementById('loan-form')
calculate.addEventListener('submit',function(e){
    document.getElementById('results').style.display='none';
    loanclac();

    e.preventDefault();
});

const amt = document.getElementById('amount')
const interest = document.getElementById('interest')
const years = document.getElementById('years')

const monthlyPayment = document.getElementById('monthly-payment')
const totalPayment = document.getElementById('total-payment')
const totalInterest = document.getElementById('total-interest')

function loanclac() {
    const principal = parseFloat(amt.value);
    const calculatedInterest = parseFloat(interest.value) /100 /12;
    const calculatedPayments = parseFloat(years.value) *12;
    
    const x=Math.pow(1+calculatedInterest,calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);

    if(isFinite(monthly)){
        monthlyPayment.value=monthly.toFixed(2);
        totalPayment.value=(monthly*calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly*calculatedPayments)-principal).toFixed(2);

        document.getElementById('results').style.display='block';
    }else{
        showError('Please check your values');
         
    }



}


function showError(error) {
    document.getElementById('results').style.display='none';
    const div = document.createElement('div');
    const card= document.querySelector('.card');
    const heading= document.querySelector('.heading');
    div.className='alert alert-danger';
    div.innerText= `${error}`;
    card.insertBefore(div,heading);

    setTimeout(clearError,3000);

    
}

function clearError() {
    document.querySelector('.alert').remove();
    
}