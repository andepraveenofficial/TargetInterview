
# ArmStrong Number

given_number = "153"  # input()
print(given_number)

print("-------------------")

power = len(given_number)

result = 0
for each_char in given_number:
    each_num = int(each_char)
    add_value = each_num ** power
    result += add_value

is_armstrong = int(given_number) == result

print(is_armstrong)  # True

print("======================")




