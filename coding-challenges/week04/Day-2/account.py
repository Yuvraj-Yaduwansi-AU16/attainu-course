from bank import Bank
from user import User
class Account(Bank):
    def __init__(self , bank_name,bank_branch):
        super().__init__(bank_name,bank_branch)
        self.bank_name= bank_name
        self.bank_branch = bank_branch
        self.account_details =[]

    def add_account(self, account_holder):
        self.account_details.append(account_holder)

    def delete_account(self , delete_name):
        for i in self.account_details:
            if i == delete_name:
                self.account_details.pop(i)

        print(f"{delete_name} Your account has been deleted from bank {self.bank_name} of branch {self.bank_branch} \n Have a Nice Day")
    
    
    def list_all_accounts(self):
        print()
        print(f"All account details in the bank {self.bank_name} of branch {self.bank_branch} are:")
        print(self.account_details)
