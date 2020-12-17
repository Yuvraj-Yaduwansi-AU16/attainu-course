count=0
def str_length(strr):
    global count
    if strr=="":
        return 0
    count+=1
    str_length(strr[:-1])
    return count

if __name__ == "__main__":
    string =input("Enter the string to calculate its length :") 
    print(str_length(string))