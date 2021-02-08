class Solution:
    def minMoves(self, nums: List[int]) -> int:
        minimun = min(nums)
        total = 0
        for i in nums:
            total += (i - minimun)
        return total