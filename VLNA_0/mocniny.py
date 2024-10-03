n = int(input())

i = 1
vysledok = 0
while vysledok <= 500:
    vysledok = n ** i
    i += 1

print(n ** (i - 2))
