# In leetcode it is said to do this question with binary search so that's what I've done
# I don't understand how to implement lowerbound or upperbound in in ques as if number is not present we have to return -1
#furthermore with both lowerbound and upperbound code we will get exact same position output as ques says all numbers in list are unique
#I know how to use those two logics but implementing them here is something I'm unable to grasp on.

class Solution:
    def search(self, nums: List[int], target: int) -> int:
        left=0
        right=len(nums)-1
        while left<=right:
            mid=(left+right)//2
            if nums[mid]==target:
                return mid
            elif nums[mid]>target:
                right = mid-1
            elif nums[mid]<target:
                left = mid+1
        return -1

        