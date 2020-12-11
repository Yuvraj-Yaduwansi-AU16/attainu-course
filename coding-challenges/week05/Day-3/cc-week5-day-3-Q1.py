class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        twice = 0
        for i in nums:
            twice^=i
        return twice