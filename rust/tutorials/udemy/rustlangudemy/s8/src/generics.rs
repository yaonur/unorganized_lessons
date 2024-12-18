trait Bark {
	fn bark(&self) -> String;
}

struct Dog {
	species: &'static str
}

struct Cat {
	color: &'static str
}

impl Bark for Dog {
	fn bark(&self) -> String {
		return format!("{} barking", self.species)
	}
}

fn bark_it<T: Bark>(animal: T) {
	println!("{}", animal.bark());
}

pub fn run_generics () {
	let dog = Dog{species: "Retriever"};
	let cat = Cat {color: "Black"};
	bark_it(dog);
	// bark_it(cat);
}