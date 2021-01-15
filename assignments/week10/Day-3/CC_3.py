# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def __init__(self):
        self.final = []
        
    def inOrder(self,root):
        if not root:
            return
        
        self.inOrder(root.left)
        self.final.append(root.val)
        self.inOrder(root.right)
        
    def increasingBST(self, root: TreeNode) -> TreeNode:
        self.inOrder(root)
        final_node = TreeNode(self.final[0])
        temp_node = final_node
        
        for i in range(1,len(self.final)):
            temp_node.right = TreeNode(self.final[i])
            temp_node = temp_node.right
            
        return final_node