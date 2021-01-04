import random
# crime_percentages = []
#     "larceny" : 30,
#     "assault" : 26,
#     "armed robbery" : 19,
#     "fraud": 6,
#     "drug trafficking": 3,
#     "terrorism" :3, 
#     "murder" :8,
#     "kidnapping":2,
#     "embezzlement":3

# }


print(f"--------------------------- NEW SET =====================================")
for person in range(0,708):
    out = ""
    rnd = random.randrange(0,100)
    if rnd > 65:  #1/3rd of people have a criminal record
        priors = random.randrange(1,5)
    else:
        priors = 0
    out += f"{priors}"
    if priors > 0:
        for ea_conviction in range(priors):
            if ea_conviction < priors:
                out+=","
            x = random.randrange(0,100)
            if x < 30:
                out += "larceny"
            elif x<56:
                out+= "assault"
            elif x<75:
                out+="armed robbery"
            elif x<81:
                out+="fraud"
            elif x < 84:
                out+="drug trafficking"
            elif x < 87:
                out+="terrorism"
            elif x < 95:
                out+="murder"
            elif x < 97:
                out+="kidnapping"
            else:
                out+="embezzlement"
    
    print(f"{out}")