def pow(nums,power):
    global count
    if power==0:
        return 1
    result=nums*pow(nums,power-1)
    return result

if __name__ == "__main__":
    n=int(input("Enter the number :"))
    p=int(input("Enter the power to the number :")) 
    print(pow(n,p))
