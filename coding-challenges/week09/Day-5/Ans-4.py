# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def countNodes(self, root: TreeNode) -> int:
        if root is None: return 0
        height_l, height_r, left_node, right_node = 0, 0, root, root
        
        while left_node is not None:
            height_l += 1
            left_node = left_node.left
        
        while right_node is not None:
            height_r += 1
            right_node = right_node.right
        
        if height_r == height_l:
            return (1 << height_r) - 1
        else:
            return 1 + self.countNodes(root.left) + self.countNodes(root.right)