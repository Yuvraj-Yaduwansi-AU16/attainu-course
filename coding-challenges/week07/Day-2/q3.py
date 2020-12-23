#Method 1
#Using maths logic
x=len(nums)
res=[0]*x
res[0]=1    #No element before nums[0] so we make it 1 for multiplication purpose
for i in range (1,x):  #Multiplication of array from left side
    res[i]=nums[i-1]*res[i-1]
c=1                 #No element after nums[x-1] i.e. last element so we make it 1 for multiplication purpose 
for i in range(x-1,-1,-1):
    res[i]=res[i]*c
    c*=nums[i]
return res
    
#Method 2
#using in-built method of python
from functools import reduce
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        x=len(nums)
        res=[] 
        for i in range (x):
            copy=nums[:]
            copy.pop(i)
            res.append(reduce((lambda x, y: x * y), copy))
        return res