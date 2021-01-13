# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isBalanced(self, root: TreeNode) -> bool:
        def solve(root,isBal=True):
            if root is None or not isBal:
                return 0, isBal
            left, isBal = solve(root.left, isBal)
            right, isBal = solve(root.right, isBal)
            if abs(left - right) > 1:
                isBal = False
            return max(left, right) + 1, isBal
        x, y = (solve(root))
        return y
        