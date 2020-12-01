class Temperature:
    def __init__ (self , temperature):
        self.temperature = temperature

    def convert_fahrenheit(self):
     temp_in_f = (self.temperature * 1.8) + 32
     print(f"Temperature {self.temperature} in Fahrenheit is : " , temp_in_f)

    def convert_celsius(self):
     temp_in_c = (self.temperature - 32) / 1.8
     print(f"Temperature {self.temperature} in Celsius is : " , temp_in_c)
    