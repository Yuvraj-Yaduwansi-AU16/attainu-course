def tiling(n):
    if n<0:
        return 0
    if n==0:
        return 1
    ans=tiling(n-1)+tiling(n-2)
    return ans

n=int(input("Enter the number of columns :"))
print("Number of tiles that can be arranged in 2 rows" , n , "columns are")
print(tiling(n))