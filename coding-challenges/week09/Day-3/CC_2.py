# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def preorderTraversal(self, root: TreeNode) -> List[int]:
        stack = list()
        final=list()
        while(1):
            while root:
                final.append(root.val)
                stack.append(root)
                root = root.left

            if len(stack)==0:
                return final
            root=stack.pop()
            root=root.right
