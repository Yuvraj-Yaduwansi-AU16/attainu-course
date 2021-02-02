class Solution:
    def maximumWealth(self, accounts: List[List[int]]) -> int:
        customers = []
        for i in accounts:
            customers.append(sum(i))
        return max(customers)    
