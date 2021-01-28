class Solution:
    def safe(self,row,col,ch):
        r=row
        c=col
        while r>=0 and c<self.n:
            if ch[r][c]=='Q':
                return False
            r-=1
            c+=1
            
        r=row
        c=col
        while r<self.n and c<self.n:
            if ch[r][c]=='Q':
                return False
            r+=1
            c+=1
        
        r=row
        c=col
        while r>=0 and c>=0:
            if ch[r][c]=='Q':
                return False
            r-=1
            c-=1
        
        r=row
        c=col
        while r<self.n and c>=0:
            if ch[r][c]=='Q':
                return False
            r+=1
            c-=1
        
        r=row
        c=col
        while c<self.n:
            if ch[r][c]=='Q':
                return False
            c+=1
        
        r=row
        c=col
        while c>=0:
            if ch[r][c]=='Q':
                return False
            c-=1
        
        r=row
        c=col
        while r<self.n:
            if ch[r][c]=='Q':
                return False
            r+=1
        
        r=row
        c=col
        while r>=0:
            if ch[r][c]=='Q':
                return False
            r-=1
        
        return True
    def solve(self,row,ch):
        if row==self.n:
            temp=list()
            for row in ch:
                temp.append("".join(row))
            self.res.append(temp)
            return
        for col in range(0,self.n):
            if self.safe(row,col,ch):
                ch[row][col]='Q'
                self.solve(row+1,ch)
                ch[row][col]='.'
                
    def solveNQueens(self, n: int) -> List[List[str]]:
        self.n=n
        self.res=list()
        ch=[["."for _ in range(self.n)]for _ in range(self.n)]
        self.solve(0,ch)
        return self.res