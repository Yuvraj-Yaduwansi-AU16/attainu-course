class Solution:
    def firstUniqChar(self, s: str) -> int:
      
        dict = {}
        index = []
        
        for i in s:
            
            if i in dict.keys():
                dict[i] += 1
            
            else:
                dict[i] = 1
        
        for key, value in dict.items():
            
            if value == 1:
                index.append(s.index(key))
        
        if len(index) != 0:
            return min(index)
        
        return -1