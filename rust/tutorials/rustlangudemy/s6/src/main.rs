// use rand;
use rand::prelude::*;
fn main() {
    let mut rng = rand::thread_rng();
    let num: f64 = rng.gen();
    println!("num:{}", num);
    if num >= 0.5 {
        println!("Number {} is greater or equal to .5", num);
    } else if num == 0.4 {
        println!("Number {} is equal to .4", num)
    } else {
        println!("Number {} is smaller that 0.5", num);
    }

    print_choice(Suit::Heart);
    country(88);
    country(44);
    for i  in 0..15 {
        println!("{}. I have {} oranges",i,get_oranges(i));
    }
}
enum Suit {
    Heart,
    Spade,
    Club,
    Diamond,
}

fn country(code: i32) {
    let country  = match code {
        44 => "UK",
        32 => "Spain",
        1..999 => "unkown",
        _ => "unvalid"
    };
    println!("Country is {}", country);
}

fn print_choice(choice: Suit) {
    match choice {
        Suit::Heart => { println!("\u{2665}") }
        Suit::Spade => {println!("\u{2660}")}
        Suit::Club => {println!("\u{2663}")}
        Suit::Diamond => {println!("\u{2660}")}
    }
}

fn get_oranges(amount:i32) -> &'static str {
    return match amount {
        0 => "no",
        1|2 => "one or two",
        3..=7 => "a few",
        _ if (amount % 2==0) => "an even amount of",
        _ => "lots of"
    }
}
 
fn match_tuple () {
    let point = (0,0);
    match point {
        (0,0) => println!("origin"),
        (x,0) => println!("x axis ({},0)",x),
        (0,y) => println!("y axis (0,{})",y),
        (x,y) => println!("({},{})",x,y)
    }
}
