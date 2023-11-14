# Sorting
# Insertion

numbers_list = [2, 1, 5, 8, 4, 3, 7, 6]
print(numbers_list)

print("-------------------")

for main_counter in range(len(numbers_list)):
    selected_number = numbers_list[main_counter]
    for sub_counter in range(main_counter-1, -1, -1):
        minimum_number = numbers_list[sub_counter]
        if selected_number < minimum_number:
            numbers_list[sub_counter], numbers_list[sub_counter+1] = numbers_list[sub_counter+1], numbers_list[sub_counter]
            print(numbers_list)
        else:
            break

print("------------------")

print(numbers_list)

print("================")
