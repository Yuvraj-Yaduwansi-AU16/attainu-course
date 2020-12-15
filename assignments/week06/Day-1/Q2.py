class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        prev=-1
        ls=[-1,-1]
        for i in range (len(nums)):
            if nums[i]==target:
                ls[0]=i
                break
            prev=i
        prev1=-1
        for i in range (len(nums)):
            if nums[i]==target:
                ls[1]=i
            elif nums[i]>target:
                if nums[i-1]==target:
                    ls[1]=i-1
                    break
                else:
                    break
            prev1=i
        return ls