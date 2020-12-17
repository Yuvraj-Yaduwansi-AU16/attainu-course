# Leetcode solution
class Solution(object):
    def pivotIndex(self, nums):
        full_sum = sum(nums)
        left_side_sum = 0
        for i in range(len(nums)):
            if left_side_sum == (full_sum - left_side_sum - nums[i]):
                 return i
            left_side_sum += nums[i]
        return -1

# Using Recurssion On VSCode Not on Leetcode 

left_side_sum=0
i=0
def pivot(nums):
    global left_side_sum
    global i
    S=sum(nums)
    if i== (len(nums)-1):
        return -1
    if l==(S-left_side_sum-nums[i]):
        return i
    left_side_sum+=nums[i]
    i+=1
    pivot(nums)
    return -1
if __name__ == "__main__":
    print(pivot([1,7,3,6,5,6]))

