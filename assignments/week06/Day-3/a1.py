count=0
def vowels(strr):
    global count
    if strr=="":
        return 0
    elif strr[-1]=='a' or strr[-1]=='e' or strr[-1]=='i' or strr[-1]=='o' or strr[-1]=='u':
        count+=1
    elif strr[-1]=='A' or strr[-1]=='E' or strr[-1]=='I' or strr[-1]=='O' or strr[-1]=='U':
        count+=1
    strr=strr[:-1]
    vowels(strr)
    return count

if __name__ == "__main__":
    string =input("Enter the string to check for vowels :") 
    print(vowels(string))