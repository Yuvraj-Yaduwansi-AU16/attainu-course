from student import Student

if __name__=="__main__":
    print("Enter name of the student")
    name = input()
    print("Enter Roll Number of the student")
    roll_number = int(input())
    Yuvraj = Student(name , roll_number)
    Yuvraj.set_age()
    Yuvraj.set_marks()
    Yuvraj.Display()