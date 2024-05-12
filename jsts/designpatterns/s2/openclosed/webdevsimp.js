function printQuiz(questions) {
	questions.forEach(
		question => {
			console.log(question.description) 
			switch(question.type) {
				case 'boolean':
					console.log("1. True")
					console.log("2. False")
					break
				case'multiple':
					question.answers.forEach(
						(option, index) => console.log(`${index + 1}. ${option}`)
					)
					break
				case 'text':
					console.log("Answer:______________")
					break
				// adding new type 
				case 'range':
					console.log("Minimum:___________")
					console.log("Maximum:___________")
					break
			}
			console.log("")
		}
	)
}
const questions = [
	{
		description: "What is the correct syntax for creating an object in JavaScript?",
		type: "multiple",
		answers: [
			"object = new Object();",
			"object = Object.create(null);",
			"object = {};",
			"object = Object.create(Object.prototype);"
		],
		correctAnswer: "object"
	},
	{
		type: "boolean",
		description: "Is JavaScript case sensitive?",
	},
	{
		type: "text",
		description: "What is the correct way to declare a function in JavaScript?"
	},
	// new type 
	{
		type: "range",
		description: "what is the speed limit of a car in miles per hour?",
	}
]

printQuiz(questions)
class BooleanQuestion {
	constructor(description) {
		this.description = description
	}

	printQuestionChoices() {
		console.log("1. True")
		console.log("2. False")
	}
}

class MultipleChoiceQuestion {
	constructor(description, options) {
		this.description = description
		this.options = options
	}

	printQuestionChoices() {
		this.options.forEach((option,index) => {
			console.log(`${index + 1}. ${option}`)
		})
	}
}

class TextQuestion {
	constructor(description) {
		this.description = description
	}

	printQuestionChoices() {
		console.log("Answer:______________")
	}
}

class RangeQuestion {
	constructor(description) {
		this.description = description
	}

	printQuestionChoices() {
		console.log("Minimum:___________")
		console.log("Maximum:___________")
	}
}

function printQuiz2(questions) {
	questions.forEach(
		question => {
			console.log(question.description)
			question.printQuestionChoices()
			console.log("")
		}
	)
}

const questions2 = [
	new BooleanQuestion("Is JavaScript case sensitive?"),
	new TextQuestion("What is the correct way to declare a function in JavaScript?"),
	new RangeQuestion("what is the speed limit of a car in miles per hour?"),
	new MultipleChoiceQuestion("What is the correct syntax for creating an object in JavaScript?", [
		"object = new Object();",
		"object = Object.create(null);",
		"object = {};",
		"object = Object.create(Object.prototype);"
	])
]

console.log("/////////////////------------>>>>>>>>>>>>>>>>>>>")
printQuiz2(questions2)