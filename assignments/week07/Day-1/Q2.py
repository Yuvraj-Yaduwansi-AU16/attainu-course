def merge(arr, l, m, r):
    p1 = l

    p2 = m + 1
    
    temp = []

    while p1 <= m and p2 <= r:
        
        if arr[p1] < arr[p2]:
            temp.append(arr[p1])
            p1 += 1
        
        else:
            temp.append(arr[p2])
            p2 += 1
    
    
    while p1 <= m:
        temp.append(arr[p1])
        p1 += 1

    
    while p2 <= r:
        temp.append(arr[p2])
        p2 += 1

    i = 0
    
    while i < len(temp):
        arr[i + l] = temp[i]
        i += 1
        