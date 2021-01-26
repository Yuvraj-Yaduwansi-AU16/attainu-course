class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        count = dict()
        for i in nums:
            if i in count:
                count[i]+=1
            else:
                count[i]=1
        max=len(nums)
        max//=2
        for value,key in count.items():
            if key >max:
                number= value
        return number
                