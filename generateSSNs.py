import random
for i in range(1132):
    ssn = ""
    counter = 0
    while counter < 9:
        digit = random.randrange(0,9)
        ssn += str(digit)
        counter += 1
        if counter == 3 or counter == 5:
            ssn+= "-"
    ssn += ","
    print (ssn, end = "\n")

