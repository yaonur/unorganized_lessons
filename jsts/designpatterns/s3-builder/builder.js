const hello = "hello";

let html = [];
html.push("<p>");
html.push(hello);
html.push("</p>");
console.log(html.join(""));

const words = ["hello", "world"];

html = [];

html.push("<ul>\n");
for (let word of words) html.push(`  <li>${word}</li>\n`);
html.push("</ul>\n");

console.log(html.join(""));

class Tag {
    static get indentSize() {
        return 2;
    }
    constructor(name = "", text = "") {
        this.name = name;
        this.text = text;
        this.children = [];
    }

    toStringImpl(indent) {
        let html = [];
        let i = " ".repeat(indent * Tag.indentSize);
        html.push(`${i}<${this.name}>\n`);
        if (this.text.length > 0) {
            html.push(" ".repeat(Tag.indentSize * (indent + 1)));
            html.push(this.text);
            html.push("\n");
        }
        for (let child of this.children)
            html.push(child.toStringImpl(indent + 1));

        html.push(`${i}</${this.name}>\n`);
        return html.join();
    }
    toString() {
        return this.toStringImpl(0);
    }
}

class HtmlBuilder {
	constructor(rootName){
		this.root = new Tag(rootName);
		this.rootName = rootName;
	}

	addChild(childName , childText) {
		let child = new Tag(childName, childText);
		this.root.children.push(child);
		return this;
	}
	toString() {
		return this.root.toString();
	}

	clear() {
		this.root = new Tag(this.rootName);
	}

	build() {
		return this.root;
	}
}

let builder = new HtmlBuilder("ul");
for (let word of words) builder.addChild("li", word);

// console.log(builder.toString());
builder.clear();
builder.addChild("li", "foo").addChild("li", "bar");
console.log(builder.toString());