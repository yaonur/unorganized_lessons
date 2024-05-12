let Relationship = Object.freeze({
    parent: 0,
    child: 1,
    sibling: 2,
});

class Person {
    constructor(name) {
        this.name = name;
    }
}

// Low-level module
class RelationshipBrowser {
	constructor() {
		if (this.constructor.name === 'RelationshipBrowser') {
			throw new Error('Abstract class cannot be instantiated.');
		}
	}
	findAllChildrenOf(name) {
		throw new Error('Not implemented.');
	}
}

class Relationships extends RelationshipBrowser {
    constructor() {
		super();
        this.data = [];
    }

    addParentAndChild(parent, child) {
        this.data.push({
            from: parent,
            type: Relationship.parent,
            to: child,
        });
    }

	findAllChildrenOf(name) {
		let children = this.data.filter(
			(r) => r.from.name === name && r.type === Relationship.parent
		);
		return children.map((c) => c.to);
	}
}

//high - level module
class Research {
	constructor(relBrowser) {
		for (let p of relBrowser.findAllChildrenOf('John')) {
			console.log(`John's child: ${p.name}`);
		}
	}
}

let parent = new Person("John");
let child1 = new Person("Jane");
let child2 = new Person("Joe");

let rels = new Relationships();
rels.addParentAndChild(parent, child1);
rels.addParentAndChild(parent, child2);

new Research(rels);
