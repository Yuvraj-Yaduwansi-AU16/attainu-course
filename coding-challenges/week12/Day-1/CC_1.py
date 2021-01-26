# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def diameterOfBinaryTree(self, root: TreeNode) -> int:
        if root is None:
            return 0
        lh=self.height(root.left)
        rh=self.height(root.right)
        lda= self.diameterOfBinaryTree(root.left)
        rda= self.diameterOfBinaryTree(root.right)
        ans= max(lh+rh, max(lda,rda))
        return ans
    
    def height(self,root):
        if root is None:
            return 0
        return 1 + max(self.height(root.left), self.height(root.right))