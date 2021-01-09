# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        queue = []
        final = []
        if root is not None:
            queue.append(root)
        while (len(queue) != 0):
            curr_len = len(queue)
            curr_list = []
            for i in range(curr_len):
                node=queue.pop(0)
                curr_list.append(node.val)
                if node.left is not None:
                    queue.append(node.left)
                if node.right is not None:
                    queue.append(node.right)
            final.append(curr_list)
        return final