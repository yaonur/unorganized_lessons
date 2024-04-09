#![allow(unused_variables)]
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
fn main(){
	let array = [3, 5, -4, 8, 11, -1, -10];
	let target_sum = 10;
	println!("{:?}", two_sum(array.to_vec(), target_sum));
}

