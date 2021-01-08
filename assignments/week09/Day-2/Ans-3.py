class Solution:
    def middleNode(self, head: ListNode) -> ListNode:
        index = 0
        link = head
        while link is not None:
            index += 1
            link = link.next
        
        index = index // 2
        for i in range(index):
            head = head.next
        
        return head 