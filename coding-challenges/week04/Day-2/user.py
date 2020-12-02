import random
class User:
    def __init__(self, name):
        self.account_holder ={
            'Name' : name ,
            'Account_Number': 0
        }

    def register_user(self):
        self.account_holder['Account_Number'] = random.randint(100000 , 999999)
        return self.account_holder


