class Solution:
    def isValid(self, s: str) -> bool:
        stack=list()
        for c in s:
            if c=="(" or c=="{" or c=="[":
                stack.append(c)
            else:
                x=len(stack)
                if x==0:
                    return False
                elif c==")" and stack[x-1]=="(":
                    stack.pop()
                elif c=="}" and stack[x-1]=="{":
                    stack.pop()
                elif c=="]" and stack[x-1]=="[":
                    stack.pop()
                else:
                    return False
        if len(stack)==0:
            return True
        return False
                    