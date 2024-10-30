def is_palindrome(s):
    dlzka = len(s)
    stred = dlzka // 2

    if dlzka % 2 == 0:
        first_half = s[0:dlzka - stred]
        second_half = s[dlzka - stred:dlzka]
    elif dlzka % 2 != 0:
        first_half = s[0]
        second_half = s[-1]

    r_second_half = second_half[::-1]

    if first_half == r_second_half:
        return True
    else:
        return False

print(is_palindrome("masdm"))
