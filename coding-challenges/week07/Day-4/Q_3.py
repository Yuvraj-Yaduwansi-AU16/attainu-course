class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:  
        n = len(strs)
        if n == 0:
            return ""
        elif n == 1:
            return strs[0]
        
        common_prefix = []
        common_prefix = list(strs[0])
        for i in range(1, len(strs)):
            element = list(strs[i])
            new_common = []
            for j in range(len(common_prefix)):
                if j < len(element) and element[j] == common_prefix[j]:
                    new_common.append(common_prefix[j]) 
                else:
                    break  
            common_prefix = new_common.copy()

        return ''.join(common_prefix)