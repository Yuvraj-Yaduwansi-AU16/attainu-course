class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        dict = {}
        res = []

        for i in nums1:
            if i in dict:
                dict[i] += 1
            else:
                dict[i] = 1

        for j in nums2:
            if j in dict and  dict[j] > 0:
                res.append(j)
                dict[j] -= 1

        return res