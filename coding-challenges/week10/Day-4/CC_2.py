import heapq
class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        heap=[]
        for i in nums:
            heapq.heappush(heap,-1*i)
        cnt=0
        ans=-1
        while cnt<k:
            ans=-1*heapq.heappop(heap)
            cnt+=1
        return ans