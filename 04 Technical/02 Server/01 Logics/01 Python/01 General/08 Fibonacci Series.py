# Fibonacci Series

given_number = 10  # int(input())
print(given_number)

print("--------------")

fibonacci_sequence = [0, 1]

for counter in range(0, given_number-2):
    add_number = fibonacci_sequence[counter] + fibonacci_sequence[counter+1]
    fibonacci_sequence.append(add_number)

print(fibonacci_sequence)

print("=====================")



