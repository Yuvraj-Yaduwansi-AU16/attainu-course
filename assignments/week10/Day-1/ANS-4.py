class Solution:
    def numberOfSteps (self, num: int) -> int:
        counter = 0
        def iterate(num):
            nonlocal counter
            if num < 1:
                return
            elif num % 2 == 0:
                counter += 1
                return iterate(num // 2)
            else:
                counter += 1
                return iterate(num - 1)
        
        iterate(num)
        return counter