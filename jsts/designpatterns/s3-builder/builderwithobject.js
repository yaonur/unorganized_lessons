function Person (name, weight, height, gender) {
	this.name = name;
	this.weight = weight;
	this.height = height;
	this.gender = gender;
}

function PersonBuilder (name,gender) {
	this.name = name;
	this.gender = gender;

	this.setWeight = function(weight) {
		this.weight = weight;
		return this
	}
	this.setHeight = function(height) {
		this.height = height;
		return this;
	}

	this.build = function() {
		let person = new Person(this.name, this.weight, this.height, this.gender);
		person.toString = function() {
			return `Person name is ${this.name}, weight is ${this.weight}, height is ${this.height}, gender is ${this.gender}`;
		}
		return person
	}
}

// const patrick = new Person('Patrick', 70, 170, 'Male');
// console.log(patrick);
const devsage = new PersonBuilder('Devsage', 'Male').setWeight(70).setHeight(170).build()
console.log(devsage.toString());