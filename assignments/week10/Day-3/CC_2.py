# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def mergeTrees(self, t1: TreeNode, t2: TreeNode) -> TreeNode:
        answer_node = TreeNode()
        if t1 is None: 
            return t2
        if t2 is None: 
            return t1

        answer_node.val = t1.val + t2.val

        answer_node.left = self.mergeTrees(t1.left, t2.left)
        answer_node.right = self.mergeTrees(t1.right, t2.right)
        
        return answer_node