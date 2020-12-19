def selection_sort(num):
    n=len(num)
    min_ele=0
    min_ele_idx=0
    for i in range (n):
        min_ele= num[i]
        min_ele_idx=i
        for idx in range (i+1,n):
            if (num[idx]<min_ele):
                min_ele=num[idx]
                min_ele_idx=idx
        num[i] ,num[min_ele_idx] = num[min_ele_idx] , num[i]
    return num

if __name__ == "__main__":
    size= int(input("Enter the array size :"))
    num=list()
    for i in range (size):
        num.append(int(input("Enter the element   :")))
    print("Selection Sorted list is")
    print(selection_sort(num))

# Time Complexity is O(n^2) 
# Space Complexity is O(1) as no extra variables(list,dict tuple etc) are used
    