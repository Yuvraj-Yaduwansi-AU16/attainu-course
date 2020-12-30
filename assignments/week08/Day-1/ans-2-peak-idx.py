class Solution:
    def peakIndexInMountainArray(self, arr: List[int]) -> int:
        left = 0
        right = len(arr) - 1
        
        while left < right:
            mid = (left + right) // 2
            
            if arr[left] > arr[left + 1]:
                return left
            
            elif arr[right] > arr[right - 1]:
                return right
                
            elif arr[mid] > arr[mid + 1] and arr[mid] > arr[mid - 1]: 
                return mid
            
            elif arr[mid] > arr[mid + 1]:
                right = mid - 1
                
            elif arr[mid] > arr[mid - 1]:
                left = mid + 1