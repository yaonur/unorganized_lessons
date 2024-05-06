<script lang='ts'> 
import type {Action} from "svelte/action"

const green: Action =(element) =>{
	element.style.color="green"
}
const text: Action<HTMLElement,string> = (element,text) => {
	element.innerText=text
}
</script>

<h1 use:green>Heading Of Basic</h1>
<p use:text={"some text"}></p>