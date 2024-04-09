targetArray = [5, 1, 22, 25, 6, -1, 8, 10, 5]
sequenceArray = [1, 6, -1, 10, 5]


def validateSubsequenceBare(array, sequence):
    sequenceLength = len(sequence)
    sequenceCounter = 1
    targetLength = len(array)
    sequenceElements = 0
    targetStartIndex = 0
    while True:
        # print("main loop --")
        if sequenceElements == sequenceLength:
            return True

        for i in sequence:
            if sequenceCounter > targetLength or targetStartIndex >= targetLength:
                return False
            # print(f">>>> checking element i:{i}")
            targetCounter = 0
            for j in range(targetStartIndex, targetLength):
                # print(f"searching in target Array :{array[j]} >>>")
                targetCounter += 1
                if array[j] == i:
                    # print(f"find element: {i}")
                    sequenceElements += 1
                    targetStartIndex = j + 1
                    break
                if targetCounter == targetLength:
                    # print("returning")
                    return False
            sequenceCounter += 1


# O(n) time | O(1) space
def validateSubsequence(array, sequence):
    arrIdx = 0
    seqIdx = 0
    while arrIdx < len(array) and seqIdx < len(sequence):
        if array[arrIdx] == sequence[seqIdx]:
            seqIdx += 1
        arrIdx += 1
    return seqIdx == len(sequence)


def validateSubsequenceWithFor(array, sequence):
	seqIdx = 0
	for value in array:
		print(f"checking {sequence[seqIdx]} with value:{value}")
		if sequence[seqIdx] == value:
			seqIdx += 1
		if seqIdx == len(sequence):
			return True
	return False


print(validateSubsequenceBare(targetArray, sequenceArray))
print(validateSubsequence(targetArray, sequenceArray))
print(validateSubsequenceWithFor(targetArray,sequenceArray))