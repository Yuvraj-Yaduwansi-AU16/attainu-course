class Solution:
    def countAndSay(self, n: int) -> str:
        if n==1:
            return "1"
        string="1"
        for i in range(1,n):
            new_string=""
            count=1
            for j in range(len(string)):
                if j==len(string)-1:
                    new_string=new_string+str(count)+string[j]
                    break
                if string[j]==string[j+1]:
                    count+=1
                else:
                    new_string=new_string+str(count)+string[j]
                    count=1
            
            string=new_string
        return new_string