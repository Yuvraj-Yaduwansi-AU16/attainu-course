# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> ListNode:
        ca, cb = 0, 0
        nodeA, nodeB = headA, headB
        while nodeA:
            nodeA = nodeA.next
            ca += 1
        while nodeB:
            nodeB = nodeB.next
            cb += 1
        nodeA, nodeB = headA, headB
        if ca > cb:
            i = ca - cb
            while i > 0:
                nodeA = nodeA.next
                i -= 1
        else:
            i = cb - ca
            while i > 0:
                nodeB = nodeB.next
                i -= 1
        while nodeA:
            if nodeA == nodeB:
                return nodeA
            nodeA = nodeA.next
            nodeB = nodeB.next
        return None