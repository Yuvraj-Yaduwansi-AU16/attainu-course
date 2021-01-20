class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        n = len(nums)
        dp = [1] * n

        for j in range(1, n):
            for i in range(0, j):
                if nums[i] < nums[j]:
                    dp[j] = max(dp[j], dp[i] + 1)

        return max(dp)