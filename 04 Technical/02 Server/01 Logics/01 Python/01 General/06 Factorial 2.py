# Factorial

# Function
def findFactorial(num):
    if num <= 0:
        return 1
    output = num * findFactorial(num-1)
    return output

given_number = 5  # int(input())
print(given_number)

print("----------------")

factorial = findFactorial(given_number)
print(factorial)

print("==================")
