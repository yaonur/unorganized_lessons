package main

import "fmt"

func TwoNumberSum(array []int, target int) []int {
	for i := 0; i < len(array); i++ {
		for j := i + 1; j < len(array); j++ {
			if array[i]+array[j] == target {
				return []int{array[i], array[j]}
			}
		}
	}
	return []int{}
}

func TwoNumberSumS2(array []int, target int) []int {
	nums := make(map[int]bool)
	for _, num := range array {
		if _, ok := nums[target-num]; ok {
			return []int{target - num, num}
		} else {
			nums[num] = true
		}
	}
	return []int{}
}

func main() {
	array := []int{3, 5, -4, 8, 11, 1, -2, -1}
	target := 10
	fmt.Println(TwoNumberSum(array, target))
}
