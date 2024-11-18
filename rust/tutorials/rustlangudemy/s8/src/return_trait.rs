struct Dog {}
struct Cat {}
trait Animal {
    fn make_noise(&self) -> &'static str;
}

impl Animal for Dog {
	fn make_noise(&self) -> &'static str {
		"Woof"
	}
}
impl Animal for Cat {
	fn make_noise(&self) -> &'static str {
		"Meow"
	}
}

fn get_animal(rand_number: f64) -> Box<dyn Animal> {
    if rand_number < 1.0 {
        Box::new(Dog{})
    } else {
		Box::new(Cat{})
	}
}

pub fn run_return_trait() {
    let animal = get_animal(0.5);
    println!("{}", animal.make_noise());
}
