class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        ls=list()
        for i in range (numRows):
            if i==0:
                ls.append([1])
            elif i==1:
                ls.append([1,1])
            else:
                new=list()
                c=0
                while c<3:
                    if c==0:
                        new.append(1)
                    elif c==2:
                        new.append(1)
                    else:
                        temp=ls[i-1]
                        for j in range(1,len(temp)):
                                sum=0
                                sum=temp[j]+temp[j-1]
                                new.append(sum)
                    c+=1
                ls.append(new)
        return ls
                
                        