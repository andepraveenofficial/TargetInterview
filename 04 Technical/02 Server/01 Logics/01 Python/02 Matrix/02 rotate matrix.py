rows, columns = list(map(int, input().split()))

matrix = []
for row_count in range(rows):
    add_row = list(map(int, input().split()))
    matrix.append(add_row)
    


rotate_matrix = []
for column_index in range(columns):
    add_row  = []
    for row_index in range(rows):
        add_column = matrix[row_index][column_index]
        add_row.append(add_column)
    add_row = add_row[::-1]
    rotate_matrix.append(add_row)

print(rotate_matrix)