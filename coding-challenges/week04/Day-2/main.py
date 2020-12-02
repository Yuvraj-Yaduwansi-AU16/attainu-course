from bank import Bank
from account import Account
from user import User
if __name__ == "__main__":
    account = Account(input("Enter Your Bank Name : \n"), input("Enter your branch:\n"))

    print("Enter the number of accounts you wish to add")
    num =int(input())
    while num>0:
        name=User(input("Enter your Name "))
        account.add_account(name.register_user())
        print("Your Account has been Created")
        num-=1

    account.list_all_accounts()
    print("Do you wish to delete any account: \n Enter 1 for yes and 0 for No")
    choice = int(input())
    if choice == 1:
        print("Enter the name of Account Holder whose account you wish to delete")
        delete_name = input()
        account.delete_account(delete_name)
    else:
        print("Accounts created: Have a Nice Day")



    
    
    