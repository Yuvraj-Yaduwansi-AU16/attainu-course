from circle import Circle

if __name__=="__main__":
    print("Enter the radius of the circle")
    radius = float(input())
    Radius = Circle(radius)
    Radius.get_area()
    Radius.get_circumference()