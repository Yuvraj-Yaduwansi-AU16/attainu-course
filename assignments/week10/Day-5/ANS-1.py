class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        dictionary = {}
        for i in nums:
            if i in dictionary:
                dictionary[i] += 1
            else:
                dictionary[i] = 1
                
        new = []
        for _ in range(k):
            max_key = ''
            max_val = 0
            for key, value in dictionary.items():
                if value > max_val:
                    max_val = value
                    max_key = key
            new.append(max_key)
            dictionary.pop(max_key)
        
        return new