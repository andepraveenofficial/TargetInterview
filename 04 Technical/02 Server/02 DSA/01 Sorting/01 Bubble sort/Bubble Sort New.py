# Sorting
# Bubble Sort

numbers_list = [2, 1, 5, 8, 4, 3, 7, 6]
print(numbers_list)

print("---------------------")


for main_counter in range(len(numbers_list)):
    for sub_counter in range(main_counter+1, len(numbers_list)):
        left_number = numbers_list[main_counter]
        right_number = numbers_list[sub_counter]
        if left_number > right_number:
            numbers_list[main_counter], numbers_list[sub_counter] = numbers_list[sub_counter], numbers_list[main_counter]
            # print(numbers_list)

print("---------------")

print(numbers_list)

print("======================")
