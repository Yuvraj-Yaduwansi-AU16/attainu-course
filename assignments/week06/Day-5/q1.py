class Solution:
    def frequencySort(self, nums: List[int]) -> List[int]:
        temp=dict()
        for i in nums:            # Storing values in dictionary
            if i in temp:
                temp[i]+=1
            else:
                temp[i]=1
        temp=sorted(temp.items(), key=lambda x: x[1])  #sorting dict
        x=len(temp)
        for check in range (x):                   # checking if count of 2 elements is same and if it is then reversing them
            for j in range (check+1,x):
                if temp[check][1]== temp[j][1] and temp[check][0]< temp[j][0]:
                    temp[check] , temp[j] = temp[j] , temp[check]
        result=list()
        for i in range(x):          #storing elements in final list to return and print them
            for j in range (temp[i][1]):
                    result.append(temp[i][0])
        return result
                    