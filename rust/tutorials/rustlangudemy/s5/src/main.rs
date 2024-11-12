
fn main() {
    let primes = [2, 3, 5, 7, 9, 11];
    let doubles: [f64; 4] = [1.0, 2.0, 3.0, 4.0];
    println!("primes[0]: {}", primes[0]);
    let numbers = [0;15];
    println!("{:?}", numbers);
    const DEFAULT: i32 = 3;
    let mut numbers = [DEFAULT; 15];
    println!("{:?}", numbers);
    numbers[3] = 5;
    for number in numbers.iter() {
        println!("{}", number);
    }
}
