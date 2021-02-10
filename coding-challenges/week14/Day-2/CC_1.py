class Solution:
    def predictPartyVictory(self, senate: str) -> str:
        s = list(senate)
        i = 0
        j = 0
        while True:
            while i < len(s) and s[i] != 'R':
                i += 1
                
            if i == len(s):
                return 'Dire'

            while j < len(s) and s[j] != 'D':
                j += 1
                
            if j == len(s):
                return 'Radiant'

            if i < j:     
                s[j] = 'X'
                s.append('R')
            else:
                s[i] = 'X'
                s.append('D')
            i += 1
            j += 1