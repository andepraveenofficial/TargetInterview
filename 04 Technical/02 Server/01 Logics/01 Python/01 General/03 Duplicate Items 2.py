# Remove Duplicate Items in a List

given_list = [5, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4]  # list(map(int, input().split()))
print(given_list)

print("----------------")

unique_items_list = []
for each_item in given_list:
    if each_item in unique_items_list:
        pass
    else:
        unique_items_list.append(each_item)


print(unique_items_list)  # [5, 1, 2, 3, 4]

print("====================")




