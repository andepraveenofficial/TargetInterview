# Sorting
# Quick Sort

numbers_list = [2, 1, 5, 8, 4, 3, 7, 6]
print(numbers_list)

print("-------------------")


def quickSort(arr):
    print(arr)
    if len(arr) <= 1:
        return arr
    else:
        pivot = arr[0]

        # separate the list into two sub-arrays
        lesser = list(filter(lambda each : each <= pivot, arr[1:]))
        greater = list(filter(lambda each : each > pivot, arr[1:]))
        print(lesser, pivot, greater)
        print("---------------")

        lesserQuickSort = quickSort(lesser)
        print(lesserQuickSort)

        greaterQuickSort = quickSort(greater)
        print(greaterQuickSort)

        # Recursively apply QuickSort to the two sub-arrays and concatenate them
        output = [*lesserQuickSort, pivot,  *greaterQuickSort]
        print(output)
        print("-------------------")

        return output



sorted_arr = quickSort(numbers_list)
print(sorted_arr)

print("====================")
