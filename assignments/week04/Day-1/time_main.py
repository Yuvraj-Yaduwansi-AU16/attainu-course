from time_file import Time   

if __name__ == "__main__":
    
    print()
    hours_one =   int(input("Enter the hours for first object : "))
    minutes_one = int(input("Enter the minutes for first object : "))
    time_one = Time(hours_one , minutes_one)


    print()
    hours_second = int(input("Enter the hours for second object : "))
    minutes_second = int(input("Enter the minutes for second object : "))
    time_two = Time(hours_second,minutes_second)
    
    
    print()
    time_total = Time(0,0)
    time_total.addTime(time_one, time_two)
    
    print()
    print("Displaying first time Object")
    time_one.display_time()
    
    print()
    print("Displaying Second time Object")
    time_two.display_time()
    
    print()
    print("Displaying First time in minutes")
    time_one.display_minutes()
    
    print()
    print("Displaying Second time in minutes")
    time_two.display_minutes()
