class Solution:
    def trap(self, height):
        area = 0
        max_left = max_right = 0
        left = 0
        right = len(height) - 1
        
        while left < right:
            
            if height[left] < height[right]:
                
                if height[left] > max_left:
                    max_left = height[left]
                else:
                    area += max_left - height[left]
                left += 1
            else:
                
                if height[right] > max_right:
                    max_right = height[right]
                
                else:
                    area += max_right - height[right]
                right -= 1
                
        return area