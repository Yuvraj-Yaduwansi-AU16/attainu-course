class Solution:
    def frequencySort(self, s: str) -> str:
        dictionary = {}
        for i in s:
            if i in dictionary:
                dictionary[i] += 1
            else:
                dictionary[i] = 1
        
        new = ''
        while dictionary:
            max_key = ''
            max_val = 0
            for key, value in dictionary.items():
                if value > max_val:
                    max_val = value
                    max_key = key
            new += max_key * max_val
            dictionary.pop(max_key)
            
        return new
