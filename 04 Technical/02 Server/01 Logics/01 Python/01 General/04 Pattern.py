# X - Pattern

number_of_rows = 5  # int(input())
print(number_of_rows)

print("---------------")

for counter in range(number_of_rows):
    row = [" "] * number_of_rows
    star = "*"
    row[counter] = star
    row[-counter - 1] = star
    print(*row)

print("================")

#  Output

"""
*   *
 * *
  *
 * *
*   *
"""







