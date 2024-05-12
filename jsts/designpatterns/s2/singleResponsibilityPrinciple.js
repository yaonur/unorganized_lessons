class Journal {
	constructor() {
		this.entries =[] 
	}

	addEntry(text) {
		let c = ++Journal.count;
		let entry = `${c}: ${text}`
		this.entries[c] = entry
		return c
	}
	removeEntry(id) {
		delete this.entries[id]
	}
	toString() {
		return Object.values(this.entries).join('\n')
	}
}
Journal.count = 0

let j = new Journal()
j.addEntry('I ate a bug')
j.addEntry('walked the dog')
console.log(j.toString())