import random

class Student:
    def __init__(self , name , roll_number):
        self.name = name
        self.roll_number = roll_number
        self.age = ""
        self.marks = ""

    
    def Display(self):
        print("Details of student are :")
        print(f"Name of the student is {self.name} and roll number is {self.roll_number}")
        print(f"Age of the student {self.name} is {self.age}")
        print(f"Marks of the student {self.name} is {self.marks}")



    def set_age(self):
        print("Enter the student's age")
        age = int (input())
        self.age = age

    def set_marks(self):
        print("Enter the marks obtained :")
        marks = float (input())
        self.marks = marks


