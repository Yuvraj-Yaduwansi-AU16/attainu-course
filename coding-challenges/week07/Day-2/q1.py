class Solution:
    def isPalindrome(self, s: str) -> bool:
        normal=""
        rev=""
        for i in s:
            if i.isalpha() == True or i.isnumeric()==True:
                if i.isupper()==True:
                    i=i.lower()
                rev=i+rev
                normal=normal+i
        if rev==normal:
            return True
        else:
            return False
            