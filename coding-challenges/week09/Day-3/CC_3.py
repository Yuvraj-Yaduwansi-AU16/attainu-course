# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def postorderTraversal(self, root: TreeNode) -> List[int]:
        if not root: 
            return []

        stack = [] 
        final = []
        node = root
        prev = None
        
        while stack or node:
            while node:
                stack.append(node)
                node = node.left
            node = stack[-1]
            
            if not node.right or node.right == prev: 
                prev = stack.pop()
                final.append(node.val)
                node = None
            else:
                node = node.right
        return final