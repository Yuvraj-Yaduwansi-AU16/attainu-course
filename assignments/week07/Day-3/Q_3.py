# VS Code solution with main
def groupAnagrams(strs):
    result = []
    i = 0
    j = 1
    index = []
    
    while i < len(strs):
        group = [strs[i]]
        j = i + 1
        
        for j in range(len(strs)):
            
            if strs[i] == "" and strs[j] == "" and i != j:
                group.append(strs[j])
                index.append(j)
                
            elif sorted(strs[i]) == sorted(strs[j]) and j not in index and i != j:
                group.append(strs[j])
                index.append(j)
            
        
        if i not in index:
            
            result.append(group)
        
        i += 1
        
    return result

if __name__ == '__main__':
    
    str_input = ["eat","tea","bat","ate","tan","nat"]
    
    print()
    
    print("The group of anagrams will be : ", groupAnagrams(str_input))