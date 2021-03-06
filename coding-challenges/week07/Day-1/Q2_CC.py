class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        p1 = 0
        p2 = 0
        
        while p1 < m and p2 < n:
            if nums1[p1] <= nums2[p2]:
                p1 += 1
            else:
                nums1.insert(p1, nums2[p2])
                nums1.pop()
                p2 += 1
                p1 += 1
                m += 1
        
        while p2 < n:
            if nums1[p1] <= nums2[p2] and nums1[p1] != 0:
                p1 += 1
            else:
                nums1.insert(p1, nums2[p2])
                nums1.pop()
                p2 += 1
                p1 += 1