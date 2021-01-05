class Node :
    def __init__(self,data):
        self.data=data
        self.next=None

head=None
def delFromFront():
    global head
    head=head.next

def delFromEnd():
    global head
    cur=head
    prev=None
    while cur.next is not None:
        prev=cur
        cur=cur.next
    prev.next=None

def delFromRandom(pos):
    global head
    cur=head
    cnt=1
    prev=None
    if pos<1:
        return
    if pos == 1:
        head=head.next
    while cnt is not pos:
        prev=cur
        cur=cur.next
        cnt+=1
    prev.next=cur.next


def addAtBeginning(x):
    global head
    if head is None:
        head=Node(x)
        return
    node=Node(x)
    node.next=head
    head=node

def addAtEnd(x):
    global head
    cur=head
    while cur.next is not None:
        cur=cur.next
    cur.next=Node(x)

def addAtRandom(x,pos):
    global head
    cnt=1
    cur=head
    while cnt!= pos:
        cur=cur.next
        cnt+=1
    cur_neighbor=cur.next
    new_node=Node(x)

    cur.next=new_node
    new_node.next=cur_neighbor

    if pos<=0:
        return
    
def printing():
    global head
    cur =head
    print("Node elements from head to tail are :")
    while cur!=None:
        print(cur.data)
        cur=cur.next

def search(x):
    global head
    cur=head
    while cur.next is not None:
        if cur.data is x:
            return True
        cur=cur.next
    return False

def length():
    global head
    cur =head
    cnt=1
    while cur.next is not None:
        cur=cur.next
        cnt+=1
    return cnt

if __name__ == "__main__":
    addAtBeginning(1)
    addAtEnd(4)
    addAtRandom(2,1)
    addAtBeginning(11)
    addAtRandom(22,1)
    addAtEnd(44)
    printing()

    print()
    print("Now searching for element in the LinkList:")
    print(search(9))
    print(search(2))

    print()
    print("Length of the Link List is :", length())
    delFromEnd()
    print()

    print("List after deleting from End is:")
    printing()
    delFromRandom(2)
    print()

    print("List elements after deleting from Random position are:")
    printing()

    print()
    print()
    
    delFromFront()
    printing()
    