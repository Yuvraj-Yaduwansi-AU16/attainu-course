class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        l =len(nums)
        if l==0:
            return 1
        for i in range(1,l+1):
            if i not in nums:
                return i
        return i+1