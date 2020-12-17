first=0
second=1
count=1
sums=0
def fibonacci(nums):
    global count
    global first
    global second
    global sums
    if count==nums:
        print("Number at position" , nums , "is ")
        print(first)
        return
    sums=first+second
    second=first
    first=sums
    count+=1
    fibonacci(nums)

if __name__ == "__main__":
    nums=int(input("Enter the position of fibonacci number you wanna see  :  "))
    fibonacci(nums)