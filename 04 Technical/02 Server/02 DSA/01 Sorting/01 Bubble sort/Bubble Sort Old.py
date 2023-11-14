# Sorting
# Bubble Sort

numbers_list = [2, 1, 5, 8, 4, 3, 7, 6]
print(numbers_list)

print("---------------------")

swap = None
for passnum in range(len(numbers_list)):
    swap = False
    for counter in range(0, len(numbers_list)-1):
        left_number = numbers_list[counter]
        right_number = numbers_list[counter+1]
        if left_number > right_number:
            numbers_list[counter] = right_number
            numbers_list[counter+1] = left_number
            swap = True
            print(numbers_list)
    if not swap:
        break

print("----------------")

print(numbers_list)

print("======================")
