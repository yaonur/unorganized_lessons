mod generics;
mod return_trait;
mod adding_traits;
mod dispatch;
use generics::run_generics;
use return_trait::run_return_trait;
struct RustDev {
    awesome: bool
}

struct JavaDev {
    awesome: bool
}
trait Developer {
    fn new(awesome: bool) -> Self;
    fn language(&self) -> &str;
    fn say_hello(&self) {
        println!("Hello, I'm a {} developer", self.language());
    }
}

impl Developer for RustDev {
    fn new(awesome: bool) -> Self {
        RustDev {awesome:awesome}
    }

    fn language(&self) -> &str {
        "Rust"
    }
    fn say_hello(&self) {
        println!("println!(\"Hello world!\");");
    }
}

impl Developer for JavaDev {
    fn new(awesome: bool ) -> Self {
        JavaDev {awesome:awesome}
    }
    fn language(&self) -> &str {
        "Java"
    }
    fn say_hello(&self) {
        println!("System.out.println(\"Hello world!\");");
    }
}
fn main() {
    // let r  = RustDev {awesome: true};
    let r = RustDev::new(true);
    let j = JavaDev::new(false);
    println!("{}",r.language());
    run_generics();
    run_return_trait();
    adding_traits::run_adding();
    dispatch::run_dispatch();
}
