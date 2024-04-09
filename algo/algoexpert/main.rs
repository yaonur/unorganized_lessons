#![allow(unused_variables)]
use std::collections::HashMap;
fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
	let mut result: Vec<i32> = vec![];
	for i in 0..nums.len() {
		for j in i+1..nums.len() {
			if nums[i] + nums[j] == target {
				result.push(nums[i]);
				result.push(nums[j]);
				return result;
			}
		}
	}
	return result;
}
fn two_sum_s2(nums: Vec<i32>, target: i32) -> Vec<i32> {
	let mut result: Vec<i32> = vec![];
	let mut nums_map: HashMap<i32, bool> = HashMap::new();
	for num in nums {
		if let Some(_) = nums_map.get(&(target - num)) {
			result.push(num);
			result.push(target - num);
			return result;
		} else {
			nums_map.entry(num).or_insert(true);
		}
	}
	return result;
}
fn main(){
	let array = [3, 5, -4, 8, 11, -1, -10];
	let target_sum = 10;
	println!("{:?}", two_sum(array.to_vec(), target_sum));
	println!("{:?}", two_sum_s2(array.to_vec(), target_sum));
}

