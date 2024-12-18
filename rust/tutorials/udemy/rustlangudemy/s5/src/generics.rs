#[allow(dead_code)]
// pub mod generics;
#[derive(Debug)]
pub struct Point<T> {
    x: T,
    y: T,
}
struct Point2<T,U> {
	x: T,
	y: U,
}

#[derive(Debug)]
enum Colors<T> {
	Red(T),
	Green(T),
	Blue(T),
}

pub fn run_generics() {
    let p1: Point<i32> = Point { x: 6, y: 8 };
    let p2: Point<f64> = Point { x: 6.0, y: 8.0 };
    println!("point 1:{:?}", p1);
    println!("point 2:{:?}", p2);

	let c1 = Colors::Red("#f00");
	let c2 = Colors::Green("#0f0");
	println!("color 1:{:?}", c1);
	println!("color 2:{:?}", c2);

	let p3: Point2<i32,f64> = Point2 { x: 6, y: 8.0 };
}
