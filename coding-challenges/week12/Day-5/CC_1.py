# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        fwd=head
        if fwd is None :
            return 
        while fwd.next is not None:
            if fwd.val == fwd.next.val:
                fwd.next= fwd.next.next
            else:
                fwd=fwd.next
        return head
                
                
        