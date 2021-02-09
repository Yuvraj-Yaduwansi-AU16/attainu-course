class Solution:
    def firstUniqChar(self, s: str) -> int:
        ls=list()
        D=dict()
        for x in  s:
            ls.append(x)
        for i in range(len(ls)):
            if ls[i] not in D:
                D[ls[i]]=i
            else:
                D[ls[i]]=-1
        copy=dict(D)
        dict_l=len(D)
        for key , value in D.items():
            if value==-1:
                del copy[key]
        
        length=len(copy)
        if length==0:
            return -1
        else:
            min = list(copy.values())[0]
            for key , value in copy.items():
                if value<min:
                    min=value
            return min
            
                
        