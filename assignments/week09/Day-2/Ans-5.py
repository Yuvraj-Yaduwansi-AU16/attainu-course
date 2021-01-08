class Solution:
    def isPalindrome(self, head: ListNode) -> bool:
        result = list()
        while head is not None:
            result.append(head.val)
            head = head.next
            
        return result == result[::-1]