class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        char = dict()
        n=len(s)
        start=0
        end =0
        max_len=0
        while end<n:
            if s[end] not in char:
                char[s[end]]=end
                length=end-start+1
                max_len=max(max_len,length)
                end+=1
            else:
                while s[end] in char:
                    char.pop(s[start])
                    start+=1
                char[s[end]]=end
                end+=1
        return max_len
        