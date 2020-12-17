class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        x=len(nums)
        if x==1:
            return 0
        for i in range (x):
            if i==0 and nums[i]>nums[i+1]:
                return i
            elif i==(x-1) and nums[i]>nums[i-1]:
                return i
            elif nums[i]>nums[i-1] and nums[i]>nums[i+1]:
                return i
            