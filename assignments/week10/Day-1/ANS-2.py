class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        running_sum = []
        sum = 0
        for i in nums:
            sum += i
            running_sum.append(sum)
        
        return running_sum