def ispalindrome(s):
    return s == s[::-1]

n = 999
m = 999

arr = []


for i in range(n, 0, -1):
    for j in range (m, 0, -1):   
        answer = j * i
        if ispalindrome(str(answer)):
            arr.append(answer)
print(max(arr))   
