#Code runs on geeksforgeeks website link fortunately.

import heapq
def minCost(a,n) :
    '''
    use heapq module , imported already by driver code.
    :param a: given array
    :param n: size of array
    :return: Integer
    '''
    # code here
    heap=[]
    for x in a:
        heapq.heappush(heap,x)
    cost=0
    while len(heap)!=1:
        x=heapq.heappop(heap)
        y=heapq.heappop(heap)
        cost+=x+y
        heapq.heappush(heap,x+y)
    return cost