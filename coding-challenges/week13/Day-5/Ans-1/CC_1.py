class Solution:
    def longestPalindrome(self, s: str) -> int:
        log = {}
        for i in s:
            if i in log:
                log[i] += 1
            else:
                log[i] = 1
        
        length = 0
        for val in log.values():
            if val < 2:
                continue
                
            elif val == 2:
                length += 2
            
            else:
                if val %2 == 0:
                    length+=val
                else:
                    length+=val-1
        
        if len(s) == length:
            return length
        
        else:
            return length + 1