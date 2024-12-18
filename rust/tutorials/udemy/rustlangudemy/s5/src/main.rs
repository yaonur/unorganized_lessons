use std::vec;
mod generics;
use crate::Person::Name;


fn main() {
    let primes = [2, 3, 5, 7, 9, 11];
    let doubles: [f64; 4] = [1.0, 2.0, 3.0, 4.0];
    println!("primes[0]: {}", primes[0]);
    let numbers = [0; 15];
    println!("{:?}", numbers);
    const DEFAULT: i32 = 3;
    let mut numbers = [DEFAULT; 15];
    println!("{:?}", numbers);
    numbers[3] = 5;
    for number in numbers.iter() {
        println!("{}", number);
    }
    // vectors
    // let mut primes: Vec<i32> = Vec::new();
    let mut primes = vec![2, 3, 5, 7, 9, 11];
    println!("primes:{:?}", primes);
    primes.push(13);
    println!("primes:{:?}", primes);
    primes.remove(0);
    println!("primes:{:?}", primes);
    let mut numbers = vec![2; 10];
    println!("{:?}", numbers);
    // const DEFAULT = true;
    let values = vec![DEFAULT; 10];
    println!("{:?}", values);
    numbers[5] = 8;
    for number in numbers.iter() {
        println!("{}", number);
    }

    // slice
    let numbers = [1, 2, 3, 4, 5];
    let number_slice = &numbers[1..4];
    println!("number slice:{:?}", number_slice);
    // number_slice[0]= 111;

    let mut colors = ["red", "green", "blue", "yellow"];
    update_colors(&mut colors[2..4]);
    println!("colors:{:?}", colors);

    // tuples
    let mut person = ("John", 23, true);
    println!("person:{:?}", person);
    println!(
        "name:{}, age:{}, is employed:{}",
        person.0, person.1, person.2
    );
    person.0 = "Jane";
    let (name, age, employment) = person;
    println!("name:{}, age:{}, is employed:{}", name, age, employment);

    // structures
    let emp = Employee {
        name: "John".to_string(),
        company: "Rust".to_string(),
        age: 23,
    };
    println!("employee:{:?}", emp);
    println!("emloye name:{}", emp.name);
    let details = emp.fn_details();
    println!("details:{:?}", details);
    println!("{}",Employee::static_fn_detail());
    
    //enums
    let my_color = Colors::Red;
    println!("{:?}",my_color);
    let person = Name(String::from("Alex"));
    println!("person name:{:?}",person);

    // generics
    generics::run_generics();
}

#[derive(Debug)]
struct Employee {
    name: String,
    company: String,
    age: i32,
}

impl Employee {
    fn fn_details(&self) -> String {
        format!( "name:{}, company:{}, age:{}", &self.name, &self.company, &self.age )
    }
    fn static_fn_detail() -> String {
        String::from("Details of person")
    }
}

fn update_colors(colors_slice: &mut [&str]) {
    colors_slice[0] = "orange";
    colors_slice[1] = "purple";
}
#[derive(Debug)]
enum Colors {
    Red,
    Green,
    Blue
}

#[derive(Debug)]
enum Person {
    Name(String),
    Surname(String),
    Age(u32)
}
