from temperature import Temperature

if __name__ == "__main__":
    print("Enter the Temperature value")
    temperature = float (input())
    Temp = Temperature(temperature)
    print("Considering the value you entered is in celsius so its Fahrenheit equivalent is")
    Temp.convert_fahrenheit()
    print("Considering the value you entered is in Fahrenheit so its Celsius equivalent is")
    Temp.convert_celsius()

