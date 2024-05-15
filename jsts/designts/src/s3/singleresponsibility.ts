
class BlogPost {
	title: string;
	content: string;
	constructor(title: string, content:string){
		this.title =title
		this.content = content;
	}

	createPost() {
	
	}

	updatePost() {

	}

	deletePost() {

	}
	
	// bad approach
	// displayHTML() {
	// 	return `<h1>${this.title}</h1><p>${this.content}</p>`
	// }
}

class BlogPostDisplay {
	constructor(public blogPost:BlogPost) {

	}
	displayHTML() {
		return `<h1>${this.blogPost.title}</h1><p>${this.blogPost.content}</p>`
	}
}


export function main() {
	console.log("single")
}