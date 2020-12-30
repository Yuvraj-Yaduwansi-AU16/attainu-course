class Solution:
    def wiggleSort(self, nums: List[int]) -> None:
        if not nums:
            return
        nums.sort()
        
        if len(nums) % 2:
            half = len(nums) // 2 + 1
            nums[::2], nums[1::2] = nums[:half][::-1], nums[half:][::-1]
        
        else:
            half = len(nums) // 2
            nums[::2], nums[1::2] = nums[:half][::-1], nums[half:][::-1]