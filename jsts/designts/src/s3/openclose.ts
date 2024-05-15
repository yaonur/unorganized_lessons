// regular - 10
// premium - 20
interface Customer {
    giveDiscount(): number;
    addLoyaltyPoints(amountSpent: number): number;
}

// bad approach
// class Discount {
// 	giveDiscount(customerType: 'premium' | 'regular'):number {
// 		if(customerType === 'regular') {
// 			return 10;
// 		} else if (custormerType==='premium'){
// 			return 20;
// 		} else {
// 			return 10;
// 		}
// 	}
// }

class RegularCustomer implements Customer {
    giveDiscount(): number {
        return 10;
    }
    addLoyaltyPoints(amountSpent: number): number {
        return amountSpent;
    }
}

class PremiumCustomer implements Customer {
    giveDiscount(): number {
        return 20;
    }
    addLoyaltyPoints(amountSpent: number): number {
        return 2 * amountSpent;
    }
}

class Discount {
    giveDiscount(customer: Customer): number {
        return customer.giveDiscount();
    }
}

export function main() {
    let premiumCustomer: PremiumCustomer = new PremiumCustomer();
    let discount: Discount = new Discount();

    console.log(discount.giveDiscount(premiumCustomer));
}
