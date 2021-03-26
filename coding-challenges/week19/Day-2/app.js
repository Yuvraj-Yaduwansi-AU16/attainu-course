// Run HTML file and enter values in prompt to see results
class Bank{
    constructor(){
        this.code = 'ICICI';
        this.address = 'Lucknow';
    }
    static accCounter = 0;
    static getAccounts(){
        console.log(`Total number of accounts are : ${this.accCounter}`);
        console.log(Account.accounts);
    }
}
class Account extends Bank{
    constructor(code,address){
        super(code,address);
        this.accNum = Math.floor(Math.random()*1000000000);
        this.bal = 0;
    }
    static accounts =[];
    deposit(amt){
        this.bal+=amt;
        console.log(`Amount Successfully Deposited.Have a Nice Day!`);
    }
    withdraw(amt){
        if(amt>this.bal){
            console.log('Low Balance');
        }else{
            this.bal=-amt;
            console.log('Collect Your Cash');
        }
        
    }
    static createAccounts(obj){
        console.log('Account has been created');
        Bank.accCounter+=1;
        obj.bal = 0;
        obj.transactionHistory = [];
        Account.accounts.push(obj);
    }
}

class ATM extends Account{
    constructor(location,managedby){
        super()
        this.location = location;
        this.managedby = managedby;
    }
    withdraw(amt){
        const user = prompt('Enter your PIN');
        Account.accounts.forEach((acc)=>{
            if(parseInt(acc.PIN) === parseInt(user)){
                if(acc.bal>amt){
                    acc.bal-=amt
                    console.log('Collect ur Cash');
                    ATMtransactions.modifies(amt,acc.bal,user);
                }else{
                    console.log('Insufficient Balance');
                }
            }
        })
        
    }
    deposit(amt){
        const user = prompt('Enter your PIN');
        Account.accounts.forEach((acc)=>{
            if(parseInt(acc.PIN) === parseInt(user)){
                acc.bal+=amt
                ATMtransactions.modifies(amt,acc.bal,user);
                console.log('Amount Deposited Successfully');
            }
        })
    }
    checkBalance(){
        const user = prompt('Enter your PIN');
        Account.accounts.forEach((acc)=>{
            if(parseInt(acc.PIN) === parseInt(user)){
                console.log(`Current Balance is: ${parseInt(acc.bal)}`);
            }
        });
    }
}
class ATMtransactions extends ATM{
    constructor(location,managedby){
        super(location,managedby)
    }
    static modifies(amt,postbal,user){
        let transactionHistory ={
            TransacID : Math.floor(Math.random()*1000000),
            Date : new Date,
            Type : 'Savings Account',
            Features : SavingsAccount.savingsFeatures,
            Amount : amt,
            Post_Bal : postbal
        }
        Account.accounts.forEach((acc)=>{
            if(parseInt(acc.PIN)=== parseInt(user)){
                acc.transactionHistory.push(transactionHistory);
            }
        })
    }
}

class Customer extends Account{
    constructor(name,address,dob,cardNum,pin,accNum,bal){
        super(accNum,bal);
        this.name = name;
        this.address = address;
        this.dob = dob;
        this.cardNum = cardNum;
        this.pin = pin;
        this.createUser();
        
    }
    createUser(){
        let obj = {
            Name: this.name,
            Address: this.address,
            DOB: this.dob,
            Card_Number: this.cardNum,
            PIN: this.pin,
        }
        Account.createAccounts(obj);
    }
    verifyPassword(){
        let pass = prompt('Verify Your PIN');
        if(parseInt(pass) === parseInt(this.pin)){
            console.log('Password Match! Welcome');
        }else{
            console.log('Password Mismatch.Please Try Again!');
        }
    }
}

class CheckingAccount extends Account{
    constructor(){
        super()
    }
    static checkFeatures =['Debit card for Atm withdrawals and merchant purchases',
                            'One free order of personal checks',
                            'Direct deposits from your employer or benefit plan.'
                            ,'Ability to send money with ACH transfers and wires']
    
}

class SavingsAccount extends Account{
    constructor(){
        super()
    }
    static savingsFeatures =['Minimum average balance.',
                            'Nominal interest rates.',
                            'Passbook and cheque facility.'
                            ,'Accessible for all age groups']
    
}
const axis = new Bank()
const acc = new Account()
const customer1 = new Customer('Jedi','In a Galaxy Far Far Away','19/11/1999','22512532','22')
const customer2 = new Customer('Yoda','Somewhere Anywhere','29/01/1994','24589532','25')
const customer3 = new Customer('Thor','Asgard','29/01/1794','24589532','45')
const customer4 = new Customer('Loki','Asgard','29/01/1798','24589582','68')
const atm = new ATM('Lucknow','AXIS');


atm.deposit(600)
atm.checkBalance()
atm.withdraw(500)
Bank.getAccounts();
