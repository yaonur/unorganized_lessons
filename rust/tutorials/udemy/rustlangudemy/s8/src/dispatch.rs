//static dispatch
trait Duplicateable {
    fn dupl(&self) -> String;
}

impl Duplicateable for String {
    fn dupl(&self) -> String {
        format!("{}{}", self, self)
    }
}

impl Duplicateable for i32 {
    fn dupl(&self) -> String {
        format!("{}", self * 2)
    }
}

fn duplicate<T: Duplicateable>(item: T) {
    println!("{}", item.dupl());
}

// dynamic dispatch
fn dyn_duplicate (x: &dyn Duplicateable) {
	println!("dynamic {}", x.dupl());
}
pub fn run_dispatch() {
    let s = "Hello".to_string();
    let i = 5;
    // duplicate(s);
	// duplicate(i);
	dyn_duplicate(&s);
	dyn_duplicate(&i);

}
