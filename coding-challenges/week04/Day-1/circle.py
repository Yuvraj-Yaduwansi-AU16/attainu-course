class Circle:
    def __init__(self , radius):
        self.radius = radius

    def get_area(self):
        area =  self.radius * self.radius * 3.14
        print(f"Area of the circle of radius {self.radius} is " , area )

    def get_circumference(self):
        circumference = 2*3.14*self.radius
        print(f"Circumference of the circle with radius {self.radius} is " , circumference)