# Sorting
# Selection Sort

numbers_list = [2, 1, 5, 8, 4, 3, 7, 6]
print(numbers_list)

print('---------------')


for main_counter in range(0, len(numbers_list)):
    selected_number = numbers_list[main_counter]
    minimum_number = selected_number
    for sub_counter in range(main_counter+1, len(numbers_list)):
        maximum_number = numbers_list[sub_counter]
        if minimum_number > maximum_number:
            minimum_number = maximum_number
            minimum_index = sub_counter
    if selected_number > minimum_number:
        numbers_list[main_counter], numbers_list[minimum_index] = numbers_list[minimum_index], numbers_list[main_counter]

    print(numbers_list)

print("--------------------")

print(numbers_list)

print("================")






