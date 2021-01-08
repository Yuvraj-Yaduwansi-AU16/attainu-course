class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        number_string_one = ''
        number_string_two = ''
        while l1 is not None:
            number_string_one = str(l1.val) + number_string_one
            l1 = l1.next
        while l2 is not None:
            number_string_two = str(l2.val) + number_string_two
            l2 = l2.next
            
        no = int(number_string_one) + int(number_string_two)
        
        l3 = ListNode()
        head = l3
        while no > 0:
            print(no)
            l3.val = no % 10
            no //= 10
            if no <= 0:
                break
            new_node = ListNode()
            l3.next = new_node
            l3 = new_node
        
        return head