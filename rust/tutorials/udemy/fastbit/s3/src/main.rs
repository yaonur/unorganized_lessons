#[allow(overflowing_literals)]
fn main() {
    let code = b'+';
    let code2 = 43 as char;
    println!("code = {}", code as char);
    println!("code2 = {}", code2);
}
