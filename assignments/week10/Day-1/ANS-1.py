# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rangeSumBST(self, root: TreeNode, low: int, high: int) -> int:
        sum = 0
        def findSum(root):
            nonlocal sum
            
            if root is None:
                return 0
            
            if low <= root.val <= high:
                sum += root.val
            
            if root.left is not None:
                findSum(root.left)
            
            if root.right is not None: 
                findSum(root.right)
        
        findSum(root)
        return sum