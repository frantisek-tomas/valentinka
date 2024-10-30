def packer(potatoes: str) -> str:
    
    if not potatoes:
        return ""

    count = 0
    count_potatoes = 0
    potatoes_list = potatoes.split()
    result = []

    for i in potatoes_list:
        count += 1
        count_potatoes += int(i)

        if count == 5:
            result.append(f"\\{count_potatoes}\\")
            count = 0
            count_potatoes = 0

    return " ".join(result)

# testy:
assert packer("") == ""
print(packer("1 2 3 4 5 6 7 8 9 1"))  # "\15\ \31\"
print(packer("1 1 1 1 1"))  # "\5\"
