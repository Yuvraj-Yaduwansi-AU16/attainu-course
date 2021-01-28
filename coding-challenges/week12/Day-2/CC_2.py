class Solution:
    def solve(self,idx,temp):
        if sum(temp)>self.target:
            return
        if sum(temp)==self.target:
            ans=sorted(temp[:])
            ans=",".join(map(str,ans))
            self.res.add(ans)
            return
        for i in range(idx,len(self.candidates)):
            temp.append(self.candidates[i])
            self.solve(idx,temp)
            temp.pop()
            
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        self.candidates=candidates
        self.target= target
        self.res=set()
        self.solve(0,[])
        ans=list()
        for s in self.res:
            ans.append(map(int,s.split(",")))
        return ans