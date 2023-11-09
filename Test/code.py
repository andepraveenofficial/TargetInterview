# SUDOKU

from itertools import permutations, combinations

# rows = 4
# columns = 4

numbers = [1, 2, 3, 4]

numbers_permutations = list(permutations(numbers))
numbers_combinations = combinations(numbers_permutations, 4)

all_sudokus = []
for item in numbers_combinations:
    item_equal_sum = 0
    for counter in range(len(item)):
        column_values = []
        for each_item in item:
            column_values.append(each_item[counter])
        if len(set(column_values)) == 4:
            item_equal_sum += 1
    if item_equal_sum == 4:
        all_sudokus.append(item)

for item in all_sudokus:
    for each_item in item:
        print(*each_item)
    print("-----------------")

print(len(all_sudokus))

print("==================")


rows = 4
columns = 4


user_matrix = []

for row_count in range(rows):
    add_row = tuple(map(int, input().split()))
    user_matrix.append(add_row)


"""
1 0 0 0
0 0 0 0
0 0 0 4
3 0 0 1
"""

print(user_matrix)

my_dictionary = dict()

for row_count in range(rows):
    for column_count in range(columns):
        item = user_matrix[row_count][column_count]
        if item != 0:
            my_dictionary[item] = (row_count, column_count)

print(my_dictionary)

find_sudoku = []
for each_sudoku in all_sudokus:
        is_move = True
        for value, keys in my_dictionary.items():
            row_count, column_count = keys
            sudoku_value = each_sudoku[row_count][column_count]
            if sudoku_value == value:
                pass
            else:
                is_move = False
                break
        if is_move == True:
            find_sudoku.append(each_sudoku)


print(find_sudoku)




