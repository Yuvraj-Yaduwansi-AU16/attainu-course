stack=list()
def push(x):
    global stack
    stack.append(x)
def pop():
    global stack
    stack.pop()
def peak():
    global stack
    return stack[len(stack)-1]
def is_empty():
    global stack
    return len(stack)==0

if __name__ == "__main__":
    push(5)
    push(8)
    push(99)
    pop()
    print("peak element is:" ,peak())
    push(4)
    pop()
    pop()
    print("Is stack empty: ",is_empty())
