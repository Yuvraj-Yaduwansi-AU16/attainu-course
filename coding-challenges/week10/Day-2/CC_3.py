# Definition for a binary tree node.
class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
max_level=-1
def left(root, cur):
    global max_level
    if root is None:
        return
    if cur>max_level:
        print(root.val , end = " ")
        max_level=cur
    left(root.left,cur+1)
    left(root.right,cur+1)

if __name__ == "__main__":

    root = TreeNode(1)
    root.left = TreeNode(2)
    root.right = TreeNode(3)
    root.left.left = TreeNode(4)
    root.left.right = TreeNode(5)
    root.right.left = TreeNode(6)
    root.right.right = TreeNode(7)
    left(root,0)

    
