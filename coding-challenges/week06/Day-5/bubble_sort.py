def bubble_sort(num):
    n=len(num)
    for i in range(n):
        for j in range(0,n-1):
            if num[j]> num[j+1]:
                num[j] , num[j+1] = num[j+1] , num[j]
    return num


if __name__ == "__main__":
    size= int(input("Enter the array size :"))
    num=list()
    for i in range (size):
        num.append(int(input("Enter the element   :")))
    print("Bubble Sorted list is")
    print(bubble_sort(num))

# Time Complexity is O(n^2) 
# Space Complexity is O(1) as no extra variables(list,dict tuple etc) are used
    