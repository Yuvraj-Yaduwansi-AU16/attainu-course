def uniquePaths(m,n,x,y):
    if x>m:
        return 0
    if y>n:
        return 0
    if x==m and y==n:
        return 1
    ans=uniquePaths(m,n,x+1,y)+uniquePaths(m,n,x,y+1)
    return ans

if __name__ == "__main__":
    m=int(input("Enter rows : "))
    n=int(input("Enter columns : "))
    s=uniquePaths(m-1,n-1,0,0)
    print("Number of ways robot can reach destination are :")
    print(s)