class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        
        found = False
        
        for i in range(len(nums)):
            
            if found == False:
                
                if target - nums[i] in nums and target / 2 != nums[i]:
                    left = i
                    found = True
                
                if target / 2 == nums[i] and nums.count(nums[i]) > 1:
                    left = i
                    found = True                    
            
            else: 
                
                if nums[i] == target - nums[left]:
                    
                    return [left, i]   