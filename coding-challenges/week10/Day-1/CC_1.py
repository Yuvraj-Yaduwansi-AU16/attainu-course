# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def inorder(self, node, A):
        if node.left:
            self.inorder(node.left,A)
        A.append(node.val)
        if node.right:
            self.inorder(node.right,A)
        return A
    def kthSmallest(self, root: TreeNode, k: int) -> int:
        A = []
        res = self.inorder(root,A)
        return res[k-1]