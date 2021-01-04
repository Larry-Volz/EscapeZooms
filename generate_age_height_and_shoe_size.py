import random
import math
#1132 for 1st run
print (f"Age, height, weight, shoe size")
for ea in range(1132):
    age = random.randrange(18,48)
    feet = random.randrange(5,7)
    inches = random.randrange(0,12)
    if feet == 6 and inches > 4:
        rnd = random.randrange(0,100)
        if rnd < 90:
            inches = random.randrange(0,12)
    shoe_size = (feet*12 + inches)/6.4
    fractional, whole = math.modf(shoe_size)
    if fractional >= 0.5:
        shoe_size = whole+0.5
    else:
        shoe_size = whole
    #BMI calculations:
    #40 = morbidly obese
    #18-25 = healthy
    #26.55 = average American
    #BMI = kg/m^2
    #kg = BMI*m^2
    # so randomize BMI to 18-42
    bmi = random.randrange(18,43)
    m = (feet*12+inches)*0.0254
    kg = bmi*(m**2)
    weight = int(kg*2.20462)


    print (f"{age},{feet}'{inches}\",{weight}, {shoe_size}")