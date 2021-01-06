# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        p1=l1
        p2=l2
        head3=None
        cur=None
        if l1== None:
            return l2
        if l2 == None:
            return l1
        while p1!= None and p2!=None:
            if p1.val<p2.val:
                if head3 is None:
                    head3=ListNode(p1.val)
                    cur=head3
                else:
                    cur.next=ListNode(p1.val)
                    cur=cur.next
                p1=p1.next
            else:
                if head3 is None:
                    head3=ListNode(p2.val)
                    cur=head3
                else:
                    cur.next=ListNode(p2.val)
                    cur=cur.next
                p2=p2.next
        while p1!=None:
            cur.next=ListNode(p1.val)
            cur=cur.next
            p1=p1.next
        while p2!=None:
            cur.next=ListNode(p2.val)
            cur=cur.next
            p2=p2.next
        return head3