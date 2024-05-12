class Store {
	constructor(user) {
		this.paypal = new Paypal()
		this.stripe = new Stripe(user)
	}
	purchaseBike(quantity) {
		this.stripe.makePayment(200 * quantity * 100)
	}

	purchaseHelmet(quantity) {
		this.stripe.makePayment(15 * quantity * 100)
	}
}

class Stripe {
	constructor(user){
		this.user = user
	}
	makePayment(amountInCents) {
		console.log(`${this.user} made payment of $${amountInCents/100} with Stripe`)
	}
}

class PayPal {
	makePayment(user,amountInDollars) {
		console.log(`${user} made payment of $${amountInDollars} with Paypal`)
	}
}
console.clear()
const store = new Store('John')
store.purchaseBike(2)
store.purchaseHelmet(2)