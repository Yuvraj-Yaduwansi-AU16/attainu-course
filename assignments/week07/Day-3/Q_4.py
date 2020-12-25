def solve(s,t):
    n=len(s)
    collection=list()
    c=0
    for i in range(n):
        for j in range(i,n+1):
            temp=s[i:j]
            if temp!="" and len(temp)>1:
                if not is_repeated(temp):
                    for k in temp:
                        if k in t:
                            c+=1
                    if c==len(t):
                        collection.append(temp)
                    c=0
    

    return collection

def  is_repeated(s):
    map=dict()
    for ch in s:
        if ch not in map:
            map[ch]=1
        else:
            return True
    return False
 
if __name__ == "__main__":
    s="ADOBECODEBANC"
    target="ABC"
    ls=list()
    final=""
    target1=""

    for xx in target:
        if xx not in target1:
            target1+=xx
    ls=solve(s,target1)
    min=len(ls[0])

    for i in ls:
        if len(i)<min:
            min=len(i)
            final=i
    print("Minimum length substring with target string is:")
    print(final)