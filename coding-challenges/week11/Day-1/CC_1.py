class Solution:
    def climbStairs(self, n: int) -> int:
        start=0
        dp=[None]*1005
        def solve(start,n):
            if start==n:
                return 1
            if start>n:
                return 0
            if dp[start]!= None:
                return dp[start]
            l=solve(start+1,n)
            r=solve(start+2,n)
            dp[start]= l+r
            return dp[start]
        x= solve(start,n)
        return x