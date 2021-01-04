import random
for i in range(708):
    plate = ""
    counter = 0
    while counter < 6:
        digit = random.randrange(48,90)
        if digit <58 or digit > 64:
            plate += chr(digit)
            counter += 1
            if counter == 3:
                plate+= " "
    # plate += ","
    print (plate, end = "\n")

