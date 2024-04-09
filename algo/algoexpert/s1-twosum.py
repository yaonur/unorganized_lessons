def bareTwoNumberSum(array, targetSum):
    print("bareTwoNumberSum")
    for i  in range(len(array)-1):
        firstNum = array[i]
        for j in range(len(array)-1):
            if (i+1+j) == len(array):
                break
            secondNum = array[i+1+j]
            if firstNum + secondNum == targetSum:
                return [firstNum, secondNum]
    return []

# O(n^2) time | O(1) space
def twoNumberSum(array, targetSum):
    print("twoNumberSum >>>>>>>>")
    for i in range(len(array)-1):
        print("--------------------")
        firstNum = array[i]
        print("firstNum: ", firstNum)
        for j in range(i+1, len(array)):
            secondNum = array[j]
            print(secondNum)
            if firstNum + secondNum == targetSum:
                return [firstNum, secondNum]
        print("-------------------->>")
    return []


if __name__ == "__main__":
    print(bareTwoNumberSum([3, 5, -4, 8, 11, 1, -2, -1], 10))
    print(twoNumberSum([3, 5, -4, 8, 11, 1, -2, -1], 10))
