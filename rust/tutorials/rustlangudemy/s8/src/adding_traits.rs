use std::ops::Add;
trait Summable<T> {
	fn sum(&self) -> T;
}

impl Summable<i32> for Vec<i32> {
	fn sum(&self) -> i32 {
		let mut sum = 0 ;
		for i in self {
			sum += *i;
		}
		sum 
	}
}

#[derive(Debug)]
struct Point {
	x: f64,
	y: f64
}

impl Add for Point {
	type Output = Point;
	fn add (self,other: Self) -> Self::Output {
		Point {x: self.x + other.x, y: self.y + other.y}
	}
}

pub fn run_adding() {
	let a = vec![1,2,3,4,5];
	println!("sum= {}", a.sum());
	let p1 = Point{x: 1.3, y: 2.2};
	let p2 = Point{x: 3.3, y: 4.2};
	let p3 = p1 + p2;
	println!("point is:{:?}", p3);
}