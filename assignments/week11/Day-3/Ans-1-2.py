graph = dict()
def add(u,v,weight,directed):
    if u not in graph:
        graph[u]=list()
    
    graph[u].append((v,weight))
    if not directed:
        if v not in graph:
            graph[v]= list()
        graph[v].append((u,weight))
    
if __name__ == "__main__":
    add(1,2,1,True)
    add(0,3,10,True)
    add(1,3,100,True)
    add(3,2,1,True)
    add(2,5,155,True)
    for i,j in graph.items():
        print(f"{i} has neighbours{j}")
