import heapq
if __name__ == "__main__":
    heap = []
    n = int(input("Enter how many values you want to make a min heap   :"))
    for i in range (n):
        x = int(input("Enter values to make a min heap   :"))
        heapq.heappush(heap,x)
    heapq.heapify(heap)
    print("Formed Min heap is" ,heap)
    