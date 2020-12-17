class Solution:
    def searchRange(self, A: List[int], target: int) -> List[int]:
        n=len(A)
        left =0
        ans=-1
        right =n-1
        while left<=right:
            mid=(left+right)//2
            if A[mid]==target:
                ans=mid
                right =mid-1
            elif A[mid]>target:
                right = mid-1
            elif A[mid]<target:
                left=mid+1
      #Upper_Bound
        left =0
        ans1=-1
        right =n-1
        while left<=right:
            mid=(left+right)//2
            if A[mid]==target:
                ans1=mid
                left =mid+1
            elif A[mid]>target:
                right = mid-1
            elif A[mid]<target:
                left=mid+1
        ls=[ans,ans1]
        return ls
