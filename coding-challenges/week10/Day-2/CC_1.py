# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rightSideView(self, root: TreeNode) -> List[int]:
        if root == None: 
            return []
        queue, result = [root], []
        while queue:
            result.append(queue[-1].val)
            new_queue = []
            for node in queue:
                if node.left: 
                    new_queue.append(node.left)
                    
                if node.right: 
                    new_queue.append(node.right)
            queue = new_queue
        return result