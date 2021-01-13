# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isValidBST(self, root: TreeNode) -> bool:
        result = []
        self._in_order(root, result)
        for i in range(1, len(result)):
            if result[i - 1] >= result[i]:
                return False
        return True
    
    def _in_order(self, root : TreeNode, result: list) -> list:
        if root is None: 
            return
        self._in_order(root.left, result)
        result.append(root.val)
        self._in_order(root.right, result) 
