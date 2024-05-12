/* 
Builder Coding Exercise
You are asked to implement the Builder design pattern for rendering simple chunks of code.

Sample use of the builder you are asked to create:

let cb = new CodeBuilder('Person');
cb.addField('name').addField('age');
console.log(cb.toString());
The expected output of the above code is:

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
Please observe the same placement of spaces and indentation.
*/

class Person {
	constructor(name) {
		this.name = name;
		this.age = age;
	}
}

class CodeBuilder
{
  constructor(person = new Person()) {
	// todo
    this.person = person;
  }

  addField(name)
  {
    // todo
    // reminder: we want a fluent interface
	
  }

  toString()
  {
    // todo
  }
}

let cb = new CodeBuilder('Person');
cb.addField('John').addField('32');
console.log(cb.toString());