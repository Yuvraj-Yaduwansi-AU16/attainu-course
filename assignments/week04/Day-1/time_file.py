class Time:

    def __init__(self, hours, minutes):
        self.hours = hours
        self.minutes = minutes

    def addTime(self, time_one, time_two):
        self.hours = time_one.hours + time_two.hours
        self.minutes = time_one.minutes + time_two.minutes

        condition = True
        while condition == True:
            if self.minutes - 60 > 0:
                self.minutes = self.minutes - 60
                self.hours = self.hours + 1
            else:
                condition = False
      
        print()
        print(f"Total Hours : {self.hours} and Total Minutes : {self.minutes} ")
    

    def display_time(self):
        print(f"Time is {self.hours} hours and {self.minutes} minutes")

    def display_minutes(self):
        print(f"Total time in minutes is " ,(self.hours*60)+self.minutes)