#[derive(Debug)]
pub struct Person {
    name: String,
    age: i32,
    children: i32,
}

#[derive(Debug)]
pub enum Color {
    Red(String),
    Blue,
    Green,
}

impl Person {
    pub fn print(self) -> String {
        format!(
            "name = {}, age = {}, children = {}",
            self.name, self.age, self.children
        )
    }
}
fn main() {
    let p = Person {
        name: "Alice".to_string(),
        age: 20,
        children: 2,
    };
    println!("{:?}", p);
    let c = Color::Red("Very reddy".to_string());
    println!("Color:{:?}", c);
    match c {
        Color::Red(s) => println!("Red:{}", s),
        Color::Blue => println!("Blue"),
        Color::Green => println!("Green"),
    }
}
