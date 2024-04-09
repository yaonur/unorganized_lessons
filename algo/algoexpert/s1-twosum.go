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

func main() {
	array := []int{3, 5, -4, 8, 11, 1, -2, -1}
	target := 10
	fmt.Println(TwoNumberSum(array, target))
}
