def merge(a, start_one, end_one, start_two, end_two):
    p1 = start_one
    p2 = start_two
    temp = []

    while p1 <= end_one and p2 <= end_two:
        if a[p1] < a [p2]:
            temp.append(a[p1])
            p1 += 1
        else:
            temp.append(a[p2])
            p2 += 1
    
    while p1 <= end_one:
        temp.append(a[p1])
        p1 += 1

    while p2 <= end_two:
        temp.append(a[p2])
        p2 += 1

    i = 0
    while i < len(temp):
        a[i + start_one] = temp[i]
        i += 1

def mergeSort(a, left, right):
    if left >= right:
        return

    mid = (left + right) >> 1
    mergeSort(a, left, mid)
    mergeSort(a, mid + 1, right)

    merge(a, left, mid, mid + 1, right)

if __name__ == "__main__":
    a = [5,6,9,8,5,6,1,233,34,11,10]
    print("Unsorted array" ,a)
    right = len(a) - 1

    mergeSort(a, 0, right)

    print("sorted array" ,a)