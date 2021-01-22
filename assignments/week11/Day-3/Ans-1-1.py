n=5
graph = [[0 for _ in range (n+1)]for _ in range (n+1)]
def add(u,v,weight,directed):
    graph[u][v]=weight
    if not directed:
        graph[v][u]=weight
    
if __name__ == "__main__":
    add(1,2,1,True)
    add(0,3,1,True)
    add(1,3,1,True)
    add(3,2,1,True)
    add(2,5,1,True)
    for i in range(n+1):
        print(*graph[i])
