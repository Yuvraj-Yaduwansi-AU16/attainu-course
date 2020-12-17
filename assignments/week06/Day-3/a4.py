count=0
def sum(nums):
    global count
    if nums==1:
        return 1
    count=nums+sum(nums-1)
    return count

if __name__ == "__main__":
    n= int(input("Enter the number till where you wanna see the sum : "))
    print(sum(n))