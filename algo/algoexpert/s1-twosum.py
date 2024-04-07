def twoNumberSum(array, targetSum):
    nums = {}
    for num in array:
        potentialMatch = targetSum - num
        if potentialMatch in nums:
            return [potentialMatch, num]
        else:
            nums[num] = True
    return []


if __name__ == "__main__":
    print(twoNumberSum([3, 5, -4, 8, 11, 1, -2, -1], 10))
